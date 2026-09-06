import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { decisoes, emAberto, type Decisao } from "@/lib/decisoes";

export const metadata: Metadata = {
  title: "Caderno de decisões — Rafael Escaleira",
  description:
    "Cada decisão de marca registrada com o que ela custou, incluindo as que foram revertidas e o que ainda está em aberto.",
};

export default function DecisoesPage() {
  const revertidas = decisoes.filter((d) => d.reversoes?.length).length;

  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-1 flex-col bg-background">
        <div className="border-b border-hairline">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-2.5 md:px-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
              Tabula &mdash; o caderno
            </p>
            <Link href="/" className="buril font-mono text-[11px] uppercase tracking-[0.2em]">
              Voltar ao site
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12">
          <h1 className="t-display mt-10 max-w-[14ch] text-balance md:mt-14">
            O que cada escolha custou.
          </h1>
          <div className="mt-5 h-[6px] w-full bg-accent" />
          <p className="t-lead mt-8 max-w-[62ch] text-pretty">
            Toda decisão aqui vem com o preço dela. Uma escolha sem custo
            declarado não foi decidida &mdash; foi torcida.
          </p>
          <p className="t-body mt-4 max-w-[62ch] text-pretty">
            A regra do caderno é append, nunca reescrever. Decisão superada
            continua aqui, marcada: apagar a escolha apaga a lição junto.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <Contagem n={decisoes.length} rotulo="decisões" />
            <Contagem n={revertidas} rotulo="com reversão registrada" destaque />
            <Contagem n={emAberto.length} rotulo="ainda em aberto" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-6 py-14 md:px-12 md:py-20">
          {decisoes.map((d) => (
            <Prancha key={d.slug} decisao={d} />
          ))}

          <section className="mt-6 border-t-[3px] border-foreground pt-8">
            <div className="flex items-center justify-between gap-4">
              <p className="versalete text-[12px]">Em aberto</p>
              <p className="folio font-mono text-[10px] uppercase tracking-[0.2em]">
                {emAberto.length}
              </p>
            </div>
            <p className="t-body mt-4 max-w-[68ch] text-pretty">
              Um caderno honesto mostra os buracos. Um sistema que só publica o
              que já resolveu esconde o custo de estar em movimento.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {emAberto.map((q) => (
                <div key={q.questao} className="border border-hairline p-5">
                  <p className="versalete text-[12px] text-ink">{q.questao}</p>
                  <p className="mt-2 text-[15px] leading-[1.66] text-ink-2">
                    {q.situacao}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="escala mt-6" />
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
            Isto também é máquina-legível:{" "}
            <Link href="/api/decisoes" className="buril">
              /api/decisoes
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Contagem({
  n,
  rotulo,
  destaque,
}: {
  n: number;
  rotulo: string;
  destaque?: boolean;
}) {
  return (
    <div className={`border p-5 ${destaque ? "border-accent" : "border-hairline"}`}>
      <p className="font-heading text-[42px] font-bold leading-none">{n}</p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
        {rotulo}
      </p>
    </div>
  );
}

/** Uma decisão é uma prancha: régua dupla, faixa de título, numeração à direita. */
function Prancha({ decisao: d }: { decisao: Decisao }) {
  const superada = d.status !== "fechada";
  return (
    <article className={`border p-[5px] ${superada ? "border-regua" : "border-hairline"}`}>
      <div className="border-[3px] border-foreground bg-panel">
        <div className="flex items-baseline justify-between gap-4 bg-foreground px-5 py-2.5 text-background sm:px-6">
          <h2 className="versalete text-[13px] leading-none">{d.titulo}</h2>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
            {d.numero}
          </span>
        </div>

        <div className="flex flex-col gap-5 p-5 sm:p-6">
          {superada && (
            <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
              {d.status}
            </p>
          )}

          <p className="text-[16.5px] leading-[1.66] text-ink">{d.resumo}</p>

          <div className="grid gap-5 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="versalete text-[11px] text-ink-3">O que fixa</p>
              <ul className="mt-2 flex flex-col gap-1.5">
                {d.fixa.map((f) => (
                  <li key={f} className="text-[14.5px] leading-[1.6] text-ink-2">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {d.custo && (
              <div className="border-l-[3px] border-accent pl-5">
                <p className="versalete text-[11px] text-ink">O que custou</p>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-2">
                  {d.custo}
                </p>
              </div>
            )}
          </div>

          {d.superadaEmParte && (
            <p className="border-t border-hairline pt-4 text-[14.5px] leading-[1.6] text-ink-2">
              <span className="versalete text-[11px] text-ink">
                Superada em parte
              </span>{" "}
              &mdash; por <em>{d.superadaEmParte.por}</em>, {d.superadaEmParte.oQue}
            </p>
          )}

          {/* A reversão é o conteúdo mais raro daqui. Ela não fica escondida
              num rodapé: entra num bloco de luz, que é o que o sistema usa
              para o que importa. */}
          {d.reversoes?.map((r) => (
            <div key={r.oQue} className="bg-foreground p-5">
              <p className="versalete text-[11px] text-luz">Revertido</p>
              <p className="mt-2 text-[15px] font-semibold leading-[1.55] text-background">
                {r.oQue}
              </p>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-background/80">
                {r.custo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
