import { cn } from "@/lib/utils";
import { esfera, estrela, orbitas, type Figura } from "@/lib/gravura";

/**
 * As figuras gravadas.
 *
 * Renderizam de `lib/gravura.ts`, não de SVG colado. A versão anterior era
 * gerada no terminal e copiada para cá, o que significa que mudar o gerador
 * não mudava o site — a cópia envelhecia calada. Agora a página e a rota
 * /api/gravura desenham do mesmo cálculo.
 *
 * As cores saem de currentColor e var(--luz): a figura obedece ao tema em vez
 * de carregar tinta própria, que era a limitação dos .webp que elas
 * substituíram.
 */
function Desenho({
  figura,
  titulo,
  className,
}: {
  figura: Figura;
  titulo: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${figura.largura} ${figura.altura}`}
      fill="none"
      role="img"
      aria-label={titulo}
      className={cn("text-ink", className)}
    >
      {figura.elementos.map((e, i) =>
        e.tipo === "traco" ? (
          <path
            key={i}
            d={e.d}
            stroke={e.cor === "luz" ? "var(--luz)" : "currentColor"}
            strokeWidth={e.peso}
            strokeLinecap={e.ponta === "reta" ? "butt" : "round"}
            opacity={e.opacidade}
            fill="none"
          />
        ) : (
          <ellipse
            key={i}
            cx={e.cx}
            cy={e.cy}
            rx={e.rx}
            ry={e.ry}
            transform={e.giro ? `rotate(${e.giro} ${e.cx} ${e.cy})` : undefined}
            stroke={e.cor === "luz" ? "var(--luz)" : "currentColor"}
            strokeWidth={e.peso}
            opacity={e.opacidade}
            fill="none"
          />
        )
      )}
    </svg>
  );
}

export function PranchaOrbital({ className }: { className?: string }) {
  return (
    <Desenho
      figura={orbitas(380)}
      titulo="Prancha orbital gravada: um globo com quatro órbitas inclinadas e uma nave na órbita acesa"
      className={className}
    />
  );
}

export function PranchaEstrela({ className }: { className?: string }) {
  return (
    <Desenho
      figura={estrela(600)}
      titulo="Prancha gravada: uma estrela de raios desiguais sobre a escala de buril em quatro densidades"
      className={className}
    />
  );
}

/** A esfera do herói. `px` é o tamanho de USO — ele decide quantas linhas cabem. */
export function PranchaEsfera({
  px = 560,
  className,
}: {
  px?: number;
  className?: string;
}) {
  return (
    <Desenho
      figura={esfera(px)}
      titulo="Esfera gravada: meridianos de espessura variável com o limbo aceso"
      className={className}
    />
  );
}
