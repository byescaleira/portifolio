/**
 * Gravura — o gerador de linha do sistema.
 *
 * Porte do `gravura.py` do brand book. Tom é densidade de linha e a linha
 * acompanha a forma: numa esfera os meridianos achatam na borda e engrossam na
 * sombra, e isso é cálculo, não pulso. Ver SISTEMA.md §5 e PROMPTS.md §6.
 *
 * Existe em TS porque duas coisas precisam do mesmo desenho: os componentes da
 * página e a rota /api/gravura. Antes o SVG era gerado no terminal e colado no
 * .tsx, o que significa que mudar o gerador não mudava o site — a cópia
 * envelhecia calada. Uma fonte só resolve isso.
 */

export type Traco = {
  tipo: "traco";
  d: string;
  cor: "tinta" | "luz";
  peso: number;
  opacidade?: number;
  /** A nave é o único traço de ponta reta: é peça, não linha de gravura. */
  ponta?: "reta";
};
export type Elipse = {
  tipo: "elipse";
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  giro: number;
  cor: "tinta" | "luz";
  peso: number;
  opacidade?: number;
};
export type Elemento = Traco | Elipse;
export type Figura = { elementos: Elemento[]; largura: number; altura: number };

/**
 * Quantos meridianos cabem sem a hachura fechar, no tamanho de USO.
 * Abaixo de ~2,5px de espaçamento real a linha encosta na vizinha e o desenho
 * vira mancha cinza — a única coisa que este sistema não pode ter.
 */
export const passosPara = (px: number) =>
  Math.max(8, Math.min(34, Math.round(px / 13)));

/** O SVG escala, então em tamanho pequeno a linha precisa nascer mais grossa. */
export const pesoPara = (px: number) => Math.max(1, (300 / Math.max(px, 1)) * 0.9);

const n1 = (v: number) => Number(v.toFixed(1));
const n2 = (v: number) => Number(v.toFixed(2));

export function esfera(px = 400, cx = 214, cy = 214, r = 186, luz = -0.45): Figura {
  const n = passosPara(px);
  const k = pesoPara(px);
  const elementos: Elemento[] = [];

  for (let i = 0; i < n; i++) {
    const t = -1 + (2 * (i + 0.5)) / n; // posição na face, -1 .. 1
    const rx = Math.abs(t) * r; // o meridiano achata na borda
    const sweep = t > 0 ? 1 : 0;
    const d = Math.abs(t - luz) / 1.6; // distância da luz
    elementos.push({
      tipo: "traco",
      d: `M${cx} ${cy - r}A${n1(rx)} ${r} 0 0 ${sweep} ${cx} ${cy + r}`,
      cor: t > -0.98 && t < -0.72 ? "luz" : "tinta", // o limbo aceso
      peso: n2((0.5 + 2.5 * Math.min(d, 1) ** 1.5) * k), // engrossa na sombra
    });
  }
  for (let j = 1; j < 7; j++) {
    const kk = j / 7;
    const ry = r * Math.cos((kk * Math.PI) / 2);
    for (const s of [-1, 1]) {
      const yy = cy + s * r * Math.sin((kk * Math.PI) / 2);
      elementos.push({
        tipo: "traco",
        d: `M${n1(cx - ry)} ${n1(yy)}A${n1(ry)} ${n1(ry * 0.22)} 0 0 0 ${n1(cx + ry)} ${n1(yy)}`,
        cor: "tinta",
        peso: n2(0.75 * k),
        opacidade: 0.55,
      });
    }
  }
  elementos.push({
    tipo: "elipse",
    cx,
    cy,
    rx: r + 14,
    ry: r + 14,
    giro: 0,
    cor: "tinta",
    peso: n2(k),
    opacidade: 0.7,
  });
  return { elementos, largura: cx * 2, altura: cy * 2 };
}

/**
 * A prancha orbital. A diferença de traço entre as duas metades é o ponto: a
 * elipse é o INSTRUMENTO e tem peso constante; o globo é o ASTRO e tem peso
 * variável. É o que separa medida de matéria numa prancha.
 */
export function orbitas(px = 600, cx = 300, cy = 300, r = 112, n = 4): Figura {
  const { elementos } = esfera(px, cx, cy, r);
  for (let i = 0; i < n; i++) {
    const rx = r * (1.5 + i * 0.42);
    elementos.push({
      tipo: "elipse",
      cx,
      cy,
      rx: n1(rx),
      ry: n1(rx * (0.2 + i * 0.055)),
      giro: -22 + i * 15,
      cor: i === 1 ? "luz" : "tinta",
      peso: i === 1 ? 1.5 : 0.9,
      opacidade: i === 1 ? 0.95 : 0.55,
    });
  }
  // a nave: um risco curto e grosso na órbita acesa, não um ícone
  const a = (-7 * Math.PI) / 180;
  const mx = cx + r * 1.92;
  const my = cy - 42;
  const gira = (x: number, y: number) => [
    n1(cx + (x - cx) * Math.cos(a) - (y - cy) * Math.sin(a)),
    n1(cy + (x - cx) * Math.sin(a) + (y - cy) * Math.cos(a)),
  ];
  const [x1, y1] = gira(mx - 9, my);
  const [x2, y2] = gira(mx + 9, my);
  elementos.push({
    tipo: "traco",
    d: `M${x1} ${y1}L${x2} ${y2}`,
    cor: "luz",
    peso: 8,
    ponta: "reta",
  });
  return { elementos, largura: cx * 2, altura: cy * 2 };
}

/**
 * Uma estrela e a escala de buril ao lado: medida, não decoração.
 * Os raios têm comprimento desigual de propósito — raio igual vira floco de
 * neve, mesma regra da curvatura desigual que fecha a forma orgânica.
 */
export function estrela(px = 600, cx = 300, cy = 250, r = 150, raios = 16): Figura {
  const k = pesoPara(px);
  const elementos: Elemento[] = [];
  for (let i = 0; i < raios; i++) {
    const a = (2 * Math.PI * i) / raios;
    const longo = i % 4 === 0 ? r : i % 2 === 0 ? r * 0.58 : r * 0.34;
    elementos.push({
      tipo: "traco",
      d: `M${cx} ${cy}L${n1(cx + longo * Math.cos(a))} ${n1(cy + longo * Math.sin(a))}`,
      cor: i % 4 === 0 ? "luz" : "tinta",
      peso: n2((i % 4 === 0 ? 2.2 : 1.1) * k),
    });
  }
  elementos.push({
    tipo: "elipse",
    cx,
    cy,
    rx: n1(7 * k),
    ry: n1(7 * k),
    giro: 0,
    cor: "luz",
    peso: n2(14 * k),
  });
  // a escala de buril: quatro degraus de densidade, do mais fechado ao aberto
  const y0 = cy + r + 52;
  [
    [4, 2.6],
    [6, 1.6],
    [9, 1.0],
    [13, 0.6],
  ].forEach(([passo, largura], p) => {
    const x0 = cx - 220 + p * 116;
    for (let j = 0; j < Math.floor(96 / passo); j++) {
      elementos.push({
        tipo: "traco",
        d: `M${x0} ${n1(y0 + j * passo)}h96`,
        cor: "tinta",
        peso: largura,
      });
    }
  });
  return { elementos, largura: cx * 2, altura: y0 + 130 };
}

export const FIGURAS = { esfera, orbitas, estrela } as const;
export type NomeFigura = keyof typeof FIGURAS;

/** Serializa para SVG cru — o que /api/gravura devolve. */
export function paraSVG(f: Figura, tinta = "#131A38", luz = "#FF6B00"): string {
  const cor = (c: "tinta" | "luz") => (c === "luz" ? luz : tinta);
  const op = (o?: number) => (o === undefined ? "" : ` opacity="${o}"`);
  const corpo = f.elementos
    .map((e) =>
      e.tipo === "traco"
        ? `<path d="${e.d}" stroke="${cor(e.cor)}" stroke-width="${e.peso}" fill="none" stroke-linecap="${e.ponta === "reta" ? "butt" : "round"}"${op(e.opacidade)}/>`
        : `<ellipse cx="${e.cx}" cy="${e.cy}" rx="${e.rx}" ry="${e.ry}"${e.giro ? ` transform="rotate(${e.giro} ${e.cx} ${e.cy})"` : ""} stroke="${cor(e.cor)}" stroke-width="${e.peso}" fill="none"${op(e.opacidade)}/>`
    )
    .join("\n  ");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${f.largura} ${f.altura}" fill="none">\n  ${corpo}\n</svg>\n`;
}
