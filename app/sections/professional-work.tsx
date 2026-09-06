import Link from "next/link";

import { PranchaVirada } from "../components/prancha-virada";
import { ScrollReveal } from "../components/scroll-reveal";
import { experiences } from "@/lib/content";

/**
 * A série de pranchas do trabalho.
 *
 * A versão anterior tinha `highlights`, `stack` e `previous` escritos à mão
 * dentro do arquivo, duplicando lib/content.ts — duas fontes que podiam
 * divergir calado. Agora tudo sai do conteúdo, e o que estava enterrado
 * (summary, outcomes, responsibilities) é o que a prancha mostra.
 *
 * Cada passagem é uma Tabula com folio romano. A frente é o que a pessoa
 * sente; o verso é o que sustenta. É a promessa da marca virando interação.
 */
const ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

export function ProfessionalWork() {
  const [atual, ...anteriores] = experiences;

  return (
    <section id="work" className="bg-background px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-12">
          <div className="flex items-baseline justify-between border-b-2 border-accent pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              Professional work
            </p>
            <p className="folio font-mono text-[10px] uppercase tracking-[0.2em]">04</p>
          </div>
          <h2 className="t-section mt-5 max-w-[20ch] text-balance">
            A game the whole country plays.
          </h2>
          <p className="t-body mt-5 max-w-[60ch] text-pretty">
            Cada passagem é uma prancha. A frente é o que a pessoa sente; o
            verso é o que sustenta.{" "}
            <span className="font-semibold text-ink">Vire qualquer uma.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <PranchaVirada
            destaque
            folio={`Tabula ${ROMANOS[0]}`}
            titulo={`${atual.company} — ${atual.codename}`}
            legenda={`${atual.role} · ${atual.period} · ${atual.location}`}
            frente={
              <div className="flex flex-col gap-5">
                <p className="t-body max-w-[62ch] text-pretty">{atual.summary}</p>
                {atual.outcomes && (
                  <ul className="flex flex-col gap-2">
                    {atual.outcomes.map((o) => (
                      <li key={o} className="flex gap-3 text-[15.5px] text-ink-2">
                        <span aria-hidden className="text-accent-ink">&mdash;</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            }
            verso={
              <div className="flex flex-col gap-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                  {atual.focus}
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {atual.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-[15px] text-ink-2">
                      <span aria-hidden className="text-accent-ink">&mdash;</span>
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {atual.stack.map((s) => (
                    <span key={s} className="pill font-mono text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/experience/${atual.slug}`}
                  className="buril self-start font-mono text-[11px] uppercase tracking-[0.18em]"
                >
                  A prancha inteira
                </Link>
              </div>
            }
          />
        </ScrollReveal>

        <ScrollReveal className="mt-14">
          <p className="versalete text-[12px] text-ink">Antes disso</p>
        </ScrollReveal>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {anteriores.map((e, i) => (
            <ScrollReveal key={e.slug} delay={0.05 * i}>
              <PranchaVirada
                className="h-full"
                folio={`Tabula ${ROMANOS[i + 1]}`}
                titulo={e.company}
                legenda={`${e.role} · ${e.period}`}
                frente={
                  <p className="t-body text-[15.5px] text-pretty">{e.summary}</p>
                }
                verso={
                  <div className="flex flex-col gap-4">
                    <ul className="flex flex-col gap-2">
                      {e.responsibilities.slice(0, 3).map((r) => (
                        <li key={r} className="flex gap-3 text-[14.5px] text-ink-2">
                          <span aria-hidden className="text-accent-ink">&mdash;</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {e.stack.slice(0, 5).map((s) => (
                        <span key={s} className="pill font-mono text-[10.5px]">
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/experience/${e.slug}`}
                      className="buril self-start font-mono text-[11px] uppercase tracking-[0.18em]"
                    >
                      A prancha inteira
                    </Link>
                  </div>
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
