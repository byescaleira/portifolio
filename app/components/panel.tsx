import { cn } from "@/lib/utils";

/**
 * A folga entre as duas réguas é fixa em 5px — é o corte da chapa, não espaço
 * de conteúdo. Então o padding que o chamador passa precisa ir para DENTRO da
 * régua grossa, senão ele abre o vão e o texto encosta na linha. Custou um
 * layout quebrado em todas as pranchas sem título para descobrir.
 */
const PADDING = /^(p|px|py|pt|pr|pb|pl)-/;
function separaPadding(className?: string) {
  const todas = (className ?? "").split(/\s+/).filter(Boolean);
  const dentro: string[] = [];
  const fora: string[] = [];
  for (const c of todas) {
    const base = c.includes(":") ? c.slice(c.lastIndexOf(":") + 1) : c;
    (PADDING.test(base) ? dentro : fora).push(c);
  }
  return { dentro: dentro.join(" "), fora: fora.join(" ") };
}

/**
 * A prancha.
 *
 * Era um card: raio 18px, hairline, e um deslocamento de registro no hover —
 * a gramática da serigrafia, que a decisão 006 aposentou. Agora é o corte da
 * chapa: régua fina por fora, folga, régua grossa por dentro, canto vivo.
 *
 * A faixa de título é o cabeçalho da prancha, não um header de card: versalete
 * em Bodoni sobre a tinta, com a numeração em mono à direita. `index` é o
 * número da tabula, o ano, o estado — o que a prancha estiver catalogando.
 *
 * `tinted` marca a única prancha da página que importa: a régua vira luz. No
 * claro a faixa continua sendo tinta com texto laranja (bloco de luz, 5,97:1);
 * soltar laranja no papel reprova a 2,18:1 e está proibido em SISTEMA.md §2.
 */
export function Panel({
  children,
  className,
  title,
  /** Numeração da prancha: tabula, ano, estado. Em mono, à direita da faixa. */
  index,
  tinted,
  bodyClassName,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  index?: string;
  tinted?: boolean;
  bodyClassName?: string;
  as?: "div" | "article" | "li";
}) {
  const { dentro, fora } = separaPadding(className);
  return (
    <Tag
      className={cn(
        "border p-[5px] transition-colors duration-200",
        tinted ? "border-luz" : "border-hairline",
        fora
      )}
    >
      <div
        className={cn(
          "h-full w-full min-w-0 border-[3px] bg-panel",
          tinted ? "border-luz" : "border-foreground",
          !title && dentro
        )}
      >
        {title && (
          <div
            className={cn(
              "flex items-baseline justify-between gap-4 px-5 py-2.5 sm:px-6",
              tinted
                ? "faixa-destaque"
                : "bg-foreground text-background"
            )}
          >
            <h3 className="versalete text-[13px] leading-none">{title}</h3>
            {index && (
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
                {index}
              </span>
            )}
          </div>
        )}
        <div className={cn(title && (dentro || "p-5 sm:p-6"), bodyClassName)}>{children}</div>
      </div>
    </Tag>
  );
}

/** O quadro de um instrumento: régua fina, canto vivo, tinta luz. */
export function PanelIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[34px] shrink-0 items-center justify-center border border-foreground text-foreground">
      {children}
    </span>
  );
}
