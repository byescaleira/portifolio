import { cn } from "@/lib/utils";
import { PranchaEsfera } from "./figuras";

/**
 * O céu, gravado.
 *
 * Era meio-tom: o ponto de retícula servia de estrela e de tom ao mesmo tempo,
 * que era a boa ideia da serigrafia. A decisão 006 troca o meio, e em gravura
 * o tom é densidade de LINHA — ponto vira sujeira. Então o céu passa a ser o
 * que uma prancha de atlas realmente tem: a gratícula por trás de tudo, e uma
 * esfera construída de meridianos.
 *
 * A esfera vem de `lib/gravura.ts`, não da mão. Numa esfera o meridiano precisa
 * achatar na borda e engrossar na sombra, e isso é conta. `px` é o tamanho de
 * USO: é ele que decide quantas linhas cabem antes da hachura fechar.
 *
 * As linhas usam currentColor e var(--luz), então a figura obedece ao tema em
 * vez de carregar tinta própria — no escuro vira creme sobre o vazio sozinha.
 *
 * Nunca por cima de texto: fica no fundo, e o conteúdo do herói sobe por
 * z-index. A gratícula desbota antes de chegar na coluna de leitura.
 */
export function PrintedSky({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* a régua que ninguém olha */}
      <div
        className="graticula absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(130% 100% at 82% 12%, #000 0%, #000 38%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(130% 100% at 82% 12%, #000 0%, #000 38%, transparent 76%)",
        }}
      />

      {/* a esfera: bleeds pela margem direita, como uma figura que não coube */}
      <div
        className="o-globo absolute"
        style={{ top: "-13%", right: "-14%", width: "min(52vw, 620px)", opacity: 0.5 }}
      >
        <PranchaEsfera px={560} />
      </div>
    </div>
  );
}
