"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaRedoAlt,
  FaSpinner,
  FaWhatsapp,
} from "react-icons/fa";
import { produtos } from "@/data/produtos";
import { supabase } from "@/lib/supabase";
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
    title: "Para quem Ã© o perfume?",
    description: "Escolha a opÃ§Ã£o que mais representa quem vai usar.",
    options: ["Masculino", "Feminino", "Unissex"],
  },
  {
    key: "estilo",
    eyebrow: "Sua presenÃ§a",
    title: "Como vocÃª quer ser percebido?",
    description: "Pense na sensaÃ§Ã£o que deseja transmitir ao chegar.",
    options: [
      "ElegÃ¢ncia e delicadeza",
      "PresenÃ§a marcante e sensual",
      "Frescor e discriÃ§Ã£o",
      "MistÃ©rio e sofisticaÃ§Ã£o",
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
      "OcasiÃµes especiais",
    ],
  },
  {
    key: "intensidade",
    eyebrow: "Performance",
    title: "Qual intensidade vocÃª prefere?",
    description: "Escolha o nÃ­vel de presenÃ§a que mais combina com vocÃª.",
    options: ["Suave", "Equilibrada", "Intensa"],
  },
  {
    key: "aroma",
    eyebrow: "PreferÃªncia olfativa",
    title: "Quais aromas mais atraem vocÃª?",
    description: "NÃ£o precisa conhecer perfumaria: escolha pela sensaÃ§Ã£o.",
    options: [
      "Frescos e cÃ­tricos",
      "Doces e cremosos",
      "Florais",
      "Amadeirados",
      "Especiados e orientais",
    ],
  },
  {
    key: "orcamento",
    eyebrow: "Investimento",
    title: "Qual faixa de preÃ§o prefere?",
    description: "Usaremos esse valor para deixar as sugestÃµes mais Ãºteis.",
    options: ["AtÃ© R$ 300", "De R$ 301 a R$ 400", "Acima de R$ 400", "Todas"],
  },
];

const styleKeywords: Record<string, string[]> = {
  "ElegÃ¢ncia e delicadeza": ["floral", "rosa", "almÃ­scar", "baunilha", "elegante", "delicad", "atalcad"],
  "PresenÃ§a marcante e sensual": ["oud", "Ã¢mbar", "ambar", "couro", "tabaco", "gourmand", "intens", "sensual", "sedutor"],
  "Frescor e discriÃ§Ã£o": ["cÃ­tric", "citric", "aquÃ¡tic", "aquatic", "fresc", "bergamota", "lavanda", "aromÃ¡tic"],
  "MistÃ©rio e sofisticaÃ§Ã£o": ["oriental", "amadeir", "incenso", "aÃ§afrÃ£o", "acafrao", "resina", "patchouli", "sofistic"],
};

const aromaKeywords: Record<string, string[]> = {
  "Frescos e cÃ­tricos": ["cÃ­tric", "citric", "bergamota", "limÃ£o", "limao", "aquÃ¡tic", "aquatic", "fresc"],
  "Doces e cremosos": ["baunilha", "caramelo", "mel", "gourmand", "doce", "cremos", "pralinÃª", "praline"],
  Florais: ["floral", "rosa", "jasmim", "flor", "tuberosa", "Ã­ris", "iris"],
  Amadeirados: ["amadeir", "cedro", "sÃ¢ndalo", "sandalo", "vetiver", "patchouli"],
  "Especiados e orientais": ["oriental", "especiad", "canela", "pimenta", "aÃ§afrÃ£o", "acafrao", "oud", "Ã¢mbar", "ambar"],
};

const attendants = [
  { name: "RogÃ©rio", phone: "5522998771598" },
  { name: "ThainÃ¡", phone: "5522992365387" },
];

export default function PerfumeQuiz() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [finished, setFinished] = useState(false);
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviandoLead, setEnviandoLead] = useState(false);
  const [erroLead, setErroLead] = useState("");
  const [autorizouContato, setAutorizouContato] = useState(false);
  const [autorizouMarketing, setAutorizouMarketing] = useState(false);
  const [atendenteEscolhido, setAtendenteEscolhido] = useState("RogÃ©rio");
  const [produtoAberto, setProdutoAberto] = useState<string | null>(null);
  const [formularioDispensado, setFormularioDispensado] = useState(false);

  useEffect(() => {
    setProdutoAberto(
      sessionStorage.getItem("boldparfum-quiz-produto-aberto"),
    );
  }, []);

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
    setPrimeiroNome("");
    setWhatsapp("");
    setErroLead("");
    setAutorizouContato(false);
    setAutorizouMarketing(false);
    setAtendenteEscolhido("RogÃ©rio");
    setProdutoAberto(null);
    setFormularioDispensado(false);
    sessionStorage.removeItem("boldparfum-quiz-produto-aberto");
  }

  function formatarWhatsapp(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return digits;
    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  async function salvarResultado() {
    const attendant =
      attendants.find((item) => item.name === atendenteEscolhido) ??
      attendants[0];
    const nomeLimpo = primeiroNome.trim().split(/\s+/)[0] ?? "";
    const whatsappNumeros = whatsapp.replace(/\D/g, "");

    setErroLead("");

    if (nomeLimpo.length < 2) {
      setErroLead("Digite seu primeiro nome.");
      return;
    }

    if (whatsappNumeros.length < 10 || whatsappNumeros.length > 11) {
      setErroLead("Digite um WhatsApp vÃ¡lido com DDD.");
      return;
    }

    if (!autorizouContato) {
      setErroLead(
        "Autorize o contato pelo WhatsApp para receber suas recomendaÃ§Ãµes.",
      );
      return;
    }

    const whatsappWindow = window.open("about:blank", "_blank");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }

    setEnviandoLead(true);

    const recomendacoes = recommendations.map((product, index) => ({
      posicao: index + 1,
      id: product.id,
      slug: product.slug,
      nome: product.nome,
      marca: product.marca,
      preco: product.preco,
    }));

    const { error } = await supabase.from("leads_quiz").insert({
      primeiro_nome: nomeLimpo,
      whatsapp: whatsappNumeros,
      respostas: answers,
      recomendacoes,
      atendente: attendant.name,
      origem: "descubra-seu-perfume",
      campanha:
        searchParams.get("campanha") ?? searchParams.get("utm_campaign"),
      utm_source: searchParams.get("utm_source"),
      utm_medium: searchParams.get("utm_medium"),
      utm_campaign: searchParams.get("utm_campaign"),
      utm_content: searchParams.get("utm_content"),
      utm_term: searchParams.get("utm_term"),
      produto_aberto: produtoAberto,
      status_comercial: "novo",
      autorizou_contato: autorizouContato,
      autorizou_marketing: autorizouMarketing,
    });

    setEnviandoLead(false);

    if (error) {
      whatsappWindow?.close();
      console.error("Erro ao salvar resultado do quiz:", error);
      setErroLead(
        "NÃ£o foi possÃ­vel salvar seu resultado agora. Tente novamente em instantes.",
      );
      return;
    }

    const whatsappLink = buildWhatsAppLink(
      attendant.phone,
      answers,
      recommendations,
      nomeLimpo,
      whatsappNumeros,
    );

    if (whatsappWindow) {
      whatsappWindow.location.href = whatsappLink;
    } else {
      window.location.href = whatsappLink;
    }
  }

  if (finished) {
    return (
      <section className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
        <div className="border-b border-zinc-200 bg-zinc-950 p-6 text-white sm:p-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-400">
            Sua seleÃ§Ã£o personalizada
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            Encontramos fragrÃ¢ncias para o seu perfil
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Compare as sugestÃµes e abra o perfume que mais chamou sua atenÃ§Ã£o.
          </p>
        </div>

        <div className="grid gap-4 p-5 sm:p-7 xl:grid-cols-3">
          {recommendations.map((product, index) => (
            <ResultCard
              key={product.id}
              product={product}
              position={index + 1}
              reason={buildReason(answers, product)}
            />
          ))}
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-5 sm:p-7">
          {formularioDispensado ? (
            <div className="text-center">
              <p className="text-sm text-zinc-600">
                Tudo bem. Suas trÃªs recomendaÃ§Ãµes continuam disponÃ­veis acima.
              </p>
              <button
                type="button"
                onClick={() => setFormularioDispensado(false)}
                className="mt-3 text-sm font-black text-zinc-950 underline underline-offset-4"
              >
                Quero salvar minhas recomendaÃ§Ãµes
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-zinc-500">
                Quer salvar suas recomendaÃ§Ãµes?
              </p>
              <h3 className="mt-2 text-xl font-black text-zinc-950 sm:text-2xl">
                Receba seu resultado e ajuda para escolher
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
                Informe seu nome e WhatsApp. A equipe da Bold pode ajudar a
                comparar as sugestÃµes, confirmar disponibilidade e orientar a
                compra.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-zinc-700">
                    Primeiro nome
                  </span>
                  <input
                    type="text"
                    value={primeiroNome}
                    onChange={(event) => setPrimeiroNome(event.target.value)}
                    autoComplete="given-name"
                    maxLength={40}
                    placeholder="Como podemos chamar vocÃª?"
                    className="mt-2 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-2 focus:ring-zinc-950/10"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-zinc-700">
                    WhatsApp com DDD
                  </span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={whatsapp}
                    onChange={(event) =>
                      setWhatsapp(formatarWhatsapp(event.target.value))
                    }
                    autoComplete="tel"
                    maxLength={15}
                    placeholder="(22) 99999-9999"
                    className="mt-2 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-2 focus:ring-zinc-950/10"
                  />
                </label>
              </div>

              <div className="mt-5 space-y-3">
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-zinc-700">
                  <input
                    type="checkbox"
                    checked={autorizouContato}
                    onChange={(event) =>
                      setAutorizouContato(event.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 accent-black"
                  />
                  <span>
                    Autorizo a Bold Parfum a entrar em contato pelo WhatsApp
                    sobre minhas recomendaÃ§Ãµes.
                  </span>
                </label>

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-zinc-700">
                  <input
                    type="checkbox"
                    checked={autorizouMarketing}
                    onChange={(event) =>
                      setAutorizouMarketing(event.target.checked)
                    }
                    className="mt-0.5 h-4 w-4 accent-black"
                  />
                  <span>
                    Quero receber novidades, conteÃºdos e promoÃ§Ãµes futuras da
                    Bold Parfum pelo WhatsApp. <strong>(Opcional)</strong>
                  </span>
                </label>
              </div>

              <fieldset className="mt-5">
                <legend className="text-xs font-black uppercase tracking-[0.12em] text-zinc-700">
                  Escolha o atendimento
                </legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {attendants.map((attendant) => (
                    <label
                      key={attendant.name}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition ${
                        atendenteEscolhido === attendant.name
                          ? "border-zinc-950 bg-zinc-950 text-white"
                          : "border-zinc-300 bg-white text-zinc-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name="atendente-quiz"
                        value={attendant.name}
                        checked={atendenteEscolhido === attendant.name}
                        onChange={() => setAtendenteEscolhido(attendant.name)}
                        className="accent-black"
                      />
                      Falar com {attendant.name}
                    </label>
                  ))}
                </div>
              </fieldset>

              {erroLead ? (
                <p role="alert" className="mt-3 text-sm font-bold text-red-600">
                  {erroLead}
                </p>
              ) : null}

              <button
                type="button"
                onClick={salvarResultado}
                disabled={enviandoLead}
                className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-[#20ba5a] disabled:cursor-wait disabled:opacity-70"
              >
                {enviandoLead ? (
                  <FaSpinner className="animate-spin" size={17} />
                ) : (
                  <FaWhatsapp size={18} />
                )}
                Receber minhas recomendaÃ§Ãµes no WhatsApp
              </button>

              <div className="mt-4 flex flex-col items-center gap-3 text-center">
                <button
                  type="button"
                  onClick={() => setFormularioDispensado(true)}
                  className="text-sm font-bold text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                >
                  Continuar sem informar meus dados
                </button>
                <Link
                  href="/politica-de-privacidade"
                  className="text-xs font-bold text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
                >
                  Abrir PolÃ­tica de Privacidade
                </Link>
              </div>
            </>
          )}

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
            {step === questions.length - 1 ? "Ver minhas sugestÃµes" : "Continuar"}
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
          SugestÃ£o {position}
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
          onClick={() =>
            sessionStorage.setItem(
              "boldparfum-quiz-produto-aberto",
              product.slug,
            )
          }
          className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-3 text-sm font-black text-white transition hover:bg-zinc-800"
        >
          Conhecer fragrÃ¢ncia
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

function matchesBudget(product: Product, budget?: string) {
  if (budget === "AtÃ© R$ 300") return product.preco <= 300;
  if (budget === "De R$ 301 a R$ 400") {
    return product.preco > 300 && product.preco <= 400;
  }
  if (budget === "Acima de R$ 400") return product.preco > 400;
  return true;
}

function matchesGender(product: Product, gender?: string) {
  if (!gender) return true;

  const productGender = normalize(product.genero);
  const selectedGender = normalize(gender);

  return (
    productGender.includes(selectedGender) ||
    productGender.includes("unissex")
  );
}

function occasionKeywords(occasion?: string) {
  switch (occasion) {
    case "Trabalho":
      return ["trabalho", "dia a dia", "escritorio"];
    case "Dia a dia":
      return ["dia a dia", "trabalho", "diurno"];
    case "Encontros":
      return ["encontro", "jantar", "noite"];
    case "Festas e eventos":
      return ["festa", "evento", "balada"];
    case "OcasiÃµes especiais":
      return ["especial", "evento", "jantar"];
    default:
      return [];
  }
}

function matchesOccasion(product: Product, occasion?: string) {
  const keywords = occasionKeywords(occasion);
  if (!keywords.length) return true;

  const occasions = normalize((product.ocasioes ?? []).join(" "));
  return keywords.some((keyword) => occasions.includes(normalize(keyword)));
}

function recommendProducts(answers: Answers) {
  const genderPool = produtos.filter((product) =>
    matchesGender(product, answers.genero),
  );
  const budgetAndGenderPool = genderPool.filter((product) =>
    matchesBudget(product, answers.orcamento),
  );
  const primaryPool = budgetAndGenderPool.filter((product) =>
    matchesOccasion(product, answers.ocasiao),
  );

  const pool =
    primaryPool.length >= 3
      ? primaryPool
      : budgetAndGenderPool.length >= 3
        ? budgetAndGenderPool
        : genderPool.length >= 3
          ? genderPool
          : produtos;

  return pool
    .map((product) => {
      const text = productText(product);
      let score = 0;

      if (answers.genero) {
        const productGender = normalize(product.genero);
        const selectedGender = normalize(answers.genero);

        if (productGender.includes(selectedGender)) score += 40;
        else if (productGender.includes("unissex")) score += 24;
        else score -= 60;
      }

      score += keywordScore(text, styleKeywords[answers.estilo ?? ""]) * 2;
      score += keywordScore(text, aromaKeywords[answers.aroma ?? ""]) * 2;

      if (matchesOccasion(product, answers.ocasiao)) score += 32;
      else score -= answers.ocasiao === "Trabalho" ? 32 : 20;

      const performance = (Number(product.fixacao) + Number(product.projecao)) / 2;
      if (answers.intensidade === "Suave" && performance <= 3) score += 10;
      if (answers.intensidade === "Equilibrada" && performance > 3 && performance < 4.5) score += 10;
      if (answers.intensidade === "Intensa" && performance >= 4) score += 10;

      if (matchesBudget(product, answers.orcamento)) score += 35;
      else score -= 35;
      return { product, score };
    })
    .sort((a, b) => b.score - a.score || a.product.preco - b.product.preco)
    .slice(0, 3)
    .map(({ product }) => product);
}

function buildReason(answers: Answers, product: Product) {
  const alternatives: string[] = [];

  if (!matchesGender(product, answers.genero)) {
    alternatives.push(`Ã© uma alternativa de gÃªnero ${product.genero}`);
  }

  if (!matchesOccasion(product, answers.ocasiao)) {
    const bestOccasion = product.ocasioes?.[0];
    alternatives.push(
      bestOccasion
        ? `funciona melhor em ${bestOccasion.toLowerCase()} do que em ${answers.ocasiao?.toLowerCase()}`
        : `nÃ£o tem ${answers.ocasiao?.toLowerCase()} como ocasiÃ£o principal`,
    );
  }

  if (!matchesBudget(product, answers.orcamento)) {
    alternatives.push("fica fora da faixa de orÃ§amento escolhida");
  }

  if (alternatives.length) {
    return `Alternativa ao perfil principal: ${alternatives.join(
      "; ",
    )}. Foi incluÃ­da pela proximidade com sua preferÃªncia por ${answers.estilo?.toLowerCase()} e aromas ${answers.aroma?.toLowerCase()}.`;
  }

  return `Boa correspondÃªncia para ${answers.genero?.toLowerCase()}, com foco em ${answers.ocasiao?.toLowerCase()}, dentro do orÃ§amento escolhido e alinhada Ã  preferÃªncia por ${answers.estilo?.toLowerCase()} e aromas ${answers.aroma?.toLowerCase()}.`;
}

function buildWhatsAppLink(
  phone: string,
  answers: Answers,
  recommendations: Product[],
  primeiroNome: string,
  whatsapp: string,
) {
  const message = `OlÃ¡! Fiz o quiz no site da Bold Parfum e gostaria de ajuda para escolher meu perfume.

Nome: ${primeiroNome}
Meu WhatsApp: ${whatsapp}

Meu perfil:
â€¢ Para: ${answers.genero}
â€¢ Estilo: ${answers.estilo}
â€¢ OcasiÃ£o: ${answers.ocasiao}
â€¢ Intensidade: ${answers.intensidade}
â€¢ Aromas: ${answers.aroma}
â€¢ OrÃ§amento: ${answers.orcamento}

SugestÃµes encontradas: ${recommendations.map((item) => item.nome).join(", ")}.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
