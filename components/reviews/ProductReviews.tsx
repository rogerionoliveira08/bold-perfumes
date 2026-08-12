 "use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { SyntheticEvent } from "react";
import {
  FaCheckCircle,
  FaRegStar,
  FaShieldAlt,
  FaSpinner,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";
import { supabase } from "@/lib/supabase";

type Avaliacao = {
  id: string;
  nome_cliente: string;
  nota: number;
  comentario: string;
  compra_verificada: boolean;
  criado_em: string;
};

type ProductReviewsProps = {
  produtoSlug: string;
  produtoNome: string;
};

export default function ProductReviews({
  produtoSlug,
  produtoNome,
}: ProductReviewsProps) {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [enviando, setEnviando] = useState(false);
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [nota, setNota] = useState(0);
  const [notaEmDestaque, setNotaEmDestaque] = useState(0);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const carregarAvaliacoes = useCallback(async () => {
    setCarregando(true);

    const { data, error } = await supabase
      .from("avaliacoes")
      .select(
        "id, nome_cliente, nota, comentario, compra_verificada, criado_em",
      )
      .eq("produto_slug", produtoSlug)
      .eq("aprovado", true)
      .order("criado_em", { ascending: false });

    if (error) {
      console.error("Erro ao carregar avaliações:", error);
      setErro("Não foi possível carregar as avaliações agora.");
      setCarregando(false);
      return;
    }

    setAvaliacoes((data ?? []) as Avaliacao[]);
    setCarregando(false);
  }, [produtoSlug]);

  useEffect(() => {
    carregarAvaliacoes();
  }, [carregarAvaliacoes]);

  const media = useMemo(() => {
    if (avaliacoes.length === 0) {
      return 0;
    }

    const total = avaliacoes.reduce(
      (soma, avaliacao) => soma + avaliacao.nota,
      0,
    );

    return total / avaliacoes.length;
  }, [avaliacoes]);

  const distribuicao = useMemo(() => {
    return [5, 4, 3, 2, 1].map((valor) => {
      const quantidade = avaliacoes.filter(
        (avaliacao) => avaliacao.nota === valor,
      ).length;

      const porcentagem =
        avaliacoes.length > 0
          ? (quantidade / avaliacoes.length) * 100
          : 0;

      return {
        valor,
        quantidade,
        porcentagem,
      };
    });
  }, [avaliacoes]);

  async function enviarAvaliacao(
  event: SyntheticEvent<HTMLFormElement>,
) {
    event.preventDefault();

    setErro("");
    setSucesso(false);

    const nomeLimpo = nome.trim();
    const comentarioLimpo = comentario.trim();

    if (nota < 1 || nota > 5) {
      setErro("Escolha uma nota de 1 a 5 estrelas.");
      return;
    }

    if (nomeLimpo.length < 2) {
      setErro("Digite seu nome.");
      return;
    }

    if (comentarioLimpo.length < 10) {
      setErro("Escreva um comentário com pelo menos 10 caracteres.");
      return;
    }

    if (comentarioLimpo.length > 800) {
      setErro("O comentário pode ter no máximo 800 caracteres.");
      return;
    }

    setEnviando(true);

    const { error } = await supabase.from("avaliacoes").insert({
      produto_slug: produtoSlug,
      produto_nome: produtoNome,
      nome_cliente: nomeLimpo,
      nota,
      comentario: comentarioLimpo,
    });

    setEnviando(false);

    if (error) {
      console.error("Erro ao enviar avaliação:", error);
      setErro(
        "Não foi possível enviar sua avaliação. Tente novamente em instantes.",
      );
      return;
    }

    setNome("");
    setComentario("");
    setNota(0);
    setNotaEmDestaque(0);
    setSucesso(true);
    await carregarAvaliacoes();
  }

  return (
    <section
      id="avaliacoes"
      className="scroll-mt-36 border-t border-zinc-900 pt-8 sm:pt-12"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-yellow-400">
          Experiências reais
        </p>

        <h2 className="text-2xl font-black text-white sm:text-3xl">
          Avaliações dos clientes
        </h2>

        <p className="max-w-3xl text-sm leading-6 text-zinc-400 sm:text-base">
          Veja a opinião de quem já conheceu esta fragrância ou compartilhe
          sua própria experiência.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
            {carregando ? (
              <div className="flex min-h-48 items-center justify-center">
                <FaSpinner
                  className="animate-spin text-yellow-400"
                  size={24}
                />
              </div>
            ) : avaliacoes.length > 0 ? (
              <>
                <div className="text-center">
                  <p className="text-5xl font-black text-white">
                    {media.toFixed(1)}
                  </p>

                  <div className="mt-3 flex justify-center gap-1">
                    <EstrelasSomenteLeitura nota={Math.round(media)} />
                  </div>

                  <p className="mt-2 text-xs text-zinc-500">
                    Com base em {avaliacoes.length}{" "}
                    {avaliacoes.length === 1
                      ? "avaliação real"
                      : "avaliações reais"}
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {distribuicao.map((item) => (
                    <div
                      key={item.valor}
                      className="grid grid-cols-[34px_1fr_25px] items-center gap-3"
                    >
                      <span className="flex items-center gap-1 text-xs text-zinc-400">
                        {item.valor}
                        <FaStar
                          size={10}
                          className="text-yellow-400"
                        />
                      </span>

                      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-yellow-400 transition-all"
                          style={{
                            width: `${item.porcentagem}%`,
                          }}
                        />
                      </div>

                      <span className="text-right text-xs text-zinc-500">
                        {item.quantidade}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex min-h-48 flex-col items-center justify-center text-center">
                <div className="flex gap-1">
                  <EstrelasSomenteLeitura nota={5} />
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  Experiências dos clientes
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
                  Os comentários enviados diretamente pelos clientes da
                  Bold Parfum aparecerão aqui conforme forem enviados.
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-3 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4">
            <FaShieldAlt
              className="mt-1 shrink-0 text-yellow-400"
              size={18}
            />

            <div>
              <p className="text-sm font-bold text-white">
                Experiências da comunidade
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-400">
                As avaliações são publicadas automaticamente. Conteúdos
                ofensivos, falsos ou que não tratem do produto poderão ser removidos.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={enviarAvaliacao}
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6"
        >
          <h3 className="text-xl font-black text-white">
            Avalie este perfume
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Conte como foi sua experiência com o {produtoNome}.
          </p>

          <fieldset className="mt-6">
            <legend className="text-sm font-bold text-zinc-200">
              Sua nota
            </legend>

            <div
              className="mt-3 flex gap-2"
              onMouseLeave={() => setNotaEmDestaque(0)}
            >
              {[1, 2, 3, 4, 5].map((valor) => {
                const ativa =
                  valor <= (notaEmDestaque || nota);

                return (
                  <button
                    key={valor}
                    type="button"
                    onClick={() => setNota(valor)}
                    onMouseEnter={() => setNotaEmDestaque(valor)}
                    aria-label={`${valor} ${
                      valor === 1 ? "estrela" : "estrelas"
                    }`}
                    className="text-2xl transition hover:scale-110"
                  >
                    {ativa ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaRegStar className="text-zinc-600" />
                    )}
                  </button>
                );
              })}
            </div>

            <p className="mt-2 min-h-5 text-xs text-zinc-500">
              {nota > 0 ? textoDaNota(nota) : "Selecione de 1 a 5 estrelas"}
            </p>
          </fieldset>

          <div className="mt-5">
            <label
              htmlFor="nome-avaliacao"
              className="text-sm font-bold text-zinc-200"
            >
              Seu nome
            </label>

            <input
              id="nome-avaliacao"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              maxLength={60}
              placeholder="Como seu nome deve aparecer"
              className="mt-2 w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
            />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <label
                htmlFor="comentario-avaliacao"
                className="text-sm font-bold text-zinc-200"
              >
                Sua experiência
              </label>

              <span className="text-[10px] text-zinc-600">
                {comentario.length}/800
              </span>
            </div>

            <textarea
              id="comentario-avaliacao"
              value={comentario}
              onChange={(event) =>
                setComentario(event.target.value)
              }
              rows={5}
              maxLength={800}
              placeholder="Fale sobre o aroma, fixação, projeção e em quais ocasiões você usou..."
              className="mt-2 w-full resize-none rounded-xl border border-zinc-700 bg-black px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
            />
          </div>

          {erro && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {erro}
            </div>
          )}

          {sucesso && (
            <div className="mt-5 flex gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-4">
              <FaCheckCircle
                className="mt-0.5 shrink-0 text-green-400"
                size={18}
              />

              <div>
                <p className="text-sm font-bold text-green-300">
                  Avaliação enviada!
                </p>

                <p className="mt-1 text-xs leading-5 text-green-200/70">
                  Obrigado por compartilhar sua experiência. Ela será
                  publicada após nossa análise.
                </p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-black text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {enviando ? (
              <>
                <FaSpinner className="animate-spin" />
                Enviando avaliação...
              </>
            ) : (
              "Enviar avaliação"
            )}
          </button>

          <p className="mt-3 text-center text-[10px] leading-4 text-zinc-600">
            Ao enviar, você confirma que o comentário representa sua
            experiência pessoal com a fragrância.
          </p>
        </form>
      </div>

      {!carregando && avaliacoes.length > 0 && (
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-black text-white">
            O que os clientes estão dizendo
          </h3>

          <div className="grid gap-4 lg:grid-cols-2">
            {avaliacoes.map((avaliacao) => (
              <article
                key={avaliacao.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <FaUserCircle
                      className="shrink-0 text-zinc-600"
                      size={34}
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white">
                        {avaliacao.nome_cliente}
                      </p>

                      <p className="mt-1 text-[10px] text-zinc-600">
                        {formatarData(avaliacao.criado_em)}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-1">
                    <EstrelasSomenteLeitura
                      nota={avaliacao.nota}
                      tamanho={12}
                    />
                  </div>
                </div>

                {avaliacao.compra_verificada && (
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-400">
                    <FaCheckCircle />
                    Compra confirmada
                  </div>
                )}

                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-zinc-400">
                  {avaliacao.comentario}
                </p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function EstrelasSomenteLeitura({
  nota,
  tamanho = 16,
}: {
  nota: number;
  tamanho?: number;
}) {
  return (
    <>
      {[1, 2, 3, 4, 5].map((valor) =>
        valor <= nota ? (
          <FaStar
            key={valor}
            size={tamanho}
            className="text-yellow-400"
          />
        ) : (
          <FaRegStar
            key={valor}
            size={tamanho}
            className="text-zinc-700"
          />
        ),
      )}
    </>
  );
}

function textoDaNota(nota: number) {
  const textos: Record<number, string> = {
    1: "Não gostei",
    2: "Poderia ser melhor",
    3: "Gostei",
    4: "Muito bom",
    5: "Excelente",
  };

  return textos[nota];
}

function formatarData(data: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(data));
}