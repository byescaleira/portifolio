/** Toda a API é leitura pública: JSON legível, CORS aberto e cache longo. */
const CACHE = "public, s-maxage=86400, stale-while-revalidate=604800";

export const CABECALHOS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  // O Next reescreve Cache-Control em route handler dinâmico — em produção
  // chega só "public" e toda requisição dá MISS na borda. Estes dois não são
  // tocados: CDN-Cache-Control vale para caches intermediários e
  // Vercel-CDN-Cache-Control para a borda da Vercel.
  "Cache-Control": CACHE,
  "CDN-Cache-Control": CACHE,
  "Vercel-CDN-Cache-Control": CACHE,
  // /api responde redirect ou JSON conforme o Accept.
  Vary: "Accept",
};

export function json(dados: unknown, status = 200) {
  return new Response(JSON.stringify(dados, null, 2) + "\n", {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CABECALHOS },
  });
}

export function texto(conteudo: string, tipo = "text/markdown") {
  return new Response(conteudo, {
    headers: { "Content-Type": `${tipo}; charset=utf-8`, ...CABECALHOS },
  });
}

export const OPTIONS = () =>
  new Response(null, { status: 204, headers: CABECALHOS });

/** Navegador manda "text/html" explícito; curl manda coringa. */
export const querHTML = (r: Request) =>
  (r.headers.get("accept") ?? "").includes("text/html");

export const FONTE = {
  conteudo: "Escrito pelo titular. Nada aqui é gerado a partir de terceiros.",
  decisoes:
    "O caderno de decisões é o diretório decisions/ do repositório byescaleira/brand, com as reversões incluídas.",
  sistema:
    "Os números de contraste são medidos contra o pior dos três fundos de cada modo, não contra um só.",
  licenca:
    "Os dados são factuais e de uso livre. O design system é publicado para ser lido, não para ser vestido por outra marca.",
};
