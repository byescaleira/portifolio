import { experiences } from "@/lib/content";
import { perfil } from "@/lib/perfil";
import { json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

export function GET() {
  // A stack sai das experiências, não de uma lista à parte: assim ela não
  // pode divergir do que está escrito em cada passagem.
  const stack = [...new Set(experiences.flatMap((e) => e.stack))].sort();
  return json({ ...perfil, stack, experiencias: experiences.length });
}
