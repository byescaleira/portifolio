"use client";

import { useMemo, useState } from "react";

import { ALTURA, LARGURA, carta } from "@/lib/capacidades";

/**
 * A carta celeste — a seção de capacidades.
 *
 * Era um bento de cards. Agora é o que a metáfora vinha pedindo desde a
 * decisão 006: uma prancha de céu, com estrelas de magnitude sobre a gratícula.
 *
 * A magnitude é CONTADA — quantas das sete passagens usam a tecnologia — então
 * a seção deixa de ser uma lista de qualidades autodeclaradas e passa a estar
 * amarrada ao trabalho. Ninguém precisa acreditar; o número está no catálogo.
 *
 * A carta é a figura; o CATÁLOGO é o conteúdo. Quem lê por teclado ou por
 * leitor de tela recebe a tabela inteira, e a carta é decorativa para ele. Um
 * gráfico que esconde o dado é pior que uma lista.
 */

/** Uma estrela gravada: raios de comprimento desigual. Igual vira floco de neve. */
function Raios({ m, aceso }: { m: number; aceso: boolean }) {
  const r = 4 + m * 2.1;
  const curto = r * 0.42;
  const w = aceso ? 1.9 : 1.15;
  return (
    <g
      stroke={aceso ? "var(--luz)" : "currentColor"}
      strokeWidth={w}
      strokeLinecap="round"
      fill="none"
    >
      <path d={`M0 ${-r}V${r}M${-r} 0H${r}`} />
      <path
        d={`M${-curto} ${-curto}L${curto} ${curto}M${curto} ${-curto}L${-curto} ${curto}`}
        opacity={0.6}
      />
    </g>
  );
}

/** A escala de buril fazendo de legenda de densidade — SISTEMA.md §6. */
function Densidade({ m, aceso }: { m: number; aceso: boolean }) {
  const passo = [0, 11, 8, 6, 4.5, 3.5][Math.min(m, 5)];
  const linhas = Math.floor(22 / passo);
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" aria-hidden="true" className="shrink-0">
      <g
        stroke={aceso ? "var(--luz)" : "currentColor"}
        strokeWidth={m >= 4 ? 1.9 : m >= 2 ? 1.4 : 1}
        strokeLinecap="round"
      >
        {Array.from({ length: linhas }, (_, i) => (
          <path key={i} d={`M2 ${2 + i * passo}h30`} />
        ))}
      </g>
    </svg>
  );
}

export function CartaCeleste() {
  const constelacoes = useMemo(() => carta(), []);
  const [aceso, setAceso] = useState<string | null>(null);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
      {/* A FIGURA */}
      <figure className="flex flex-col gap-3">
        <svg
          viewBox={`0 0 ${LARGURA} ${ALTURA}`}
          className="graticula-fina w-full border border-hairline text-ink"
          role="img"
          aria-label="Carta celeste das capacidades: vinte e uma tecnologias agrupadas em quatro constelações, com o tamanho de cada estrela indicando em quantas passagens ela aparece. O catálogo ao lado traz os mesmos dados em texto."
        >
          {constelacoes.map((c) => (
            <g key={c.id}>
              {/* as linhas da constelação: régua fina, peso constante */}
              <path
                d={c.estrelas.map((e, i) => `${i ? "L" : "M"}${e.x} ${e.y}`).join("")}
                stroke="currentColor"
                strokeWidth="0.6"
                fill="none"
                opacity={aceso && !c.estrelas.some((e) => e.nome === aceso) ? 0.18 : 0.42}
              />
              <text
                x={c.centro.x}
                y={c.centro.y - 84}
                textAnchor="middle"
                className="font-mono"
                fontSize="10"
                letterSpacing="2.6"
                fill="currentColor"
                opacity="0.72"
              >
                {c.nome.toUpperCase()}
              </text>
              {c.estrelas.map((e) => (
                <g
                  key={e.nome}
                  transform={`translate(${e.x} ${e.y})`}
                  onMouseEnter={() => setAceso(e.nome)}
                  onMouseLeave={() => setAceso(null)}
                  style={{ cursor: "default" }}
                >
                  <Raios m={e.magnitude} aceso={aceso === e.nome} />
                  {/* alvo de mouse maior que a estrela: raio fino não se acerta */}
                  <circle r="16" fill="transparent" />
                  {(e.magnitude >= 4 || aceso === e.nome) && (
                    <text
                      x={0}
                      y={e.magnitude * 2.1 + 17}
                      textAnchor="middle"
                      className="font-mono"
                      fontSize="9.5"
                      letterSpacing="1.4"
                      fill={aceso === e.nome ? "var(--luz)" : "currentColor"}
                    >
                      {e.nome.toUpperCase()}
                    </text>
                  )}
                </g>
              ))}
            </g>
          ))}
        </svg>
        <figcaption className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
          Fig. 1 &mdash; magnitude é o número de passagens, não opinião
        </figcaption>
      </figure>

      {/* O CATÁLOGO — o conteúdo de verdade */}
      <div className="flex flex-col gap-8">
        {constelacoes.map((c) => (
          <section key={c.id}>
            <div className="flex items-baseline justify-between gap-4 border-b-[2.5px] border-foreground pb-1.5">
              <h3 className="versalete text-[12px] text-ink">{c.nome}</h3>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3">
                {c.estrelas.length} estrelas
              </span>
            </div>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-2">{c.legenda}</p>
            <ul className="mt-3">
              {c.estrelas.map((e) => (
                <li
                  key={e.nome}
                  onMouseEnter={() => setAceso(e.nome)}
                  onMouseLeave={() => setAceso(null)}
                  // O retorno da linha é o gesto do buril: a régua aprofunda.
                  // Cor não serve aqui — accent-ink é anil no claro, então
                  // trocar a cor do nome não muda nada que se veja.
                  className={`flex items-center gap-4 py-2 transition-[border-width] duration-150 ${
                    aceso === e.nome
                      ? "border-b-2 border-foreground"
                      : "border-b border-hairline"
                  }`}
                >
                  <Densidade m={e.magnitude} aceso={aceso === e.nome} />
                  <span
                    className={`flex-1 text-[15px] text-ink ${
                      aceso === e.nome ? "font-semibold" : ""
                    }`}
                  >
                    {e.nome}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                    {e.magnitude} {e.magnitude === 1 ? "passagem" : "passagens"}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
