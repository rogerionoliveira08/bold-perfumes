"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaRedoAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { produtos } from "@/data/produtos";
import type { Product } from "@/types/product";

type AnswerKey =
  | "genero"
  | "estilo"
  | "ocasiao"
  | "intensidade"
  | "aroma"
  | "orcamento";

type Answers = Partial<Record<AnswerKey, string>>;

type Question = {
  key: AnswerKey;
  eyebrow: string;
  title: string;
  description: string;
  options: string[];
};

const questions: Question[] = [
  {
    key: "genero",
    eyebrow: "Seu perfil",
    title: "Para quem é o perfume?",
    description: "Escolha a opção que mais representa quem vai usar.",
    options: ["Masculino", "Feminino", "Unissex"],
  },
  {
    key: "estilo",
    eyebrow: "Sua presença",
    title: "Como você quer ser percebido?",
    description: "Pense na sensação que deseja transmitir ao chegar.",
    options: [
      "Elegante e delicada",
      "Marcante e sedutora",
      "Fresca e discreta",
      "Misteriosa e sofisticada",
    ],
  },
  {
    key: "ocasiao",
    eyebrow: "Sua rotina",
    title: "Onde pretende usar mais?",
    description: "Vamos priorizar perfumes adequados aos seus momentos.",
    options: [
      "Dia a dia",
      "Trabalho",
      "Encontros",
      "Festas e eventos",
      "Ocasiões especiais",
    ],
  },
  {
    key: "intensidade",
    eyebrow: "Performance",
    title: "Qual intensidade você prefere?",
    description: "Escolha o nível de presença que mais combina com você.",
    options: ["Suave", "Equilibrada", "Intensa"],
  },
  {
    key: "aroma",
    eyebrow: "Preferência olfativa",
    title: "Quais aromas mais atraem você?",
    description: "Não precisa conhecer perfumaria: escolha pela sensação.",
    options: [
      "Frescos e cítricos",
      "Doces e cremosos",
      "Florais",
      "Amadeirados",
      "Especiados e orientais",
    ],
  },
  {
    key: "orcamento",
    eyebrow: "Investimento",
    title: "Qual faixa de preço prefere?",
    description: "Usaremos esse valor para deixar as sugestões mais úteis.",
    options: ["Até R$ 300", "De R$ 301 a R$ 400", "Acima de R$ 400", "Todas"],
  },
];

const styleKeywords: Record<string, string[]> = {
  "Elegante e delicada": ["floral", "rosa", "almíscar", "baunilha", "elegante", "delicad", "atalcad"],
  "Marcante e sedutora": ["oud", "âmbar", "ambar", "couro", "tabaco", "gourmand", "intens", "sedutor"],
  "Fresca e discreta": ["cítric", "citric", "aquátic", "aquatic", "fresc", "bergamota", "lavanda", "aromátic"],
  "Misteriosa e sofisticada": ["oriental", "amadeir", "incenso", "açafrão", "acafrao", "resina", "patchouli", "sofistic"],
};

const aromaKeywords: Record<string, string[]> = {
  "Frescos e cítricos": ["cítric", "citric", "bergamota", "limão", "limao", "aquátic", "aquatic", "fresc"],
  "Doces e cremosos": ["baunilha", "caramelo", "mel", "gourmand", "doce", "cremos", "pralinê", "praline"],
  Florais: ["floral", "rosa", "jasmim", "flor", "tuberosa", "íris", "iris"],
  Amadeirados: ["amadeir", "cedro", "sândalo", "sandalo", "vetiver", "patchouli"],
  "Especiados e orientais": ["oriental", "especiad", "canela", "pimenta", "açafrão", "acafrao", "oud", "âmbar", "ambar"],
};

const attendants = [
  { name: "Rogério", phone: "5522999281815" },
  { name: "Thainá", phone: "5522992885658" },
];

export default function PerfumeQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finished, setFinished] = useState(false);

  const question = questions[step];
  const selected = answers[question.key];
  const progress = finished ? 100 : ((step + 1) / questions.length) * 100;

  const recommendations = useMemo(
    () => recommendProducts(answers),
    [answers],
  );

  function selectAnswer(value: string) {
    setAnswers((current) => ({ ...current, [question.key]: value }));
  }

  function next() {
    if (!selected) return;
    if (step === questions.length - 1) {
      setFinished(true);
      return;
    }
    setStep((current) => current + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <section className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
        <div className="border-b border-zinc-200 bg-zinc-950 p-6 text-white sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-400">
            Sua seleção personalizada
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Encontramos fragrâncias para o seu perfil
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Compare as sugestões e abra o perfume que mais chamou sua atenção.
          </p>
        </div>

        <div className="grid gap-4 p-5 sm:p-7 xl:grid-cols-3">
          {recommendations.map((product, index) => (
            <ResultCard
              key={product.id}
              product={product}
              position={index + 1}
              reason={buildReason(answers)}
            />
          ))}
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-5 sm:p-7">
          <h3 className="text-lg font-black text-zinc-950">
            Quer ajuda para decidir?
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Envie seu resultado e receba atendimento personalizado.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {attendants.map((attendant) => (
              <a
                key={attendant.name}
                href={buildWhatsAppLink(attendant.phone, answers, recommendations)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-black text-white transition hover:bg-[#20ba5a]"
              >
                <FaWhatsapp size={18} />
                Falar com {attendant.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-bold text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
          >
            <FaRedoAlt size={12} />
            Refazer descoberta
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
      <div className="bg-zinc-950 px-5 py-5 text-white sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-bold">Seu perfil olfativo</p>
          <span className="text-xs font-semibold text-zinc-400">
            {step + 1} de {questions.length}
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-5 sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
          {question.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">
          {question.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          {question.description}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {question.options.map((option) => {
            const active = option === selected;
            return (
              <button
                key={option}
                type="button"
                onClick={() => selectAnswer(option)}
                aria-pressed={active}
                className={`flex min-h-16 items-center justify-between gap-4 rounded-2xl border px-4 py-4 text-left text-sm font-bold transition sm:text-base ${
                  active
                    ? "border-zinc-950 bg-zinc-950 text-white shadow-md"
                    : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-500 hover:bg-zinc-50"
                }`}
              >
                {option}
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[9px] ${
                    active
                      ? "border-white bg-white text-black"
                      : "border-zinc-300 text-transparent"
                  }`}
                >
                  <FaCheck />
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex items-center justify-between gap-3 border-t border-zinc-200 pt-5">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            disabled={step === 0}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 text-sm font-bold text-zinc-700 transition hover:border-zinc-950 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <FaArrowLeft size={11} />
            Voltar
          </button>

          <button
            type="button"
            onClick={next}
            disabled={!selected}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-zinc-950 px-5 py-3 text-sm font-black text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-30"
          >
            {step === questions.length - 1 ? "Ver minhas sugestões" : "Continuar"}
            <FaArrowRight size={11} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  product,
  position,
  reason,
}: {
  product: Product;
  position: number;
  reason: string;
}) {
  const price = product.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <Image
          src={product.imagem}
          alt={product.nome}
          fill
          sizes="(max-width: 1280px) 100vw, 33vw"
          className="object-contain p-4"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">
          Sugestão {position}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs font-black uppercase tracking-wider text-zinc-500">
          {product.marca}
        </p>
        <h3 className="mt-1 text-lg font-black text-zinc-950">{product.nome}</h3>
        <p className="mt-1 text-sm font-black text-zinc-950">{price}</p>
        <p className="mt-3 text-xs leading-5 text-zinc-600">{reason}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-bold text-zinc-600">
            {product.familiaOlfativa}
          </span>
          {product.ocasioes?.[0] ? (
            <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-bold text-zinc-600">
              {product.ocasioes[0]}
            </span>
          ) : null}
        </div>

        <Link
          href={`/produto/${product.slug}`}
          className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-black text-white transition hover:bg-zinc-800"
        >
          Conhecer fragrância
          <FaArrowRight size={10} />
        </Link>
      </div>
    </article>
  );
}

function normalize(value: unknown) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function productText(product: Product) {
  return normalize(
    [
      product.nome,
      product.marca,
      product.genero,
      product.familiaOlfativa,
      product.descricao,
      product.inspiradoEm,
      ...(product.notasTopo ?? []),
      ...(product.notasCoracao ?? []),
      ...(product.notasBase ?? []),
      ...(product.ocasioes ?? []),
      ...(product.caracteristicas ?? []),
    ].join(" "),
  );
}

function keywordScore(text: string, keywords: string[] = []) {
  return keywords.reduce(
    (score, keyword) => score + (text.includes(normalize(keyword)) ? 2 : 0),
    0,
  );
}

function recommendProducts(answers: Answers) {
  const withinBudget = (product: Product) => {
    if (answers.orcamento === "Até R$ 300") return product.preco <= 300;
    if (answers.orcamento === "De R$ 301 a R$ 400") {
      return product.preco > 300 && product.preco <= 400;
    }
    if (answers.orcamento === "Acima de R$ 400") return product.preco > 400;
    return true;
  };

  const budgetPool = produtos.filter(withinBudget);
  const pool = budgetPool.length >= 3 ? budgetPool : produtos;

  return pool
    .map((product) => {
      const text = productText(product);
      let score = 0;

      if (answers.genero) {
        const gender = normalize(answers.genero);
        if (normalize(product.genero).includes(gender)) score += 7;
        if (normalize(product.genero).includes("unissex")) score += 3;
      }

      score += keywordScore(text, styleKeywords[answers.estilo ?? ""]);
      score += keywordScore(text, aromaKeywords[answers.aroma ?? ""]);

      if (answers.ocasiao) {
        const occasion = normalize(answers.ocasiao)
          .replace("festas e eventos", "evento")
          .replace("ocasioes especiais", "especial");
        if (text.includes(occasion)) score += 6;
        if (occasion.includes("encontro") && text.includes("noite")) score += 2;
      }

      const performance = (Number(product.fixacao) + Number(product.projecao)) / 2;
      if (answers.intensidade === "Suave" && performance <= 3) score += 5;
      if (answers.intensidade === "Equilibrada" && performance > 3 && performance < 4.5) score += 5;
      if (answers.intensidade === "Intensa" && performance >= 4) score += 5;

      if (withinBudget(product)) score += 8;
      return { product, score };
    })
    .sort((a, b) => b.score - a.score || a.product.preco - b.product.preco)
    .slice(0, 3)
    .map(({ product }) => product);
}

function buildReason(answers: Answers) {
  return `Combina com quem busca uma presença ${normalize(
    answers.estilo,
  )}, aromas ${normalize(answers.aroma)} e bom desempenho em ${normalize(
    answers.ocasiao,
  )}.`;
}

function buildWhatsAppLink(
  phone: string,
  answers: Answers,
  recommendations: Product[],
) {
  const message = `Olá! Fiz o quiz no site da Bold Parfum e gostaria de ajuda para escolher meu perfume.

Meu perfil:
• Para: ${answers.genero}
• Estilo: ${answers.estilo}
• Ocasião: ${answers.ocasiao}
• Intensidade: ${answers.intensidade}
• Aromas: ${answers.aroma}
• Orçamento: ${answers.orcamento}

Sugestões encontradas: ${recommendations.map((item) => item.nome).join(", ")}.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
