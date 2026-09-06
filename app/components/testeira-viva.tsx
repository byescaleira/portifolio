"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { pranchas, prancheDaRota } from "@/lib/pranchas";

/**
 * A testeira viva — família RESPONSE.
 *
 * Num atlas a testeira diz em que prancha você está. Aqui ela faz o mesmo: na
 * home acompanha a seção em vista, e nas páginas próprias mostra a Tabula
 * daquela rota. Era o que faltava para a numeração ser navegação de verdade em
 * vez de enfeite de folio.
 *
 * IntersectionObserver, não scroll listener: o cálculo fica com o navegador e
 * não roda a cada pixel. E nada aqui reposiciona layout — só troca texto.
 */
export function TesteiraViva() {
  const pathname = usePathname();
  const daRota = prancheDaRota(pathname);
  const [atual, setAtual] = useState(pranchas[0]);

  useEffect(() => {
    if (daRota) return;
    const secoes = pranchas.filter((p) => p.tipo === "secao");
    const alvos = secoes
      .map((p) => {
        const id = p.href.split("#")[1];
        const el = id === "top" ? document.querySelector("section") : document.getElementById(id);
        return el ? ([el, p] as const) : null;
      })
      .filter(Boolean) as (readonly [Element, (typeof pranchas)[number]])[];

    if (!alvos.length) return;
    const mapa = new Map(alvos);
    const obs = new IntersectionObserver(
      (entradas) => {
        // A prancha corrente é a que ocupa mais da janela, não a primeira que
        // cruza a borda — senão a testeira pisca na fronteira entre duas.
        const visivel = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const p = visivel && mapa.get(visivel.target);
        if (p) setAtual(p);
      },
      { threshold: [0.1, 0.35, 0.6], rootMargin: "-52px 0px -40% 0px" }
    );
    alvos.forEach(([el]) => obs.observe(el));
    return () => obs.disconnect();
  }, [daRota, pathname]);

  const p = daRota ?? atual;
  return (
    <p className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3 lg:block">
      Tabula <span className="text-accent-ink">{p.folio}</span> &middot; {p.titulo}
    </p>
  );
}
