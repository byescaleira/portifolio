import { sistema } from "@/lib/sistema";
import { FONTE, json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

export function GET(requisicao: Request) {
  const base = new URL(requisicao.url).origin;
  return json({
    ...sistema,
    // Publicar os números medidos é o ponto: um design system que mostra as
    // próprias razões aceita ser conferido em vez de ser acreditado.
    verificacao: FONTE.sistema,
    figuras: {
      esfera: `${base}/api/gravura?figura=esfera&px=400`,
      orbitas: `${base}/api/gravura?figura=orbitas&px=600`,
      estrela: `${base}/api/gravura?figura=estrela&px=600`,
    },
  });
}
