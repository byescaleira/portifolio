import { projects } from "@/lib/content";
import { json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

export function GET(requisicao: Request) {
  const filtro = new URL(requisicao.url).searchParams.get("status");
  const itens = filtro
    ? projects.filter((p) => p.status.toLowerCase() === filtro.toLowerCase())
    : projects;
  return json({ total: itens.length, filtro: filtro ?? null, itens });
}
