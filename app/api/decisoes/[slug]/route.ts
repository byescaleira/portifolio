import { getDecisao, slugsDeDecisao } from "@/lib/decisoes";
import { json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;
export const generateStaticParams = () =>
  slugsDeDecisao().map((slug) => ({ slug }));

export async function GET(
  _r: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = getDecisao(slug);
  if (!item)
    return json({ erro: "não encontrada", slug, disponiveis: slugsDeDecisao() }, 404);
  return json(item);
}
