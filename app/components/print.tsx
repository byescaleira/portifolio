import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * A figura.
 *
 * Era uma placa de serigrafia: a arte trazia o próprio papel osso assado no
 * arquivo, porque no tema escuro o grafite sumiria sobre o preto. A decisão 006
 * troca o meio por gravura em linha, e isso muda a economia: linha sobre papel
 * chapado extrai por limiar e vira dois tons recoloríveis — a arte passa a
 * obedecer ao tema em vez de carregar tinta própria.
 *
 * Enquanto as artes novas não existem, os .webp antigos continuam com o papel
 * assado. Por isso `rule` ainda declara a borda: no escuro a placa precisa da
 * régua para não flutuar. Quando a arte gravada entrar, a régua vira opcional.
 *
 * A legenda é a de uma prancha: rótulo em versalete acima, legenda em mono
 * abaixo. Sem o versalete não lê como figura, lê como imagem solta.
 */
export function Print({
  src,
  alt,
  width,
  height,
  /** Rótulo da figura, em versalete. `FIG. 1` sai automático de `figura`. */
  figura,
  caption,
  rule = false,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  figura?: string;
  caption?: string;
  rule?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      {figura && (
        <figcaption className="versalete text-[11px] text-ink">
          {figura}
        </figcaption>
      )}
      <div className={cn("overflow-hidden", rule && "border border-foreground")}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
