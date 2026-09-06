import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content";
import { json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;
export const generateStaticParams = () =>
  getAllProjectSlugs().map((slug) => ({ slug }));

export async function GET(
  _r: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = getProjectBySlug(slug);
  if (!item)
    return json({ erro: "não encontrado", slug, disponiveis: getAllProjectSlugs() }, 404);
  return json(item);
}
