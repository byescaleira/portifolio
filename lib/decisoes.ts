/**
 * O caderno de decisões.
 *
 * Espelha `decisions/` do repositório byescaleira/brand. É o conteúdo mais
 * incomum que este site tem: uma decisão registrada com o que ela CUSTOU, e
 * duas reversões guardadas de propósito em vez de apagadas.
 *
 * A regra do caderno é a mesma do repositório: append, nunca reescrever. Uma
 * decisão superada continua aqui, marcada — quem lê precisa saber que a
 * escolha existiu, senão a lição se perde junto com ela.
 */

export interface Reversao {
  /** O que foi desfeito. */
  oQue: string;
  /** Por que, e o que se perdeu ao desfazer. */
  custo: string;
}

export interface Decisao {
  numero: string;
  slug: string;
  titulo: string;
  status: "fechada" | "superada em parte";
  resumo: string;
  /** O que a decisão fixa, em uma linha cada. */
  fixa: string[];
  /** O que se perdeu ao escolher. Toda escolha tem um, e omitir é mentir. */
  custo?: string;
  supersede?: string[];
  superadaEmParte?: { por: string; oQue: string };
  reversoes?: Reversao[];
}

export const decisoes: Decisao[] = [
  {
    numero: "001",
    slug: "papel-do-personagem",
    titulo: "O astronauta é anônimo",
    status: "fechada",
    resumo:
      "Visor espelhado, sem rosto. O personagem representa o ofício, não a pessoa. O visor reflete código, órbitas, o app — nunca olhos, nunca boca.",
    fixa: [
      "Nunca desenhar olhos nem boca.",
      "Estado emocional vem de pose e contexto, não de expressão.",
      "O visor espelhado é o elemento mais importante da identidade inteira.",
    ],
    custo:
      "Perde-se a via mais fácil de simpatia. Um rosto conecta em meio segundo; um visor exige que a pose faça o trabalho todo.",
  },
  {
    numero: "002",
    slug: "onde-o-personagem-vive",
    titulo: "Site, redes e coisas físicas",
    status: "fechada",
    resumo:
      "O personagem precisa funcionar em três lugares: no site, em redes sociais e em coisas que se imprimem — adesivo, camiseta, slide de palestra.",
    fixa: [
      "Legível a 32px.",
      "Sobrevive a uma cor só.",
      "Sobrevive a recorte circular.",
    ],
    custo:
      "Essas três restrições matam detalhe. Cada uma delas já derrubou um desenho que funcionava grande.",
  },
  {
    numero: "003",
    slug: "a-especificacao-do-personagem",
    titulo: "A especificação substitui as quatro direções",
    status: "fechada",
    resumo:
      "O personagem passa a ser definido por uma especificação escrita, com números, e não por uma escolha entre estilos de desenho.",
    fixa: [
      "Proporção, tamanho de capacete e área de visor viram número, não gosto.",
      "Quatro coisas que ele nunca pode parecer: fofo, militar, NASA vintage, cyberpunk.",
    ],
    supersede: ["as quatro direções iniciais, mantidas só como histórico"],
    custo:
      "Especificação escrita é mais lenta de mudar que um desenho. Foi o ponto — mas significa que ajuste vira decisão, não retoque.",
  },
  {
    numero: "004",
    slug: "sistema-de-nomes",
    titulo: "Estrelas de navegação para os módulos",
    status: "fechada",
    resumo:
      "O problema não era falta de nome bonito. Era não existir regra dizendo o que merece um nome — então cada peça nova reabria a discussão do zero.",
    fixa: [
      "O teste: alguém vai dar import nisso, ou instalar isso?",
      "Módulo recebe estrela de navegação Apollo. Produto mantém nome de mercado.",
      "O que ninguém importa nem instala não recebe nome nenhum.",
      "Repositório é nome nu sob a organização.",
    ],
    custo:
      "A maior parte das coisas passou a não ter nome. Foi o que mais removeu atrito, e é o que mais decepciona quem queria batizar tudo.",
  },
  {
    numero: "005",
    slug: "rodada-de-decisoes",
    titulo: "Quinze decisões de marca",
    status: "superada em parte",
    resumo:
      "Rodada que fechou a base da marca: tese, voz, proporção do personagem, configuração canônica e o que sai da silhueta.",
    fixa: [
      "Personagem em 6 cabeças, usando o capacete como unidade.",
      "Configuração canônica: Graphite Suit.",
      "O capacete é a marca primária e o favicon.",
    ],
    superadaEmParte: {
      por: "a-prancha",
      oQue:
        "o que ela fixa de MEIO — a serigrafia de duas tintas. O que ela fixa de personagem continua valendo.",
    },
    reversoes: [
      {
        oQue: "A mochila de oxigênio saiu.",
        custo:
          "Ela tinha sido pedida explicitamente, e a remoção perde o sinal mais forte de “astronauta” na silhueta pequena. Não re-adicionar sem uma decisão nova.",
      },
      {
        oQue: "A proporção não é a da especificação: virou 6 cabeças, não 6,5–7.",
        custo:
          "O texto da spec teve de ser corrigido para não conflitar. Duas fontes discordando é pior que uma errada.",
      },
    ],
  },
  {
    numero: "006",
    slug: "a-prancha",
    titulo: "A prancha de atlas substitui a serigrafia",
    status: "fechada",
    resumo:
      "Gravura neoclássica sobre papel envelhecido: tom é densidade de linha, e a linha acompanha a forma. Foi o único objeto que resolveu tema espacial, pegada neoclássica e linhas ao mesmo tempo, em vez de empilhar três camadas.",
    fixa: [
      "Tom é densidade de linha. Nunca cinza, nunca opacidade.",
      "A linha acompanha a forma: num globo curva com o meridiano e engrossa na sombra.",
      "Papel #E9E0CE, vazio #131A38, luz #FF6B00.",
      "A luz reprova como texto no papel (2,18:1) e passa sobre o vazio (5,97:1).",
      "O granulado são três passadas de pitch diferente, nunca uma.",
    ],
    supersede: ["a serigrafia de duas tintas que a decisão 005 assumia"],
    custo:
      "Seis direções desenhadas foram descartadas para chegar aqui, e a mudança de meio deixou SPEC.md, PROMPTS.md e as ilustrações fora de canon de uma vez.",
  },
];

/** O que ainda não foi decidido. Um caderno honesto mostra os buracos. */
export const emAberto = [
  {
    questao: "A língua do site",
    situacao:
      "A tese diz inglês, primeira pessoa, editorial. A capa nova foi escrita em português porque “conexão” é argumento local e Cartola é brasileiro. Se o público continua sendo a comunidade dev ampla, isso volta para inglês e o tom muda junto.",
  },
  {
    questao: "A tese escrita",
    situacao:
      "A promessa mudou com a decisão 006 — precisão sob risco deixou de ser o argumento e virou a condição. O arquivo da tese ainda carrega a promessa antiga.",
  },
];

export const getDecisao = (slug: string) => decisoes.find((d) => d.slug === slug);
export const slugsDeDecisao = () => decisoes.map((d) => d.slug);
