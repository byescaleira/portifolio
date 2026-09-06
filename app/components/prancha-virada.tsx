"use client";

import { useId, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * O verso da prancha.
 *
 * A promessa da marca é "ninguém vê a arquitetura, todo mundo sente". Até aqui
 * ela era uma frase impressa na página. Este componente a torna operável: a
 * frente mostra o que a pessoa SENTE, e virar a chapa mostra o que SUSTENTA.
 *
 * Não gira em 3D. Uma prancha não tem profundidade de campo — a decisão 006
 * proíbe sombra suave justamente por isso. Ela é virada: o conteúdo troca com
 * uma passada de buril (clip-path, família REVEAL), e o verso aparece sobre a
 * gratícula. É o ponto do conceito ficando literal: a construção estava
 * embaixo o tempo todo.
 *
 * O botão é um botão de verdade, não uma div com onClick: isto precisa
 * funcionar por teclado, e o estado precisa ser anunciado.
 */
export function PranchaVirada({
  folio,
  titulo,
  legenda,
  frente,
  verso,
  destaque,
  className,
}: {
  /** A numeração da prancha. Romana, como num atlas. */
  folio: string;
  titulo: string;
  /** A linha de instrumento: papel, período, coordenada. */
  legenda?: string;
  frente: React.ReactNode;
  verso: React.ReactNode;
  /** A prancha da página que importa: a régua vira luz. */
  destaque?: boolean;
  className?: string;
}) {
  const [virada, setVirada] = useState(false);
  const corpoId = useId();

  return (
    <div
      className={cn(
        "border p-[5px]",
        destaque ? "border-luz" : "border-hairline",
        className
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col border-[3px]",
          destaque ? "border-luz" : "border-foreground",
          virada ? "graticula-fina bg-panel" : "bg-panel"
        )}
      >
        <div
          className={cn(
            "flex items-baseline justify-between gap-4 px-5 py-2.5",
            destaque ? "bg-foreground text-luz" : "bg-foreground text-background"
          )}
        >
          <h3 className="versalete text-[13px] leading-none">{titulo}</h3>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
            {folio}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {legenda && (
            <p className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
              {legenda}
            </p>
          )}

          <div id={corpoId} key={virada ? "verso" : "frente"} className="r-buril flex-1">
            <p className="versalete mb-3 text-[11px] text-ink-3">
              {virada ? "O que sustenta" : "O que se vê"}
            </p>
            {virada ? verso : frente}
          </div>

          <button
            type="button"
            onClick={() => setVirada((v) => !v)}
            aria-expanded={virada}
            aria-controls={corpoId}
            className="buril mt-6 self-start font-mono text-[11px] uppercase tracking-[0.18em]"
          >
            {virada ? "Voltar à frente" : "Virar a prancha"}
          </button>
        </div>
      </div>
    </div>
  );
}
