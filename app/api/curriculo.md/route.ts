import { decisoes, emAberto } from "@/lib/decisoes";
import { experiences, projects } from "@/lib/content";
import { perfil } from "@/lib/perfil";
import { OPTIONS as opcoes, texto } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

/**
 * O currículo inteiro em markdown.
 *
 * Existe para LLM e para quem faz `curl | pbcopy`. JSON é ótimo para máquina
 * que sabe o que procura; markdown é melhor para máquina que vai ler tudo.
 */
export function GET() {
  const l: string[] = [];
  const secao = (t: string) => l.push("", `## ${t}`, "");

  l.push(`# ${perfil.nome}`, "");
  l.push(`${perfil.titulo} — ${perfil.empresa} · ${perfil.produto}`, "");
  l.push(`> ${perfil.promessa}`, "");
  l.push(perfil.tese, "");
  l.push(`- Local: ${perfil.local}`);
  l.push(`- Foco: ${perfil.foco.join(" · ")}`);
  l.push(`- Site: ${perfil.links.site}`);
  l.push(`- GitHub: ${perfil.links.github}`);

  secao("Experiência");
  for (const e of experiences) {
    l.push(`### ${e.company} — ${e.role}`);
    l.push(`*${e.period} · ${e.location} · ${e.focus}*`, "");
    l.push(e.summary, "");
    l.push("**Responsabilidades**");
    e.responsibilities.forEach((r) => l.push(`- ${r}`));
    if (e.outcomes?.length) {
      l.push("", "**Resultados**");
      e.outcomes.forEach((o) => l.push(`- ${o}`));
    }
    l.push("", `**Stack:** ${e.stack.join(", ")}`, "");
  }

  secao("Projetos");
  for (const p of projects) {
    l.push(`### ${p.title} (${p.codename}) — ${p.status}`, "");
    l.push(p.longDescription, "");
    l.push("**Objetivos**");
    p.goals.forEach((g) => l.push(`- ${g}`));
    l.push("", "**O que ensinou**");
    p.learnings.forEach((a) => l.push(`- ${a}`));
    l.push("", `**Tags:** ${p.tags.join(", ")}`, "");
  }

  secao("Caderno de decisões");
  l.push(
    "Cada decisão registrada com o que ela custou. As reversões ficam — apagar a escolha apaga a lição junto.",
    ""
  );
  for (const d of decisoes) {
    l.push(`### ${d.numero} · ${d.titulo} — ${d.status}`, "");
    l.push(d.resumo, "");
    d.fixa.forEach((f) => l.push(`- ${f}`));
    if (d.custo) l.push("", `**O que custou:** ${d.custo}`);
    if (d.superadaEmParte)
      l.push("", `**Superada em parte por ${d.superadaEmParte.por}:** ${d.superadaEmParte.oQue}`);
    d.reversoes?.forEach((r) => l.push("", `**Revertido —** ${r.oQue} ${r.custo}`));
    l.push("");
  }

  secao("Em aberto");
  emAberto.forEach((q) => l.push(`### ${q.questao}`, "", q.situacao, ""));

  return texto(l.join("\n"));
}
