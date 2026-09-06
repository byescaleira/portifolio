import { decisoes, emAberto } from "@/lib/decisoes";
import { json, OPTIONS as opcoes } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

export function GET(requisicao: Request) {
  const q = new URL(requisicao.url).searchParams;
  const soRevertidas = q.get("revertidas") === "1";
  const itens = soRevertidas
    ? decisoes.filter((d) => d.reversoes?.length)
    : decisoes;

  return json({
    // O caderno mostra os buracos de propósito: uma lista só de acertos é
    // propaganda, não registro.
    nota:
      "Append, nunca reescrever. Decisão superada continua aqui, marcada — quem lê precisa saber que a escolha existiu, senão a lição se perde junto.",
    total: itens.length,
    filtro: soRevertidas ? "só as que foram revertidas" : null,
    itens,
    emAberto: soRevertidas ? undefined : emAberto,
  });
}
