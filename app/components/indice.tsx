"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { pranchas } from "@/lib/pranchas";

/**
 * O índice de pranchas — a navegação como consulta.
 *
 * Substituiu ABOUT / SKILLS / WORK / PROJECTS, que é vocabulário de portfólio.
 * Um atlas abre pela lista de pranchas, e a lista inclui as páginas próprias:
 * o caderno, o sistema e a API deixam de ser links órfãos no rodapé e passam a
 * ser Tabula VIII, IX e X da mesma série.
 *
 * Fecha em Esc e devolve o foco ao botão. Um índice que prende o teclado é
 * pior que nenhum índice.
 */
export function Indice() {
  const [aberto, setAberto] = useState(false);
  const botao = useRef<HTMLButtonElement>(null);
  const painel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botao.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const alvo = e.target as Node;
      if (!painel.current?.contains(alvo) && !botao.current?.contains(alvo)) {
        setAberto(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [aberto]);

  return (
    <div className="relative">
      <button
        ref={botao}
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls="indice-de-pranchas"
        className="buril font-mono text-[11px] uppercase tracking-[0.18em]"
      >
        Índice · {pranchas.length} pranchas
      </button>

      {aberto && (
        <div
          ref={painel}
          id="indice-de-pranchas"
          className="absolute right-0 top-[calc(100%+14px)] z-50 w-[min(94vw,460px)] border border-hairline bg-background p-[5px] shadow-none"
        >
          <div className="graticula-fina border-[3px] border-foreground">
            <div className="flex items-baseline justify-between bg-foreground px-5 py-2.5">
              <p className="versalete text-[13px] leading-none text-background">
                Índice de pranchas
              </p>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-luz">
                {pranchas.length}
              </span>
            </div>
            <ul className="divide-y divide-hairline">
              {pranchas.map((p) => (
                <li key={p.folio}>
                  <Link
                    href={p.href}
                    onClick={() => setAberto(false)}
                    className="group flex items-baseline gap-4 px-5 py-3 transition-colors hover:bg-panel"
                  >
                    <span className="w-[3.2rem] shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">
                      {p.folio}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[15px] font-medium text-ink">
                        {p.titulo}
                      </span>
                      <span className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
                        {p.legenda}
                      </span>
                    </span>
                    {p.tipo === "pagina" && (
                      <span
                        aria-hidden
                        className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-ink"
                      >
                        prancha própria
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
