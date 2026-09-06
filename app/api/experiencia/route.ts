import { experiences } from "@/lib/content";
import { json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

export function GET(requisicao: Request) {
  const filtro = new URL(requisicao.url).searchParams.get("stack");
  const itens = filtro
    ? experiences.filter((e) =>
        e.stack.some((s) => s.toLowerCase() === filtro.toLowerCase())
      )
    : experiences;
  return json({ total: itens.length, filtro: filtro ?? null, itens });
}
