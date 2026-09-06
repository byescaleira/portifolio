import { cn } from "@/lib/utils";

/**
 * As figuras gravadas.
 *
 * Substituem `orbital-chart.webp` e `spica.webp`, que eram serigrafia com
 * meio-tom — o meio que a decisão 006 aposentou. Saem de `gravura.py`, não de
 * prompt: PROMPTS.md §6 diz que esfera, órbita e escala são cálculo, e o
 * gerador ganha do prompt em tudo que importa aqui. Fica nítido em qualquer
 * tamanho, pesa 7KB em vez de 250KB, sai igual toda vez, e usa currentColor —
 * então obedece ao tema em vez de carregar papel próprio assado no arquivo,
 * que era exatamente a limitação dos .webp.
 *
 * A diferença de traço entre as duas metades é o ponto da prancha: a elipse é
 * o INSTRUMENTO e tem peso constante; o globo é o ASTRO e tem peso variável.
 */
export function PranchaOrbital({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      role="img"
      aria-label="Prancha orbital gravada: um globo com quatro órbitas inclinadas e uma nave na órbita acesa"
      className={cn("text-ink", className)}
    >
      <path d="M300.0 188.0A108.1 112.0 0 0 0 300.0 412.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.96" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A100.4 112.0 0 0 0 300.0 412.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.87" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A92.7 112.0 0 0 0 300.0 412.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.79" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A85.0 112.0 0 0 0 300.0 412.0" stroke="var(--luz, #FF6B00)" strokeWidth="0.71" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A77.2 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.64" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A69.5 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.59" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A61.8 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.54" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A54.1 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.51" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A46.3 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.51" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A38.6 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.54" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A30.9 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.59" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A23.2 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.65" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A15.4 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.72" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A7.7 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.79" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A0.0 112.0 0 0 0 300.0 412.0" stroke="currentColor" strokeWidth="0.87" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A7.7 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="0.96" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A15.4 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.06" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A23.2 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.16" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A30.9 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.26" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A38.6 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.38" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A46.3 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.49" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A54.1 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.61" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A61.8 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.74" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A69.5 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="1.87" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A77.2 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="2.00" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A85.0 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="2.14" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A92.7 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="2.28" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A100.4 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="2.43" fill="none" strokeLinecap="round"/>
      <path d="M300.0 188.0A108.1 112.0 0 0 1 300.0 412.0" stroke="currentColor" strokeWidth="2.58" fill="none" strokeLinecap="round"/>
      <path d="M190.8 275.1A109.2 24.0 0 0 0 409.2 275.1" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M190.8 324.9A109.2 24.0 0 0 0 409.2 324.9" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M199.1 251.4A100.9 22.2 0 0 0 400.9 251.4" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M199.1 348.6A100.9 22.2 0 0 0 400.9 348.6" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M212.4 230.2A87.6 19.3 0 0 0 387.6 230.2" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M212.4 369.8A87.6 19.3 0 0 0 387.6 369.8" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M230.2 212.4A69.8 15.4 0 0 0 369.8 212.4" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M230.2 387.6A69.8 15.4 0 0 0 369.8 387.6" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M251.4 199.1A48.6 10.7 0 0 0 348.6 199.1" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M251.4 400.9A48.6 10.7 0 0 0 348.6 400.9" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M275.1 190.8A24.9 5.5 0 0 0 324.9 190.8" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <path d="M275.1 409.2A24.9 5.5 0 0 0 324.9 409.2" stroke="currentColor" strokeWidth="0.75" fill="none" opacity=".55"/>
      <circle cx="300.0" cy="300.0" r="126" stroke="currentColor" strokeWidth="1.00" fill="none" opacity=".7"/>
      <ellipse cx="300.0" cy="300.0" rx="168.0" ry="33.6" transform="rotate(-22 300.0 300.0)" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.55"/>
      <ellipse cx="300.0" cy="300.0" rx="215.0" ry="54.8" transform="rotate(-7 300.0 300.0)" stroke="var(--luz, #FF6B00)" strokeWidth="1.5" fill="none" opacity="0.95"/>
      <ellipse cx="300.0" cy="300.0" rx="262.1" ry="81.2" transform="rotate(8 300.0 300.0)" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.55"/>
      <ellipse cx="300.0" cy="300.0" rx="309.1" ry="112.8" transform="rotate(23 300.0 300.0)" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.55"/>
      <rect x="506.0" y="254.0" width="18" height="8" transform="rotate(-7 300.0 300.0)" fill="var(--luz, #FF6B00)"/>
    </svg>
  );
}

export function PranchaEstrela({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 552"
      fill="none"
      role="img"
      aria-label="Prancha gravada: uma estrela de raios desiguais sobre a escala de buril em quatro densidades"
      className={cn("text-ink", className)}
    >
      <path d="M300.0 250.0L450.0 250.0" stroke="var(--luz, #FF6B00)" strokeWidth="2.20" strokeLinecap="round"/>
      <path d="M300.0 250.0L347.1 269.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L361.5 311.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L319.5 297.1" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L300.0 400.0" stroke="var(--luz, #FF6B00)" strokeWidth="2.20" strokeLinecap="round"/>
      <path d="M300.0 250.0L280.5 297.1" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L238.5 311.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L252.9 269.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L150.0 250.0" stroke="var(--luz, #FF6B00)" strokeWidth="2.20" strokeLinecap="round"/>
      <path d="M300.0 250.0L252.9 230.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L238.5 188.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L280.5 202.9" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L300.0 100.0" stroke="var(--luz, #FF6B00)" strokeWidth="2.20" strokeLinecap="round"/>
      <path d="M300.0 250.0L319.5 202.9" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L361.5 188.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <path d="M300.0 250.0L347.1 230.5" stroke="currentColor" strokeWidth="1.10" strokeLinecap="round"/>
      <circle cx="300.0" cy="250.0" r="7.0" fill="var(--luz, #FF6B00)"/>
      <path d="M80.0 452.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 456.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 460.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 464.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 468.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 472.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 476.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 480.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 484.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 488.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 492.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 496.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 500.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 504.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 508.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 512.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 516.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 520.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 524.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 528.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 532.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 536.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 540.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M80.0 544.0h96" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M196.0 452.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 458.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 464.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 470.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 476.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 482.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 488.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 494.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 500.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 506.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 512.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 518.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 524.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 530.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 536.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M196.0 542.0h96" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M312.0 452.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 461.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 470.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 479.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 488.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 497.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 506.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 515.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 524.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M312.0 533.0h96" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round"/>
      <path d="M428.0 452.0h96" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M428.0 465.0h96" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M428.0 478.0h96" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M428.0 491.0h96" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M428.0 504.0h96" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M428.0 517.0h96" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
      <path d="M428.0 530.0h96" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round"/>
    </svg>
  );
}
