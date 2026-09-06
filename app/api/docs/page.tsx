import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { decisoes, emAberto } from "@/lib/decisoes";
import { experiences, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "API — Rafael Escaleira",
  description:
    "O currículo, os projetos, o caderno de decisões e o design system em JSON. Documentação da API pública de byescaleira.com.",
};

const ROTAS: [string, string, string?][] = [
  ["GET /api", "o índice. Navegador cai aqui; curl recebe JSON."],
  ["GET /api/perfil", "quem, onde, foco, links e a stack consolidada das experiências."],
  [
    "GET /api/experiencia",
    "as experiências inteiras, com responsabilidades e resultados.",
    "?stack=Swift",
  ],
  ["GET /api/experiencia/{slug}", "uma passagem."],
  ["GET /api/projetos", "os projetos, com objetivos e o que ensinaram.", "?status=Active"],
  ["GET /api/projetos/{slug}", "um projeto."],
  [
    "GET /api/decisoes",
    "o caderno de decisões, com o custo de cada uma e as questões ainda em aberto.",
    "?revertidas=1",
  ],
  ["GET /api/decisoes/{slug}", "uma decisão."],
  ["GET /api/sistema", "o design system com as razões de contraste medidas."],
  [
    "GET /api/gravura",
    "SVG gravado, calculado na hora.",
    "?figura=esfera&px=64&tema=escuro",
  ],
  ["GET /api/curriculo.md", "o currículo inteiro em markdown, para LLM."],
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-1 flex-col bg-background">
        <div className="border-b border-hairline">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-2.5 md:px-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
              Tabula &mdash; a API
            </p>
            <Link href="/" className="buril font-mono text-[11px] uppercase tracking-[0.2em]">
              Voltar ao site
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12">
          <h1 className="t-display mt-10 max-w-[15ch] text-balance md:mt-14">
            O currículo é uma API.
          </h1>
          <div className="mt-5 h-[6px] w-full bg-accent" />
          <p className="t-lead mt-8 max-w-[62ch] text-pretty">
            Leitura pública, CORS aberto, cache de um dia. Sem chave, sem
            registro, sem limite.
          </p>
          <p className="t-body mt-4 max-w-[62ch] text-pretty">
            A rota incomum é{" "}
            <code className="font-mono text-[0.92em]">/api/decisoes</code>: ela
            registra também o que foi <strong className="font-semibold text-ink">revertido</strong>,
            com o custo de cada volta atrás. Um caderno só de acertos é
            propaganda, não registro.
          </p>

          <div className="mt-8 border border-foreground bg-foreground p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-luz">
              Comece por aqui
            </p>
            <pre className="mt-3 overflow-x-auto font-mono text-[13px] leading-[1.9] text-background">
{`curl https://byescaleira.com/api
curl https://byescaleira.com/api/decisoes?revertidas=1
curl https://byescaleira.com/api/curriculo.md
curl "https://byescaleira.com/api/gravura?figura=esfera&px=64" > favicon.svg`}
            </pre>
          </div>
        </div>

        <Section folio="I" label="Referência" title="As rotas">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b-[2.5px] border-foreground">
                  <th className="py-2 pr-6 font-mono text-[11px] uppercase tracking-[0.14em]">
                    Rota
                  </th>
                  <th className="py-2 pr-6 font-mono text-[11px] uppercase tracking-[0.14em]">
                    O que devolve
                  </th>
                  <th className="py-2 font-mono text-[11px] uppercase tracking-[0.14em]">
                    Filtro
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROTAS.map(([rota, oQue, filtro]) => (
                  <tr key={rota} className="border-b border-hairline align-top">
                    <td className="py-3 pr-6 font-mono text-[12.5px] text-ink">{rota}</td>
                    <td className="py-3 pr-6 text-[14.5px] text-ink-2">{oQue}</td>
                    <td className="py-3 font-mono text-[12px] text-ink-3">
                      {filtro ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section folio="II" label="Referência" title="A gravura sob demanda">
          <p className="t-body max-w-[68ch] text-pretty">
            <strong className="font-semibold text-ink">
              <code className="font-mono text-[0.92em]">px</code>{" "}
              não é o tamanho do arquivo &mdash; é o tamanho de uso.
            </strong>{" "}
            Ele decide quantas linhas cabem antes de a hachura fechar e quão
            grosso o traço precisa nascer para sobreviver à redução. Pedir a
            mesma figura em 64 e em 400 devolve dois desenhos diferentes, e é
            isso que uma gravura de verdade faz.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["px=64", "20 traços · peso 3,55", 64],
              ["px=400", "43 traços · peso 0,96", 400],
            ].map(([rotulo, nota, px]) => (
              <div key={rotulo as string} className="border border-hairline p-5">
                <p className="versalete text-[12px]">{rotulo}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                  {nota}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/api/gravura?figura=esfera&px=${px}`}
                  alt={`Esfera gravada gerada para uso a ${px} pixels`}
                  className="mx-auto mt-4 block w-full max-w-[210px]"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section folio="III" label="Conteúdo" title="O que tem lá dentro">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [experiences.length, "experiências"],
              [projects.length, "projetos"],
              [decisoes.length, "decisões"],
              [emAberto.length, "questões em aberto"],
            ].map(([n, r]) => (
              <div key={r as string} className="border border-hairline p-5">
                <p className="font-heading text-[42px] font-bold leading-none">{n}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
                  {r}
                </p>
              </div>
            ))}
          </div>
          <p className="t-body max-w-[68ch] text-pretty">
            As questões em aberto entram na API de propósito. Um sistema que só
            publica o que já resolveu esconde o custo de estar em movimento.
          </p>
        </Section>

        <div className="mx-auto w-full max-w-[1120px] px-6 pb-16 md:px-12">
          <div className="escala" />
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  folio,
  label,
  title,
  children,
}: {
  folio: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-hairline">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 md:px-12 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
            {label}
          </p>
          <p className="folio font-mono text-[10px] uppercase tracking-[0.2em]">
            {folio}
          </p>
        </div>
        <div className="mt-2 h-[2px] w-full bg-accent" />
        <h2 className="t-section mt-6">{title}</h2>
        <div className="mt-7 flex flex-col gap-6">{children}</div>
      </div>
    </section>
  );
}
