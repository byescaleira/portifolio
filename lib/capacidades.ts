import { experiences } from "./content";

/**
 * A carta celeste das capacidades.
 *
 * A seção era um bento de cards — a coisa menos byescaleira do site inteiro, e
 * a que menos usava a metáfora. Uma prancha de atlas mostra o céu: estrelas com
 * magnitude, agrupadas em constelações, sobre a gratícula.
 *
 * A magnitude aqui NÃO é opinião sobre proficiência. É contada: quantas das
 * sete passagens usam aquela tecnologia. Isso tem duas consequências boas — o
 * número é verificável, e a seção passa a estar ligada ao trabalho em vez de
 * flutuar como uma lista de qualidades.
 *
 * As constelações são as práticas. Cada uma agrupa as tecnologias que a
 * realizam, e a legenda da constelação é o que a prática significa.
 */
export interface Estrela {
  nome: string;
  /** Em quantas das sete passagens ela aparece. Contado, não estimado. */
  magnitude: number;
  x: number;
  y: number;
}

export interface Constelacao {
  id: string;
  nome: string;
  legenda: string;
  /** Canto da carta onde ela mora, em unidades da viewBox. */
  centro: { x: number; y: number };
  membros: string[];
  estrelas: Estrela[];
}

const CONSTELACOES: Omit<Constelacao, "estrelas">[] = [
  {
    id: "nativo",
    nome: "Nativo",
    legenda: "A superfície Apple. É onde a pessoa toca.",
    centro: { x: 176, y: 128 },
    membros: ["Swift", "SwiftUI", "UIKit", "Core Data"],
  },
  {
    id: "estrutura",
    nome: "Estrutura",
    legenda: "As fronteiras decididas antes das features.",
    centro: { x: 494, y: 122 },
    membros: ["Clean Architecture", "MVVM", "SPM"],
  },
  {
    id: "entrega",
    nome: "Entrega",
    legenda: "Publicar sem cerimônia, para publicar deixar de ser evento.",
    centro: { x: 508, y: 348 },
    membros: ["CI/CD", "Fastlane", "Unit Testing", "Feature Flags", "Analytics"],
  },
  {
    id: "fronteira",
    nome: "Fronteira",
    legenda: "De onde vim. Estrela fraca ainda é estrela de navegação.",
    centro: { x: 168, y: 356 },
    membros: [
      "PHP",
      "JavaScript",
      "MySQL",
      "HTML/CSS",
      "Mobile Web",
      "Android",
      "REST",
      "REST APIs",
      "Sync Engine",
    ],
  },
];

/** Quantas passagens usam cada tecnologia. A fonte da magnitude. */
export function contarPassagens(): Map<string, number> {
  const c = new Map<string, number>();
  for (const e of experiences)
    for (const t of e.stack) c.set(t, (c.get(t) ?? 0) + 1);
  return c;
}

/**
 * Posição determinística dentro da constelação.
 *
 * Nada de aleatório: a carta precisa sair idêntica no servidor e no cliente,
 * senão o React reclama de hidratação e o céu muda de forma a cada visita.
 * Um ângulo áureo espalha os membros sem alinhá-los numa roda.
 */
function posicao(centro: { x: number; y: number }, i: number, total: number) {
  const ANGULO = 2.399963; // ~137,5°, o ângulo áureo
  // O raio precisa crescer com o tamanho da constelação, senão as de nove
  // membros ficam apinhadas e as de três ficam soltas no mesmo espaço.
  const raio = total === 1 ? 0 : 30 + 20 * Math.sqrt(i);
  const a = i * ANGULO;
  return {
    x: +(centro.x + raio * Math.cos(a)).toFixed(1),
    y: +(centro.y + raio * Math.sin(a) * 0.82).toFixed(1),
  };
}

export function carta(): Constelacao[] {
  const freq = contarPassagens();
  return CONSTELACOES.map((c) => {
    const presentes = c.membros.filter((m) => freq.has(m));
    return {
      ...c,
      estrelas: presentes.map((nome, i) => ({
        nome,
        magnitude: freq.get(nome) ?? 1,
        ...posicao(c.centro, i, presentes.length),
      })),
    };
  });
}

export const LARGURA = 680;
export const ALTURA = 490;
