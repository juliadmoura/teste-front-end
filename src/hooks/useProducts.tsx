// src/hooks/useProducts.ts
import { useEffect, useState } from "react";

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then(res => {
        if (!res.ok) throw new Error("Falha ao carregar produtos");
        return res.json();
      })
      .then(data => {
        setProducts(data.produtos || data);
      })
      .catch(err => setError(err.message));
  }, []);

  return { products, error };
}
