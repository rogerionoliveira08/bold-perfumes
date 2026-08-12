export type CategoriaGuia =
  | "Ingredientes"
  | "Especiarias"
  | "Conceitos"
  | "Desempenho"
  | "Concentrações"
  | "Famílias olfativas"
  | "Dicas de uso";

export type TermoGuia = {
  id: string;
  termo: string;
  categoria: CategoriaGuia;
  resumo: string;
  descricao: string;
  efeito: string;
  indicadoPara?: string;
  destaque?: boolean;
  palavrasChave: string[];
};

export const categoriasGuia: Array<{
  nome: "Todos" | CategoriaGuia;
  descricao: string;
}> = [
  {
    nome: "Todos",
    descricao: "Explore todos os assuntos do nosso guia.",
  },
  {
    nome: "Ingredientes",
    descricao: "Conheça as matérias-primas e notas dos perfumes.",
  },
    {
    nome: "Especiarias",
    descricao:
      "Conheça especiarias que trazem calor, frescor e personalidade.",
  },
  {
    nome: "Conceitos",
    descricao: "Entenda os principais termos da perfumaria.",
  },
  {
    nome: "Desempenho",
    descricao: "Fixação, projeção, duração e evolução na pele.",
  },
  {
    nome: "Concentrações",
    descricao: "Entenda as diferenças entre as concentrações.",
  },
  {
    nome: "Famílias olfativas",
    descricao: "Descubra os estilos e personalidades das fragrâncias.",
  },
  {
    nome: "Dicas de uso",
    descricao: "Aprenda a aplicar, escolher e conservar seu perfume.",
  },
];

export const termosGuia: TermoGuia[] = [
  {
    id: "oud",
    termo: "Oud",
    categoria: "Ingredientes",
    resumo:
      "Nota amadeirada, resinosa e intensa, muito presente na perfumaria árabe.",
    descricao:
      "O oud está relacionado à resina aromática formada em algumas árvores de agar. É uma matéria-prima muito valorizada no Oriente Médio e pode apresentar diferentes nuances conforme sua composição.",
    efeito:
      "Acrescenta profundidade, intensidade e sofisticação. Pode ser percebido como amadeirado, resinoso, defumado, terroso ou levemente animalizado.",
    indicadoPara:
      "Quem procura perfumes marcantes, sofisticados e com forte presença.",
    destaque: true,
    palavrasChave: ["madeira", "agar", "resina", "árabe", "intenso"],
  },
  {
    id: "almiscar",
    termo: "Almíscar",
    categoria: "Ingredientes",
    resumo:
      "Nota macia e envolvente que pode transmitir limpeza, conforto e sensualidade.",
    descricao:
      "Na perfumaria moderna, o efeito almiscarado é normalmente criado com moléculas sintéticas. Seu aroma pode variar entre limpo, atalcado, cremoso, quente ou levemente animalizado.",
    efeito:
      "Traz maciez, conforto e sensação de pele perfumada, além de ajudar a dar continuidade à composição.",
    indicadoPara:
      "Quem gosta de fragrâncias limpas, aconchegantes ou sensuais.",
    destaque: true,
    palavrasChave: ["musk", "limpo", "conforto", "sensual", "macio"],
  },
  {
    id: "ambar",
    termo: "Âmbar",
    categoria: "Ingredientes",
    resumo:
      "Acorde quente, adocicado e envolvente muito usado no fundo dos perfumes.",
    descricao:
      "Na perfumaria, âmbar geralmente não representa uma única matéria-prima. É um acorde construído com notas quentes, resinosas, doces e balsâmicas.",
    efeito:
      "Cria sensação de calor, profundidade, sensualidade e envolvimento.",
    indicadoPara:
      "Perfumes noturnos, marcantes, elegantes e indicados para temperaturas amenas.",
    destaque: true,
    palavrasChave: ["quente", "doce", "resina", "balsâmico", "oriental"],
  },
  {
    id: "baunilha",
    termo: "Baunilha",
    categoria: "Ingredientes",
    resumo:
      "Nota doce, cremosa e aconchegante muito utilizada na perfumaria.",
    descricao:
      "A baunilha pode apresentar aspectos doces, cremosos, licorosos, amendoados ou levemente especiados, dependendo das notas que a acompanham.",
    efeito:
      "Traz doçura, conforto, cremosidade e uma sensação acolhedora ao perfume.",
    indicadoPara:
      "Quem gosta de perfumes doces, gourmand, românticos ou envolventes.",
    palavrasChave: ["doce", "cremoso", "gourmand", "aconchegante"],
  },
  {
    id: "bergamota",
    termo: "Bergamota",
    categoria: "Ingredientes",
    resumo:
      "Cítrico fresco, luminoso e elegante muito usado na saída das fragrâncias.",
    descricao:
      "A bergamota é uma fruta cítrica aromática. Sua nota combina frescor com uma faceta levemente floral, verde e amarga.",
    efeito:
      "Oferece uma abertura refrescante, vibrante, limpa e sofisticada.",
    indicadoPara:
      "Perfumes para o dia, trabalho, calor e ocasiões em que se deseja frescor.",
    palavrasChave: ["cítrico", "fresco", "saída", "limpo", "dia"],
  },
  {
    id: "rosa",
    termo: "Rosa",
    categoria: "Ingredientes",
    resumo:
      "Nota floral versátil que pode ser delicada, fresca, aveludada ou intensa.",
    descricao:
      "A rosa é uma das notas mais tradicionais da perfumaria. Dependendo da composição, pode apresentar um perfil fresco, adocicado, verde, cremoso ou escuro.",
    efeito:
      "Acrescenta elegância, feminilidade, textura floral e sofisticação.",
    indicadoPara:
      "Quem aprecia perfumes florais, românticos, elegantes ou marcantes.",
    palavrasChave: ["floral", "elegante", "romântico", "aveludado"],
  },
  {
    id: "patchouli",
    termo: "Patchouli",
    categoria: "Ingredientes",
    resumo:
      "Nota terrosa e amadeirada que acrescenta estrutura e profundidade.",
    descricao:
      "O patchouli é extraído das folhas de uma planta aromática. Pode apresentar nuances terrosas, úmidas, amadeiradas, verdes ou achocolatadas.",
    efeito:
      "Reforça a base do perfume e acrescenta intensidade, elegância e personalidade.",
    indicadoPara:
      "Perfumes amadeirados, orientais, intensos e sofisticados.",
    palavrasChave: ["terroso", "amadeirado", "base", "intenso"],
  },
  {
    id: "vetiver",
    termo: "Vetiver",
    categoria: "Ingredientes",
    resumo:
      "Nota amadeirada, seca e terrosa frequentemente associada à elegância.",
    descricao:
      "O vetiver vem das raízes de uma planta tropical. Pode apresentar aspectos secos, verdes, defumados, terrosos ou levemente cítricos.",
    efeito:
      "Traz estrutura, frescor seco, seriedade e sofisticação.",
    indicadoPara:
      "Quem busca fragrâncias elegantes, amadeiradas e versáteis.",
    palavrasChave: ["raiz", "seco", "verde", "amadeirado", "elegante"],
  },
  {
    id: "fava-tonka",
    termo: "Fava-tonka",
    categoria: "Ingredientes",
    resumo:
      "Nota adocicada com nuances de baunilha, amêndoa e especiarias.",
    descricao:
      "A fava-tonka possui um aroma rico e confortável, frequentemente associado à baunilha, amêndoas, feno e canela.",
    efeito:
      "Acrescenta doçura cremosa, calor e sensação aconchegante.",
    indicadoPara:
      "Perfumes doces, orientais, gourmand e indicados para a noite.",
    palavrasChave: ["tonka", "doce", "amêndoa", "baunilha", "quente"],
  },
  {
    id: "incenso",
    termo: "Incenso",
    categoria: "Ingredientes",
    resumo:
      "Nota resinosa e defumada que transmite profundidade e mistério.",
    descricao:
      "O incenso utilizado na perfumaria pode apresentar aspectos resinosos, minerais, secos, balsâmicos e esfumaçados.",
    efeito:
      "Traz uma atmosfera misteriosa, elegante, contemplativa e marcante.",
    indicadoPara:
      "Quem gosta de perfumes intensos, resinosos e diferentes.",
    palavrasChave: ["defumado", "resina", "mistério", "esfumaçado"],
  },
  {
    id: "compra-as-cegas",
    termo: "Compra às cegas",
    categoria: "Conceitos",
    resumo:
      "É quando alguém compra um perfume sem experimentá-lo anteriormente.",
    descricao:
      "Antes de uma compra às cegas, é recomendável observar a família olfativa, as notas, o nível de doçura, a intensidade, as ocasiões indicadas e perfumes que a pessoa já utiliza.",
    efeito:
      "Descrições e avaliações ajudam na escolha, mas a percepção e o comportamento de um perfume podem variar de pessoa para pessoa.",
    indicadoPara:
      "Quem pesquisou as características da fragrância e aceita que a experiência pode ser diferente na própria pele.",
    destaque: true,
    palavrasChave: ["blind buy", "comprar sem sentir", "escolha"],
  },
  {
    id: "piramide-olfativa",
    termo: "Pirâmide olfativa",
    categoria: "Conceitos",
    resumo:
      "Organiza as notas de um perfume em saída, coração e fundo.",
    descricao:
      "A pirâmide olfativa ajuda a explicar a evolução da fragrância. As notas não desaparecem necessariamente de forma separada: elas podem se misturar durante o uso.",
    efeito:
      "Ajuda o cliente a entender por que o cheiro percebido logo após a aplicação pode mudar com o passar do tempo.",
    destaque: true,
    palavrasChave: ["topo", "coração", "base", "notas", "evolução"],
  },
  {
    id: "notas-de-saida",
    termo: "Notas de saída",
    categoria: "Conceitos",
    resumo:
      "São as primeiras notas percebidas depois da aplicação.",
    descricao:
      "Normalmente apresentam ingredientes mais leves e voláteis, como cítricos, ervas e algumas frutas.",
    efeito:
      "Formam a primeira impressão do perfume, mas não representam sozinhas toda a fragrância.",
    palavrasChave: ["topo", "abertura", "primeira impressão"],
  },
  {
    id: "notas-de-coracao",
    termo: "Notas de coração",
    categoria: "Conceitos",
    resumo:
      "Formam a personalidade central da fragrância.",
    descricao:
      "Surgem com maior clareza após a abertura e costumam incluir flores, frutas, especiarias e notas aromáticas.",
    efeito:
      "Revelam o tema principal e grande parte da identidade do perfume.",
    palavrasChave: ["meio", "corpo", "identidade", "evolução"],
  },
  {
    id: "notas-de-fundo",
    termo: "Notas de fundo",
    categoria: "Conceitos",
    resumo:
      "São as notas mais profundas e duradouras da composição.",
    descricao:
      "Madeiras, resinas, baunilha, âmbar, almíscar e outras notas estruturam a base de muitas fragrâncias.",
    efeito:
      "Trazem profundidade e ajudam a formar o aroma que permanece por mais tempo na pele.",
    palavrasChave: ["base", "secagem", "profundo", "duradouro"],
  },
  {
    id: "assinatura-olfativa",
    termo: "Assinatura olfativa",
    categoria: "Conceitos",
    resumo:
      "É o aroma ou estilo de perfume que passa a representar uma pessoa.",
    descricao:
      "Uma assinatura olfativa pode ser uma fragrância específica ou um conjunto de características que combinam com a personalidade, rotina e imagem desejada.",
    efeito:
      "Ajuda a criar reconhecimento, identidade e memória por meio do perfume.",
    palavrasChave: ["identidade", "personalidade", "perfume assinatura"],
  },
  {
    id: "fixacao",
    termo: "Fixação",
    categoria: "Desempenho",
    resumo:
      "É o tempo durante o qual o perfume permanece perceptível na pele.",
    descricao:
      "A fixação pode variar conforme concentração, composição, clima, hidratação da pele, quantidade aplicada e características individuais.",
    efeito:
      "Uma boa fixação significa permanência, mas não quer dizer necessariamente que o perfume será intenso durante todo o tempo.",
    destaque: true,
    palavrasChave: ["duração", "tempo", "pele", "desempenho"],
  },
  {
    id: "projecao",
    termo: "Projeção",
    categoria: "Desempenho",
    resumo:
      "É a distância em que o perfume pode ser percebido ao redor de quem o usa.",
    descricao:
      "A projeção costuma ser mais forte nas primeiras horas e pode diminuir conforme a fragrância evolui.",
    efeito:
      "Perfumes com alta projeção chamam mais atenção; perfumes moderados ou intimistas permanecem mais próximos da pele.",
    destaque: true,
    palavrasChave: ["distância", "intensidade", "presença", "rastro"],
  },
  {
    id: "silagem",
    termo: "Silagem ou rastro",
    categoria: "Desempenho",
    resumo:
      "É o rastro aromático deixado pela pessoa enquanto ela se movimenta.",
    descricao:
      "A silagem está relacionada à difusão do perfume no ambiente, mas não é exatamente a mesma coisa que fixação ou projeção.",
    efeito:
      "Uma silagem marcante faz a fragrância ser percebida mesmo depois que a pessoa passa pelo local.",
    palavrasChave: ["rastro", "sillage", "difusão", "presença"],
  },
  {
    id: "evolucao-na-pele",
    termo: "Evolução na pele",
    categoria: "Desempenho",
    resumo:
      "É a mudança do aroma desde a aplicação até as horas seguintes.",
    descricao:
      "Conforme os ingredientes evaporam em velocidades diferentes, novas facetas do perfume se tornam mais perceptíveis.",
    efeito:
      "Explica por que um perfume pode começar cítrico e terminar mais amadeirado, doce ou cremoso.",
    palavrasChave: ["secagem", "dry down", "mudança", "notas"],
  },
  {
    id: "parfum",
    termo: "Parfum ou Extrait",
    categoria: "Concentrações",
    resumo:
      "Categoria geralmente associada a uma concentração elevada de composição aromática.",
    descricao:
      "Costuma apresentar aroma mais encorpado e evolução mais lenta, embora o desempenho dependa da fórmula e não apenas do nome da concentração.",
    efeito:
      "Pode permanecer mais próximo da pele e ainda assim ter longa duração.",
    palavrasChave: ["extrait", "extrato", "concentração", "intenso"],
  },
  {
    id: "eau-de-parfum",
    termo: "Eau de Parfum — EDP",
    categoria: "Concentrações",
    resumo:
      "Uma das concentrações mais comuns na perfumaria atual.",
    descricao:
      "Geralmente oferece bom equilíbrio entre presença, evolução e duração. Os resultados variam conforme a composição de cada perfume.",
    efeito:
      "É uma escolha versátil para diferentes ocasiões e períodos do dia.",
    destaque: true,
    palavrasChave: ["edp", "concentração", "duração"],
  },
  {
    id: "eau-de-toilette",
    termo: "Eau de Toilette — EDT",
    categoria: "Concentrações",
    resumo:
      "Concentração frequentemente associada a perfumes mais leves e arejados.",
    descricao:
      "Pode valorizar notas frescas e uma abertura mais expansiva. Isso não significa automaticamente baixa qualidade.",
    efeito:
      "Costuma funcionar bem no dia a dia e em temperaturas mais quentes.",
    palavrasChave: ["edt", "leve", "fresco", "concentração"],
  },
  {
    id: "familia-amadeirada",
    termo: "Família amadeirada",
    categoria: "Famílias olfativas",
    resumo:
      "Fragrâncias construídas ao redor de madeiras e notas terrosas.",
    descricao:
      "Pode reunir cedro, sândalo, vetiver, patchouli e oud, apresentando estilos secos, cremosos, frescos ou intensos.",
    efeito:
      "Transmite elegância, estrutura, confiança e sofisticação.",
    palavrasChave: ["madeira", "cedro", "sândalo", "vetiver"],
  },
  {
    id: "familia-gourmand",
    termo: "Família gourmand",
    categoria: "Famílias olfativas",
    resumo:
      "Perfumes que lembram doces, sobremesas e ingredientes comestíveis.",
    descricao:
      "É comum encontrar baunilha, caramelo, chocolate, café, mel, pralinê e frutas adocicadas.",
    efeito:
      "Cria sensação deliciosa, cremosa, doce e aconchegante.",
    palavrasChave: ["doce", "sobremesa", "caramelo", "chocolate"],
  },
  {
    id: "familia-citrica",
    termo: "Família cítrica",
    categoria: "Famílias olfativas",
    resumo:
      "Fragrâncias frescas construídas com notas de frutas cítricas.",
    descricao:
      "Bergamota, limão, laranja, mandarina e toranja são exemplos frequentes.",
    efeito:
      "Transmite frescor, energia, limpeza e leveza.",
    palavrasChave: ["fresco", "limão", "laranja", "bergamota"],
  },
  {
    id: "familia-floral",
    termo: "Família floral",
    categoria: "Famílias olfativas",
    resumo:
      "Fragrâncias em que uma flor ou conjunto de flores ocupa o destaque.",
    descricao:
      "Rosa, jasmim, tuberosa, flor de laranjeira, íris e lavanda podem criar estilos muito diferentes.",
    efeito:
      "Pode transmitir delicadeza, elegância, romantismo, frescor ou intensidade.",
    palavrasChave: ["flores", "rosa", "jasmim", "elegante"],
  },
  {
    id: "familia-aromatica",
    termo: "Família aromática",
    categoria: "Famílias olfativas",
    resumo:
      "Combina ervas e notas frescas, verdes ou especiadas.",
    descricao:
      "Lavanda, alecrim, sálvia, hortelã e manjericão aparecem com frequência nesse estilo.",
    efeito:
      "Transmite frescor, limpeza, energia e sensação bem cuidada.",
    palavrasChave: ["ervas", "lavanda", "fresco", "verde"],
  },
  {
    id: "familia-oriental-ambarada",
    termo: "Família oriental ou ambarada",
    categoria: "Famílias olfativas",
    resumo:
      "Fragrâncias quentes, envolventes e frequentemente marcantes.",
    descricao:
      "Costuma combinar âmbar, resinas, especiarias, madeiras, baunilha e notas balsâmicas.",
    efeito:
      "Cria sensação de calor, sensualidade, riqueza e presença.",
    palavrasChave: ["ambarado", "oriental", "quente", "especiado"],
  },
  {
    id: "onde-aplicar",
    termo: "Onde aplicar o perfume?",
    categoria: "Dicas de uso",
    resumo:
      "Pontos de pulsação e áreas protegidas do calor excessivo são boas opções.",
    descricao:
      "Pescoço, laterais do pescoço, pulsos e parte interna dos braços são locais comuns. Evite aplicar sobre pele irritada ou lesionada.",
    efeito:
      "Aplicar de forma equilibrada ajuda na percepção e evolução da fragrância.",
    palavrasChave: ["borrifar", "pescoço", "pulso", "aplicação"],
  },
  {
    id: "nao-esfregar",
    termo: "Por que não esfregar os pulsos?",
    categoria: "Dicas de uso",
    resumo:
      "Depois de aplicar, o ideal é deixar o perfume secar naturalmente.",
    descricao:
      "Esfregar os pulsos espalha o produto e pode alterar a forma como a abertura é percebida. Não destrói instantaneamente o perfume, mas é desnecessário.",
    efeito:
      "Deixar secar naturalmente preserva melhor a experiência planejada para a abertura.",
    palavrasChave: ["pulso", "esfregar", "aplicação", "secagem"],
  },
  {
    id: "conservacao",
    termo: "Como conservar o perfume?",
    categoria: "Dicas de uso",
    resumo:
      "Guarde o frasco longe de luz direta, calor e grandes variações de temperatura.",
    descricao:
      "Um local seco, protegido e com temperatura relativamente estável ajuda a conservar a fragrância. O banheiro geralmente não é o melhor lugar.",
    efeito:
      "A conservação adequada reduz a exposição a fatores que podem alterar o perfume ao longo do tempo.",
    palavrasChave: ["guardar", "luz", "calor", "banheiro", "validade"],
  },
    {
    id: "acafrao",
    termo: "Açafrão",
    categoria: "Especiarias",
    resumo:
      "Nota quente, seca e sofisticada muito utilizada em perfumes árabes.",
    descricao:
      "Na perfumaria, o açafrão pode ser representado por matérias-primas naturais, moléculas aromáticas ou acordes que reproduzem seu caráter.",
    efeito:
      "Acrescenta calor, elegância e uma nuance levemente metálica, terrosa, coriácea ou amarga.",
    indicadoPara:
      "Quem gosta de perfumes intensos, sofisticados, ambarados, com couro ou oud.",
    destaque: true,
    palavrasChave: ["saffron", "quente", "couro", "seco", "árabe"],
  },
  {
    id: "cardamomo",
    termo: "Cardamomo",
    categoria: "Especiarias",
    resumo:
      "Especiaria aromática que mistura frescor, calor e leve doçura.",
    descricao:
      "O cardamomo pode apresentar nuances verdes, cítricas, mentoladas, doces e picantes.",
    efeito:
      "Traz luminosidade, elegância e um frescor especiado que equilibra notas doces e amadeiradas.",
    indicadoPara:
      "Perfumes frescos, amadeirados, gourmand, orientais e versáteis.",
    destaque: true,
    palavrasChave: ["verde", "fresco", "picante", "especiado"],
  },
  {
    id: "canela",
    termo: "Canela",
    categoria: "Especiarias",
    resumo:
      "Nota quente, doce e especiada com forte sensação de aconchego.",
    descricao:
      "A canela pode apresentar um aroma doce, seco, amadeirado e levemente picante.",
    efeito:
      "Acrescenta calor, intensidade e uma doçura especiada muito confortável.",
    indicadoPara:
      "Perfumes noturnos, gourmand, ambarados e indicados para temperaturas mais baixas.",
    palavrasChave: ["quente", "doce", "picante", "aconchegante"],
  },
  {
    id: "pimenta-preta",
    termo: "Pimenta-preta",
    categoria: "Especiarias",
    resumo:
      "Nota seca, picante e vibrante que traz energia à fragrância.",
    descricao:
      "Na perfumaria, a pimenta-preta pode apresentar aspectos quentes, secos, terrosos e levemente amadeirados.",
    efeito:
      "Traz impacto, contraste e uma sensação especiada mais intensa.",
    indicadoPara:
      "Perfumes masculinos, aromáticos, amadeirados e marcantes.",
    palavrasChave: ["black pepper", "picante", "seco", "vibrante"],
  },
  {
    id: "pimenta-rosa",
    termo: "Pimenta-rosa",
    categoria: "Especiarias",
    resumo:
      "Nota rosada, fresca e levemente picante usada para iluminar perfumes.",
    descricao:
      "Apesar do nome, possui um perfil mais frutado, luminoso e delicado do que a pimenta-preta.",
    efeito:
      "Acrescenta brilho, frescor e uma picância suave à abertura.",
    indicadoPara:
      "Perfumes florais, frutados, cítricos, modernos e versáteis.",
    palavrasChave: ["pink pepper", "rosado", "fresco", "frutado"],
  },
  {
    id: "noz-moscada",
    termo: "Noz-moscada",
    categoria: "Especiarias",
    resumo:
      "Especiaria quente, seca e levemente adocicada.",
    descricao:
      "A noz-moscada pode apresentar nuances amadeiradas, terrosas, secas e discretamente doces.",
    efeito:
      "Traz calor, textura e sofisticação sem tornar necessariamente o perfume muito doce.",
    indicadoPara:
      "Fragrâncias amadeiradas, aromáticas, orientais e especiadas.",
    palavrasChave: ["nutmeg", "quente", "seco", "amadeirado"],
  },
  {
    id: "cravo",
    termo: "Cravo",
    categoria: "Especiarias",
    resumo:
      "Nota intensa, quente e picante com caráter marcante.",
    descricao:
      "O cravo apresenta um aroma especiado, seco, quente e levemente medicinal ou amadeirado.",
    efeito:
      "Acrescenta potência e contraste, podendo deixar a fragrância mais escura e intensa.",
    indicadoPara:
      "Perfumes noturnos, ambarados, florais intensos e especiados.",
    palavrasChave: ["clove", "picante", "intenso", "quente"],
  },
  {
    id: "gengibre",
    termo: "Gengibre",
    categoria: "Especiarias",
    resumo:
      "Nota fresca, picante e efervescente que transmite energia.",
    descricao:
      "O gengibre pode apresentar aspectos cítricos, verdes, quentes e levemente adocicados.",
    efeito:
      "Cria uma saída vibrante e combina frescor com uma picância moderna.",
    indicadoPara:
      "Perfumes frescos, cítricos, aromáticos e indicados para o dia.",
    palavrasChave: ["ginger", "fresco", "cítrico", "energético"],
  },
  {
    id: "coentro",
    termo: "Coentro",
    categoria: "Especiarias",
    resumo:
      "Nota aromática com aspectos verdes, cítricos e especiados.",
    descricao:
      "Na perfumaria, geralmente são utilizadas as sementes, que oferecem um aroma diferente das folhas usadas na culinária.",
    efeito:
      "Acrescenta brilho, frescor e uma especiaria suave e elegante.",
    indicadoPara:
      "Fragrâncias aromáticas, cítricas, amadeiradas e especiadas.",
    palavrasChave: ["coriander", "semente", "verde", "cítrico"],
  },
  {
    id: "cominho",
    termo: "Cominho",
    categoria: "Especiarias",
    resumo:
      "Nota quente, seca e animalizada usada em pequenas quantidades.",
    descricao:
      "O cominho possui um perfil intenso, terroso e corporal. Por isso, costuma ser utilizado com cuidado dentro da composição.",
    efeito:
      "Pode acrescentar calor, sensualidade e uma sensação de pele.",
    indicadoPara:
      "Perfumes intensos, orientais, especiados e de personalidade forte.",
    palavrasChave: ["cumin", "terroso", "quente", "animalizado"],
  },
  {
    id: "sandalo",
    termo: "Sândalo",
    categoria: "Ingredientes",
    resumo:
      "Madeira cremosa, macia e aconchegante muito utilizada no fundo.",
    descricao:
      "O sândalo apresenta um aroma amadeirado suave, cremoso, quente e por vezes levemente adocicado.",
    efeito:
      "Acrescenta cremosidade, conforto e elegância, suavizando notas mais intensas.",
    indicadoPara:
      "Perfumes amadeirados, florais, orientais, cremosos e unissex.",
    destaque: true,
    palavrasChave: ["sandalwood", "madeira", "cremoso", "macio"],
  },
  {
    id: "cedro",
    termo: "Cedro",
    categoria: "Ingredientes",
    resumo:
      "Madeira seca, elegante e estruturada muito usada na perfumaria.",
    descricao:
      "O cedro pode apresentar facetas secas, limpas, terrosas, resinosas ou semelhantes ao cheiro de lápis apontado.",
    efeito:
      "Dá estrutura, firmeza e elegância à base da fragrância.",
    indicadoPara:
      "Perfumes amadeirados, aromáticos, cítricos e versáteis.",
    palavrasChave: ["cedar", "madeira", "seco", "estrutura"],
  },
  {
    id: "madeira-de-guaiaco",
    termo: "Madeira de guáiaco",
    categoria: "Ingredientes",
    resumo:
      "Madeira densa, quente e levemente defumada.",
    descricao:
      "A madeira de guáiaco pode apresentar nuances esfumaçadas, resinosas, cremosas e discretamente doces.",
    efeito:
      "Acrescenta profundidade, calor e um aspecto elegante de madeira queimada.",
    indicadoPara:
      "Perfumes amadeirados, com oud, incenso, couro ou baunilha.",
    palavrasChave: ["guaiac", "defumado", "madeira", "resinoso"],
  },
  {
    id: "benjoim",
    termo: "Benjoim",
    categoria: "Ingredientes",
    resumo:
      "Resina doce, balsâmica e confortável com nuances de baunilha.",
    descricao:
      "O benjoim é uma resina aromática que pode lembrar baunilha, caramelo, mel e resinas quentes.",
    efeito:
      "Traz doçura balsâmica, maciez e uma sensação aconchegante.",
    indicadoPara:
      "Perfumes ambarados, gourmand, orientais e indicados para a noite.",
    palavrasChave: ["benzoin", "resina", "baunilha", "balsâmico"],
  },
  {
    id: "labdano",
    termo: "Ládano",
    categoria: "Ingredientes",
    resumo:
      "Resina quente, escura e ambarada com grande profundidade.",
    descricao:
      "O ládano pode apresentar nuances balsâmicas, doces, amadeiradas, coriáceas e levemente animalizadas.",
    efeito:
      "Ajuda a construir acordes de âmbar e acrescenta intensidade e sensualidade.",
    indicadoPara:
      "Perfumes orientais, ambarados, com couro, incenso ou oud.",
    palavrasChave: ["labdanum", "resina", "âmbar", "couro"],
  },
  {
    id: "mirra",
    termo: "Mirra",
    categoria: "Ingredientes",
    resumo:
      "Resina aromática de perfil quente, balsâmico e misterioso.",
    descricao:
      "A mirra pode ser percebida como resinosa, amarga, terrosa, medicinal, esfumaçada ou levemente adocicada.",
    efeito:
      "Traz profundidade, mistério e uma sensação quente e contemplativa.",
    indicadoPara:
      "Perfumes resinosos, ambarados, orientais e sofisticados.",
    palavrasChave: ["myrrh", "resina", "balsâmico", "misterioso"],
  },
  {
    id: "olibano",
    termo: "Olíbano",
    categoria: "Ingredientes",
    resumo:
      "Resina associada ao incenso, com aroma fresco, seco e esfumaçado.",
    descricao:
      "Também conhecido como frankincense, o olíbano pode apresentar nuances cítricas, minerais, resinosas e defumadas.",
    efeito:
      "Acrescenta luminosidade resinosa, elegância e atmosfera contemplativa.",
    indicadoPara:
      "Perfumes com incenso, madeiras, âmbar, especiarias ou oud.",
    palavrasChave: ["frankincense", "incenso", "resina", "defumado"],
  },
  {
    id: "flor-de-laranjeira",
    termo: "Flor de laranjeira",
    categoria: "Ingredientes",
    resumo:
      "Floral branco luminoso, fresco e levemente adocicado.",
    descricao:
      "A flor de laranjeira combina facetas florais, cítricas, doces e por vezes levemente meladas.",
    efeito:
      "Traz luminosidade, elegância e uma sensação limpa e envolvente.",
    indicadoPara:
      "Perfumes florais, cítricos, gourmand e ambarados.",
    palavrasChave: ["orange blossom", "floral branco", "cítrico"],
  },
  {
    id: "jasmim",
    termo: "Jasmim",
    categoria: "Ingredientes",
    resumo:
      "Floral branco intenso, elegante e sensual.",
    descricao:
      "O jasmim pode apresentar um aroma floral cremoso, luminoso, verde, frutado ou levemente animalizado.",
    efeito:
      "Acrescenta volume, sensualidade e riqueza ao coração do perfume.",
    indicadoPara:
      "Perfumes florais, orientais, frutados, ambarados e sofisticados.",
    palavrasChave: ["jasmine", "floral branco", "sensual", "cremoso"],
  },
  {
    id: "couro",
    termo: "Couro",
    categoria: "Ingredientes",
    resumo:
      "Acorde seco, esfumaçado e marcante associado à elegância.",
    descricao:
      "O couro na perfumaria é normalmente um acorde criado para lembrar couro novo, camurça, couro queimado ou couro adocicado.",
    efeito:
      "Traz personalidade, força, sofisticação e uma textura escura ou macia.",
    indicadoPara:
      "Quem procura perfumes intensos, elegantes, diferentes e noturnos.",
    palavrasChave: ["leather", "camurça", "seco", "defumado"],
  },
  {
    id: "tabaco",
    termo: "Tabaco",
    categoria: "Ingredientes",
    resumo:
      "Nota quente, seca ou adocicada que transmite profundidade.",
    descricao:
      "Na perfumaria, o tabaco pode lembrar folhas secas, mel, especiarias, madeira, fumaça ou tabaco aromatizado.",
    efeito:
      "Acrescenta calor, elegância, doçura escura e personalidade.",
    indicadoPara:
      "Perfumes noturnos, amadeirados, especiados e gourmand.",
    palavrasChave: ["tobacco", "folha", "mel", "fumaça"],
  },
];