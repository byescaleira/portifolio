import { FIGURAS, paraSVG, type NomeFigura } from "@/lib/gravura";
import { sistema } from "@/lib/sistema";
import { CABECALHOS, json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

/**
 * A API desenha a própria arte da marca.
 *
 * `px` não é o tamanho do arquivo — é o tamanho de USO. Ele decide quantas
 * linhas cabem antes da hachura fechar e quão grosso o traço precisa nascer
 * para sobreviver à redução. Pedir a mesma figura em 64 e em 600 devolve dois
 * desenhos diferentes, e é isso que uma gravura de verdade faz.
 */
export function GET(requisicao: Request) {
  const q = new URL(requisicao.url).searchParams;
  const nome = (q.get("figura") ?? "esfera") as NomeFigura;
  if (!(nome in FIGURAS))
    return json(
      { erro: "figura desconhecida", recebido: nome, disponiveis: Object.keys(FIGURAS) },
      404
    );

  const px = Math.max(16, Math.min(2000, Number(q.get("px") ?? 400) || 400));
  const tema = q.get("tema") === "escuro" ? "escuro" : "claro";
  const t = sistema.tintas[tema];

  return new Response(paraSVG(FIGURAS[nome](px), t.tinta, t.luz), {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8", ...CABECALHOS },
  });
}
