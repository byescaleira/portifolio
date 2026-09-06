/**
 * O índice de pranchas.
 *
 * Um atlas não se rola: ele tem uma lista de pranchas na frente, e você
 * consulta a que interessa. Era o que a metáfora vinha oferecendo desde a
 * decisão 006 e nunca tinha sido usado — o site continuava sendo scroll com
 * tinta de prancha.
 *
 * A numeração é contínua e atravessa as rotas de propósito. O caderno de
 * decisões, o sistema e a API eram páginas órfãs penduradas no rodapé; como
 * Tabula VIII, IX e X elas passam a ser parte da mesma série, e a série é o
 * argumento.
 */
export interface Prancha {
  folio: string;
  numero: number;
  titulo: string;
  legenda: string;
  href: string;
  /** Âncora na home, ou página própria. */
  tipo: "secao" | "pagina";
}

export const pranchas: Prancha[] = [
  { numero: 1, folio: "I", titulo: "Frontispício", legenda: "O nome e a promessa", href: "/#top", tipo: "secao" },
  { numero: 2, folio: "II", titulo: "Quem sou", legenda: "A trajetória e como trabalho", href: "/#about", tipo: "secao" },
  { numero: 3, folio: "III", titulo: "A stack", legenda: "Do pixel ao pipeline", href: "/#skills", tipo: "secao" },
  { numero: 4, folio: "IV", titulo: "O que orbita", legenda: "O centro que não muda", href: "/#mission", tipo: "secao" },
  { numero: 5, folio: "V", titulo: "O trabalho", legenda: "Sete passagens, frente e verso", href: "/#work", tipo: "secao" },
  { numero: 6, folio: "VI", titulo: "Os projetos", legenda: "O que construo por conta", href: "/#projects", tipo: "secao" },
  { numero: 7, folio: "VII", titulo: "Contato", legenda: "Onde me achar", href: "/#contact", tipo: "secao" },
  { numero: 8, folio: "VIII", titulo: "O caderno de decisões", legenda: "Com o custo, e o que foi revertido", href: "/decisoes", tipo: "pagina" },
  { numero: 9, folio: "IX", titulo: "O sistema", legenda: "As tintas medidas e a regra da luz", href: "/design-system", tipo: "pagina" },
  { numero: 10, folio: "X", titulo: "A API", legenda: "O currículo como instrumento", href: "/api/docs", tipo: "pagina" },
];

export const prancheDaRota = (pathname: string) =>
  pranchas.find((p) => p.tipo === "pagina" && p.href === pathname);
