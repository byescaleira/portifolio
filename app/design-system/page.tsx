import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { PranchaEstrela, PranchaOrbital } from "../components/figuras";

export const metadata: Metadata = {
  title: "Design system — Rafael Escaleira",
  description:
    "A prancha de atlas: as tintas medidas, a regra da luz, a gravura em linha, o granulado e o vocabulário de componentes que governam este site.",
};

/* ============================================================
   Esta página documenta o sistema da decisão 006 do brand book.
   Todo número aqui foi MEDIDO contra o fundo real em que o token
   vive, e contra o pior dos três fundos — papel, seção alternada
   e interior de moldura. A versão anterior desta página
   documentava a serigrafia de duas tintas, que saiu de canon.
   ============================================================ */

export default function DesignSystemPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-1 flex-col bg-background">
        <div className="border-b border-hairline">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-2.5 md:px-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
              Tabula &mdash; o sistema
            </p>
            <Link
              href="/"
              className="buril font-mono text-[11px] uppercase tracking-[0.2em]"
            >
              Voltar ao site
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12">
          <h1 className="t-display mt-10 max-w-[16ch] text-balance md:mt-14">
            A raiz e a copa.
          </h1>
          <div className="mt-5 h-[6px] w-full bg-accent" />

          <p className="t-lead mt-8 max-w-[62ch] text-pretty">
            A gratícula é a engenharia: régua, coordenada, medida &mdash; e
            ninguém a olha. A massa gravada é o que a pessoa sente, e ela não
            respeita a régua: passa por cima. Sem a gratícula embaixo, ela não
            tem em quê crescer.
          </p>
          <p className="t-body mt-4 max-w-[62ch] text-pretty">
            Todo número desta página foi medido contra o <Strong>pior</Strong>{" "}
            dos três fundos de uma peça, não contra o papel só. Medir contra um
            fundo é o erro que deixa passar tinta que reprova na seção
            alternada, que é onde mora a maior parte do texto.
          </p>
        </div>

        {/* ============ I · AS TINTAS ============ */}
        <Section folio="I" label="Fundamentos" title="As tintas">
          <Prose>
            Três papéis, nunca confundidos. <Strong>Papel</Strong> é onde se
            pinta, <Strong>tinta</Strong> é o que se lê, <Strong>luz</Strong> é
            o que importa agora.
          </Prose>

          <div className="flex h-20 border border-foreground">
            <span className="flex-[1.2] bg-background" />
            <span className="flex-1 bg-foreground" />
            <span className="flex-[.6] bg-accent" />
          </div>
          <div className="flex font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-3">
            <span className="flex-[1.2]">papel</span>
            <span className="flex-1">vazio</span>
            <span className="flex-[.6]">luz</span>
          </div>

          <SubHead>A escada, nos dois modos</SubHead>
          <Prose small>
            O piso é 4,52:1 nos dois. O modo escuro inverte a lógica de um jeito
            fácil de errar: lá o pior fundo é o mais <Strong>claro</Strong> dos
            três, porque a tinta é que é clara.
          </Prose>
          <Tabela
            cabecalho={["Token", "Claro", "Escuro", "Pior caso", "Uso"]}
            linhas={[
              ["--foreground", "#131a38", "#e9e0ce", "12,04:1", "Todo texto"],
              ["--ink-2", "#3e4256", "#bab4ad", "7,01:1", "Secundário"],
              ["--ink-3", "#5d5e6c", "#8b898c", "4,52:1", "Legenda. É o piso."],
              ["--hairline", "#7b7a81", "#6c6c76", "3,00:1", "Régua, nunca texto"],
              ["--accent-solid", "#ff6b00", "#ff6b00", "2,18:1 / 5,49:1", "Ver a regra da luz"],
            ]}
          />

          <Regra
            titulo="O vazio anil venceu o verde por medição, não por gosto"
            corpo="Um verde profundo #1D3C30 chegava a 4,22:1 com a luz — passava raspando o piso de 4,5. O anil dá 5,97:1. Ir para o tema espacial fortaleceu a regra em vez de custar alguma coisa; foi o argumento que fechou a cor."
          />
        </Section>

        {/* ============ II · A REGRA DA LUZ ============ */}
        <Section folio="II" label="Fundamentos" title="A regra da luz">
          <Prose>
            <Strong>No claro a luz reprova como texto. No escuro passa.</Strong>{" "}
            É a única assimetria do sistema, e ela governa quase todo
            componente.
          </Prose>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-hairline p-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
                Claro &middot; luz no papel = 2,18:1
              </p>
              <p className="t-body mt-3">
                Reprova até em corpo grande, que precisa de 3:1. Precisa de
                bloco anil embaixo.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="btn-primary text-[15px]">Ver o trabalho</span>
                <span className="btn-secondary text-[15px]">Falar comigo</span>
              </div>
            </div>
            <div className="border border-hairline bg-foreground p-5">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
                Escuro &middot; luz no vazio = 5,49:1
              </p>
              <p
                className="t-body mt-3"
                style={{ color: "var(--background)" }}
              >
                Aqui ela é texto direto. O bloco deixa de ser necessário &mdash;
                e some.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span
                  className="versalete pb-1 text-[13px]"
                  style={{
                    color: "var(--luz)",
                    borderBottom: "2px solid var(--luz)",
                  }}
                >
                  Ver o trabalho
                </span>
                <span
                  className="versalete px-4 py-2 text-[13px]"
                  style={{
                    color: "var(--background)",
                    border: "1px solid var(--background)",
                  }}
                >
                  Falar comigo
                </span>
              </div>
            </div>
          </div>

          <Regra
            titulo="O mesmo componente muda de forma entre os modos, e isso é correto"
            corpo="O botão primário é um bloco no claro e um contorno no escuro. Se isso incomodar, a saída é usar bloco nos dois — nunca soltar o laranja no papel. Quem “consertar” isso soltando a luz quebra o sistema inteiro."
          />
        </Section>

        {/* ============ III · A TIPOGRAFIA ============ */}
        <Section folio="III" label="Fundamentos" title="A tipografia">
          <Prose>
            Três famílias, três funções, nenhuma sobreposição. Isto encerra a
            regra de <Strong>&ldquo;sem webfont&rdquo;</Strong>, que valia
            enquanto o meio era serigrafia e a voz vinha do layout. Agora a voz
            vem do tipo.
          </Prose>

          <div className="divide-y divide-hairline border-y border-hairline">
            <Face
              amostra="Bodoni Moda"
              classe="font-heading text-[clamp(2rem,5vw,3.4rem)] font-bold"
              nota="Display e versalete. O nome, a promessa, os rótulos de figura. Nunca corpo de texto."
            />
            <Face
              amostra="Spectral"
              classe="text-[clamp(1.4rem,3vw,2rem)]"
              nota="Leitura. Peso 300 em corpo — é o peso que uma prancha imprime."
            />
            <Face
              amostra="IBM Plex Mono"
              classe="font-mono text-[clamp(1.1rem,2.4vw,1.5rem)]"
              nota="Coordenada, numeração, legenda de instrumento. Tudo que é etiqueta."
            />
          </div>

          <Regra
            titulo="O versalete é o rótulo do sistema"
            corpo="Bodoni em caixa alta com .22em de entreletra. É ele que dá a voz de prancha; sem ele, tudo vira site. E corpo nunca desce de .845rem: o granulado come tipo menor que isso, testado e não estimado."
          />
        </Section>

        {/* ============ IV · A MOLDURA ============ */}
        <Section folio="IV" label="Forma" title="A moldura e a gravura">
          <Prose>
            A prancha tem <Strong>régua dupla</Strong>: fina por fora, grossa
            por dentro, com folga entre elas. Não é borda de caixa &mdash; é o
            corte da chapa.
          </Prose>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="border border-foreground p-[5px]">
                <div className="h-24 border-[3px] border-foreground bg-panel" />
              </div>
              <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3">
                1px &middot; folga 5px &middot; 3px. Canto vivo, sempre.
              </p>
            </div>
            <div>
              <div
                className="h-[104px] border border-hairline"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, color-mix(in srgb, var(--foreground) 30%, transparent) 0 1px, transparent 1px 56px)," +
                    "repeating-linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 30%, transparent) 0 1px, transparent 1px 56px)," +
                    "repeating-linear-gradient(to right, color-mix(in srgb, var(--foreground) 11%, transparent) 0 .5px, transparent .5px 14px)," +
                    "repeating-linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 11%, transparent) 0 .5px, transparent .5px 14px)",
                }}
              />
              <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3">
                Gratícula &mdash; nunca por cima de texto
              </p>
            </div>
          </div>

          <SubHead>O buril</SubHead>
          <Prose small>
            <Strong>Tom é densidade de linha.</Strong> Nunca cinza, nunca
            opacidade. E a linha acompanha a forma: num globo ela curva com o
            meridiano e engrossa na sombra. Por isso a arte geométrica é{" "}
            <Strong>gerada</Strong>, não desenhada a olho &mdash; as figuras
            abaixo saem de <code className="font-mono text-[0.92em]">gravura.py</code>,
            no brand book.
          </Prose>

          <div className="grid items-center gap-10 md:grid-cols-2">
            <PranchaOrbital className="w-full max-w-[380px] justify-self-center" />
            <PranchaEstrela className="w-full max-w-[340px] justify-self-center" />
          </div>

          <Regra
            titulo="O granulado são três passadas, nunca uma"
            corpo="Uma passada só lê como ruído de JPEG; três leem como fibra. E fica abaixo do ponto em que começa a comer o texto miúdo — a primeira versão da capa errou exatamente aí, e o conserto foi baixar a força, não trocar de tipo."
          />
        </Section>

        {/* ============ V · O MOVIMENTO ============ */}
        <Section folio="V" label="Comportamento" title="O movimento">
          <Prose>
            Três famílias. Nada reposiciona layout &mdash; só{" "}
            <code className="font-mono text-[0.92em]">transform</code>,{" "}
            <code className="font-mono text-[0.92em]">opacity</code> e{" "}
            <code className="font-mono text-[0.92em]">clip-path</code>. Tudo
            morre em{" "}
            <code className="font-mono text-[0.92em]">prefers-reduced-motion</code>.
          </Prose>
          <Tabela
            cabecalho={["Família", "Quando", "O quê"]}
            linhas={[
              ["REVEAL", "Uma vez, na entrada", "O buril abre a linha em vez de ela já estar lá"],
              ["ORBITAL", "Ambiente, infinito", "O globo gira em 260s. Lento a ponto de você só notar se parar"],
              ["RESPONSE", "Na interação", "A régua do link engrossa de 1px para 2px"],
            ]}
          />
          <Regra
            titulo="O hover do link é o gesto do buril"
            corpo="A régua aprofunda, não muda de cor. É a única coisa que uma chapa gravada sabe fazer, e é por isso que nenhum link deste site troca de tinta ao passar o mouse."
          />
        </Section>

        {/* ============ VI · O QUE NUNCA ENTRA ============ */}
        <Section folio="VI" label="Limites" title="O que nunca entra">
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              ["Gradiente", "Tom é linha."],
              ["Sombra suave", "Uma prancha não tem profundidade de campo."],
              ["Cinza para fazer tom", "Cinza é uma tinta que este sistema não tem."],
              ["Canto arredondado", "Uma chapa gravada tem canto vivo."],
              ["Ícone de biblioteca", "Todo desenho é gravado, ou não entra."],
              ["Laranja solto no papel", "2,18:1. Ver a regra da luz."],
            ].map(([t, d]) => (
              <li key={t} className="border border-hairline px-4 py-3">
                <p className="versalete text-[12px]">{t}</p>
                <p className="t-body mt-1 text-[14px]">{d}</p>
              </li>
            ))}
          </ul>
          <Regra
            titulo="E a palavra “profissional”"
            corpo="Se a peça precisa dizer isso, ela falhou. Foi o ponto de partida do briefing e virou regra escrita."
          />
        </Section>

        <div className="mx-auto w-full max-w-[1120px] px-6 pb-16 md:px-12">
          <div className="escala" />
          <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-3">
            A fonte da verdade é o brand book &mdash; decisão 006 e SISTEMA.md.
            Se esta página e eles divergirem, eles vencem e esta está
            desatualizada.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ---------------- peças da página ---------------- */

function Section({
  folio,
  label,
  title,
  children,
}: {
  folio: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-14 md:px-12 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
            {label}
          </p>
          <p className="folio font-mono text-[10px] uppercase tracking-[0.2em]">
            {folio}
          </p>
        </div>
        <div className="mt-2 h-[2px] w-full bg-accent" />
        <h2 className="t-section mt-6">{title}</h2>
        <div className="mt-8 flex flex-col gap-7">{children}</div>
      </div>
    </section>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return <p className="versalete text-[12px] text-ink">{children}</p>;
}

function Prose({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <p className={`${small ? "text-[15px]" : "t-body"} max-w-[68ch] text-pretty`}>
      {children}
    </p>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

function Face({
  amostra,
  classe,
  nota,
}: {
  amostra: string;
  classe: string;
  nota: string;
}) {
  return (
    <div className="py-5">
      <p className={classe}>{amostra}</p>
      <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3">
        {nota}
      </p>
    </div>
  );
}

function Tabela({
  cabecalho,
  linhas,
}: {
  cabecalho: string[];
  linhas: string[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left font-mono text-[12px]">
        <thead>
          <tr className="border-b-[2.5px] border-foreground">
            {cabecalho.map((c) => (
              <th
                key={c}
                className="py-2 pr-4 font-medium uppercase tracking-[0.12em] text-ink"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((l) => (
            <tr key={l[0]} className="border-b border-hairline">
              {l.map((c, i) => (
                <td key={i} className="py-2 pr-4 text-ink-2">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Uma regra do sistema: por que ela existe, e o que quebrou sem ela. */
function Regra({ titulo, corpo }: { titulo: string; corpo: string }) {
  return (
    <div className="border-l-[3px] border-accent pl-5">
      <p className="versalete text-[12px] text-ink">{titulo}</p>
      <p className="t-body mt-2 max-w-[68ch] text-[15px]">{corpo}</p>
    </div>
  );
}
