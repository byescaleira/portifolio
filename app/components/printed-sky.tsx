import { cn } from "@/lib/utils";

/**
 * O céu, gravado.
 *
 * Era meio-tom: o ponto de retícula servia de estrela e de tom ao mesmo tempo,
 * que era a boa ideia da serigrafia. A decisão 006 troca o meio, e em gravura
 * o tom é densidade de LINHA — ponto vira sujeira. Então o céu passa a ser o
 * que uma prancha de atlas realmente tem: a gratícula por trás de tudo, e uma
 * esfera construída de meridianos.
 *
 * A esfera saiu de `gravura.py esfera 560`, não da mão. Numa esfera o meridiano
 * precisa achatar na borda e engrossar na sombra, e isso é conta. As linhas usam
 * currentColor e var(--luz), então a figura obedece ao tema em vez de carregar
 * tinta própria — no escuro ela vira creme sobre o vazio sozinha.
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
      <svg
        viewBox="0 0 428 428"
        fill="none"
        className="o-globo absolute text-ink"
        style={{
          top: "-13%",
          right: "-14%",
          width: "min(52vw, 620px)",
          opacity: 0.5,
        }}
      >
        <path d="M214.0 28.0A180.5 186.0 0 0 0 214.0 400.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.96" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A169.6 186.0 0 0 0 214.0 400.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.89" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A158.6 186.0 0 0 0 214.0 400.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.82" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A147.7 186.0 0 0 0 214.0 400.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.75" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A136.8 186.0 0 0 0 214.0 400.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.69" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A125.8 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.63" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A114.9 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.58" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A103.9 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.54" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A93.0 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.51" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A82.1 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.50" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A71.1 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.52" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A60.2 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.56" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A49.2 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.60" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A38.3 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.65" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A27.4 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.71" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A16.4 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.77" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A5.5 186.0 0 0 0 214.0 400.0" stroke="currentColor" strokeWidth="0.84" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A5.5 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="0.91" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A16.4 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="0.99" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A27.4 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.07" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A38.3 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.16" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A49.2 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A60.2 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.34" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A71.1 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.44" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A82.1 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.54" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A93.0 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.64" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A103.9 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A114.9 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.86" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A125.8 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="1.98" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A136.8 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="2.09" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A147.7 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="2.21" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A158.6 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="2.34" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A169.6 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="2.46" fill="none" strokeLinecap="round"/>
        <path d="M214.0 28.0A180.5 186.0 0 0 1 214.0 400.0" stroke="currentColor" strokeWidth="2.59" fill="none" strokeLinecap="round"/>
        <path d="M32.7 172.6A181.3 39.9 0 0 0 395.3 172.6" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M32.7 255.4A181.3 39.9 0 0 0 395.3 255.4" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M46.4 133.3A167.6 36.9 0 0 0 381.6 133.3" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M46.4 294.7A167.6 36.9 0 0 0 381.6 294.7" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M68.6 98.0A145.4 32.0 0 0 0 359.4 98.0" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M68.6 330.0A145.4 32.0 0 0 0 359.4 330.0" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M98.0 68.6A116.0 25.5 0 0 0 330.0 68.6" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M98.0 359.4A116.0 25.5 0 0 0 330.0 359.4" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M133.3 46.4A80.7 17.8 0 0 0 294.7 46.4" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M133.3 381.6A80.7 17.8 0 0 0 294.7 381.6" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M172.6 32.7A41.4 9.1 0 0 0 255.4 32.7" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <path d="M172.6 395.3A41.4 9.1 0 0 0 255.4 395.3" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
        <circle cx="214.0" cy="214.0" r="200" stroke="currentColor" strokeWidth="1.00" fill="none" opacity=".7"/>
      </svg>
    </div>
  );
}
