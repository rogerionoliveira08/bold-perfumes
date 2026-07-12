"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product } from "@/types/product";

export type FavoriteProduct = Pick<
  Product,
  | "id"
  | "slug"
  | "nome"
  | "marca"
  | "preco"
  | "imagem"
  | "categoria"
  | "selo"
  | "avaliacao"
  | "avaliacoes"
  | "inspiradoEm"
>;

type FavoritesContextType = {
  favoritos: FavoriteProduct[];
  totalFavoritos: number;
  estaFavoritado: (id: number) => boolean;
  adicionarFavorito: (produto: FavoriteProduct) => void;
  removerFavorito: (id: number) => void;
  alternarFavorito: (produto: FavoriteProduct) => void;
  limparFavoritos: () => void;
};

const FavoritesContext = createContext({} as FavoritesContextType);

export function FavoritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favoritos, setFavoritos] = useState<FavoriteProduct[]>([]);
  const [carregouFavoritos, setCarregouFavoritos] = useState(false);

  useEffect(() => {
    try {
      const favoritosSalvos = localStorage.getItem("boldparfum-favorites");

      if (favoritosSalvos) {
        const dados = JSON.parse(favoritosSalvos);

        if (Array.isArray(dados)) {
          setFavoritos(dados);
        }
      }
    } catch {
      localStorage.removeItem("boldparfum-favorites");
    } finally {
      setCarregouFavoritos(true);
    }
  }, []);

  useEffect(() => {
    if (!carregouFavoritos) {
      return;
    }

    localStorage.setItem(
      "boldparfum-favorites",
      JSON.stringify(favoritos),
    );
  }, [favoritos, carregouFavoritos]);

  const totalFavoritos = favoritos.length;

  function estaFavoritado(id: number) {
    return favoritos.some((produto) => produto.id === id);
  }

  function adicionarFavorito(produto: FavoriteProduct) {
    setFavoritos((favoritosAtuais) => {
      const produtoExiste = favoritosAtuais.some(
        (item) => item.id === produto.id,
      );

      if (produtoExiste) {
        return favoritosAtuais;
      }

      return [...favoritosAtuais, produto];
    });
  }

  function removerFavorito(id: number) {
    setFavoritos((favoritosAtuais) =>
      favoritosAtuais.filter((produto) => produto.id !== id),
    );
  }

  function alternarFavorito(produto: FavoriteProduct) {
    setFavoritos((favoritosAtuais) => {
      const produtoExiste = favoritosAtuais.some(
        (item) => item.id === produto.id,
      );

      if (produtoExiste) {
        return favoritosAtuais.filter(
          (item) => item.id !== produto.id,
        );
      }

      return [...favoritosAtuais, produto];
    });
  }

  function limparFavoritos() {
    setFavoritos([]);
  }

  const valorDoContexto = useMemo(
    () => ({
      favoritos,
      totalFavoritos,
      estaFavoritado,
      adicionarFavorito,
      removerFavorito,
      alternarFavorito,
      limparFavoritos,
    }),
    [favoritos, totalFavoritos],
  );

  return (
    <FavoritesContext.Provider value={valorDoContexto}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}