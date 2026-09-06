import { decisoes, emAberto } from "@/lib/decisoes";
import { experiences, projects } from "@/lib/content";
import { perfil } from "@/lib/perfil";
import { FONTE, json, OPTIONS as opcoes, querHTML } from "@/lib/api/resposta";

export const revalidate = 86400;
export const OPTIONS = opcoes;

export function GET(requisicao: Request) {
  const base = new URL(requisicao.url).origin;
  // Quem chega com navegador quer a documentação, não o JSON cru.
  if (querHTML(requisicao)) return Response.redirect(`${base}/api/docs`, 302);

  return json({
    nome: `API de ${perfil.nome}`,
    documentacao: `${base}/api/docs`,
    descricao:
      "O currículo, os projetos, o caderno de decisões e o design system inteiro em JSON. A parte incomum é /api/decisoes: registra também o que foi revertido.",
    titular: perfil.nome,
    promessa: perfil.promessa,
    fonte: FONTE,
    rotas: {
      "GET /api": "este índice",
      "GET /api/perfil": "quem, onde, foco e links",
      "GET /api/experiencia": "as experiências. ?stack=Swift filtra por tecnologia",
      "GET /api/experiencia/{slug}": "uma experiência inteira, com responsabilidades e resultados",
      "GET /api/projetos": "os projetos. ?status=Active filtra",
      "GET /api/projetos/{slug}": "um projeto, com objetivos e o que ele ensinou",
      "GET /api/decisoes":
        "o caderno de decisões, com o custo de cada uma. ?revertidas=1 devolve só as que foram desfeitas",
      "GET /api/decisoes/{slug}": "uma decisão",
      "GET /api/sistema": "o design system com as razões de contraste medidas",
      "GET /api/gravura": "SVG gravado, gerado na hora. ?figura=esfera|orbitas|estrela &px=64",
      "GET /api/curriculo.md": "o currículo inteiro em markdown, para LLM",
    },
    exemplos: [
      `${base}/api/experiencia?stack=Swift`,
      `${base}/api/decisoes?revertidas=1`,
      `${base}/api/gravura?figura=esfera&px=64`,
      `${base}/api/curriculo.md`,
    ],
    totais: {
      experiencias: experiences.length,
      projetos: projects.length,
      decisoes: decisoes.length,
      decisoesComReversao: decisoes.filter((d) => d.reversoes?.length).length,
      questoesEmAberto: emAberto.length,
    },
  });
}
