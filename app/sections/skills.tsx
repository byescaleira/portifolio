import { CartaCeleste } from "../components/carta-celeste";
import { ScrollReveal } from "../components/scroll-reveal";
import { contarPassagens } from "@/lib/capacidades";

/**
 * Tabula III — as capacidades.
 *
 * Era um bento de dez cards: um título, uma frase e um ícone de biblioteca em
 * cada. Funcionava como lista e não dizia nada que qualquer portfólio não
 * dissesse, porque toda a informação era autodeclarada — o leitor tinha que
 * acreditar.
 *
 * Agora é uma carta celeste. A magnitude de cada estrela é contada nas sete
 * passagens, então o dado é verificável e a seção fica amarrada ao trabalho em
 * vez de flutuar. E a densidade de hachura do catálogo é a escala de buril do
 * sistema servindo de legenda, que é exatamente o uso que SISTEMA.md §6 prevê
 * para ela.
 */
export function Skills() {
  const total = contarPassagens().size;

  return (
    <section id="skills" className="bg-surface px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-12">
          <div className="flex items-baseline justify-between border-b-2 border-accent pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
              Capabilities
            </p>
            <p className="folio font-mono text-[10px] uppercase tracking-[0.2em]">02</p>
          </div>
          <h2 className="t-section mt-5 max-w-[20ch] text-balance">
            O céu que eu navego.
          </h2>
          <p className="t-body mt-5 max-w-[62ch] text-pretty">
            {total} tecnologias, quatro constelações.{" "}
            <span className="font-semibold text-ink">
              A magnitude de cada estrela é contada, não opinada
            </span>{" "}
            &mdash; é em quantas das sete passagens ela aparece. Ninguém precisa
            acreditar em mim: o número está no catálogo.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <CartaCeleste />
        </ScrollReveal>
      </div>
    </section>
  );
}
