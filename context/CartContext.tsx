"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/types/product";

type CartItem = Product & {
  quantidade: number;
};

type CartContextType = {
  carrinho: CartItem[];
  carrinhoAberto: boolean;
  abrirCarrinho: () => void;
  fecharCarrinho: () => void;
  adicionarAoCarrinho: (produto: Product) => void;
  removerDoCarrinho: (id: number) => void;
  limparCarrinho: () => void;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [carregouCarrinho, setCarregouCarrinho] = useState(false);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("boldparfam-cart");

    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }

    setCarregouCarrinho(true);
  }, []);

  useEffect(() => {
    if (carregouCarrinho) {
      localStorage.setItem("boldparfam-cart", JSON.stringify(carrinho));
    }
  }, [carrinho, carregouCarrinho]);

  function abrirCarrinho() {
    setCarrinhoAberto(true);
  }

  function fecharCarrinho() {
    setCarrinhoAberto(false);
  }

  function adicionarAoCarrinho(produto: Product) {
    setCarrinho((atual) => {
      const produtoExiste = atual.find((item) => item.id === produto.id);

      if (produtoExiste) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...atual, { ...produto, quantidade: 1 }];
    });

    setCarrinhoAberto(true);
  }

  function removerDoCarrinho(id: number) {
    setCarrinho((atual) => atual.filter((item) => item.id !== id));
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  return (
    <CartContext.Provider
      value={{
        carrinho,
        carrinhoAberto,
        abrirCarrinho,
        fecharCarrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}