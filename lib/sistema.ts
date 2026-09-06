/**
 * O design system como DADO, não como página.
 *
 * A diferença que importa: aqui vão as razões de contraste MEDIDAS, então um
 * cliente pode verificar o sistema em vez de só lê-lo. Um design system que
 * publica os próprios números aceita ser conferido.
 */
export const sistema = {
  conceito: {
    objeto: "A prancha de atlas astronômico",
    ideia:
      "A gratícula é a engenharia: régua, coordenada, medida — e ninguém a olha. A massa gravada é o que a pessoa sente, e ela não respeita a régua: passa por cima.",
  },
  tintas: {
    claro: {
      papel: "#E9E0CE",
      papel2: "#E2D8C3",
      papel3: "#EFE8DC",
      tinta: "#131A38",
      tinta2: "#3E4256",
      tinta3: "#5D5E6C",
      regua: "#7B7A81",
      luz: "#FF6B00",
    },
    escuro: {
      papel: "#131A38",
      papel2: "#0E1330",
      papel3: "#1A2142",
      tinta: "#E9E0CE",
      tinta2: "#BAB4AD",
      tinta3: "#8B898C",
      regua: "#6C6C76",
      luz: "#FF6B00",
    },
  },
  contraste: {
    metodo:
      "Pior caso entre os três fundos de cada modo — papel, seção alternada e interior de moldura. Medir contra um fundo só deixa passar tinta que reprova na seção alternada, que é onde mora a maior parte do texto.",
    piso: { texto: 4.5, grafico: 3.0 },
    claro: { tinta: 12.04, tinta2: 7.01, tinta3: 4.52, regua: 3.0, luz: 2.18 },
    escuro: { tinta: 11.95, tinta2: 7.63, tinta3: 4.52, regua: 3.02, luz: 5.49 },
  },
  regraDaLuz: {
    enunciado:
      "No claro a luz reprova como texto. No escuro passa. É a única assimetria do sistema, e ela governa quase todo componente.",
    claro:
      "2,18:1 no papel — reprova até no piso de 3:1 de corpo grande. Todo texto em laranja precisa de bloco anil embaixo.",
    escuro: "5,49:1 no vazio — texto direto, e o bloco some.",
    consequencia:
      "O mesmo botão muda de forma entre os modos: bloco no claro, contorno no escuro. Isso é correto. Quem “consertar” soltando o laranja no papel quebra o sistema.",
  },
  tipografia: {
    display: { familia: "Bodoni Moda", uso: "Nome, promessa, rótulos de figura. Nunca corpo." },
    leitura: { familia: "Spectral", peso: 300, uso: "Corpo. É o peso que uma prancha imprime." },
    instrumento: { familia: "IBM Plex Mono", uso: "Coordenada, numeração, legenda." },
    piso: "Corpo nunca abaixo de .845rem: o granulado come tipo menor que isso.",
  },
  gravura: {
    tom: "Densidade de linha. Nunca cinza, nunca opacidade.",
    linha:
      "Acompanha a forma. Num globo curva com o meridiano e engrossa na sombra — linha reta atravessando volume redondo entrega que ninguém olhou.",
    passos: [
      { nome: "sombra", peso: 2.6, passo: 10 },
      { nome: "meio", peso: 1.6, passo: 8 },
      { nome: "luz", peso: 1.0, passo: 6 },
      { nome: "papel", peso: 0.6, passo: 4 },
    ],
    granulado: "Três passadas de pitch diferente, nunca uma. Uma só lê como ruído de JPEG.",
  },
  movimento: {
    REVEAL: "Uma vez, na entrada. O buril abre a linha em vez de ela já estar lá.",
    ORBITAL: "Ambiente, infinito, lento. O globo gira em 260s.",
    RESPONSE: "Na interação. A régua do link engrossa de 1px para 2px — aprofunda, não muda de cor.",
  },
  proibido: [
    "Gradiente — tom é linha.",
    "Sombra suave — uma prancha não tem profundidade de campo.",
    "Cinza para fazer tom — é uma tinta que este sistema não tem.",
    "Canto arredondado.",
    "Ícone de biblioteca.",
    "Laranja solto no papel como texto.",
    "A palavra “profissional”: se a peça precisa dizer isso, ela falhou.",
  ],
} as const;
