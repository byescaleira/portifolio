import { getAllExperienceSlugs, getExperienceBySlug } from "@/lib/content";
import { json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;
export const generateStaticParams = () =>
  getAllExperienceSlugs().map((slug) => ({ slug }));

export async function GET(
  _r: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const item = getExperienceBySlug(slug);
  if (!item)
    return json(
      { erro: "não encontrado", slug, disponiveis: getAllExperienceSlugs() },
      404
    );
  return json(item);
}
