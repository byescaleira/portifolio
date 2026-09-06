import type { NextConfig } from "next";

/**
 * Deixou de ser `output: "export"`.
 *
 * Export estático serve route handler, mas só o que não olha a requisição:
 * sem negociação de Accept, sem query, sem filtro. A API de /api existe para
 * ser usada por curl e por LLM, e as duas coisas dependem exatamente disso.
 * Nada dependia do `dist` — não há workflow nem vercel.json — e a Vercel roda
 * app de servidor nativamente, então a troca não custou infraestrutura.
 */
const nextConfig: NextConfig = {
  images: { unoptimized: true },
  // `trailingSlash` existia para o export estático mapear /rota/ em
  // /rota/index.html. Num app de servidor ele só atrapalha: `curl site/api`
  // levava 308 em vez de devolver JSON, e uma API que responde redirect ao
  // primeiro contato não é usável de terminal.
};

export default nextConfig;
