import { useEffect, useState } from 'react';

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p: any) => ({
          id: p.id,
          title: p.productName,
          description: p.descriptionShort,
          image: p.photo,
          price: p.price,
        }));
        setProducts(formatted);
      })
      .catch((err) => console.error(err));
  }, []);

  return { products, Error };
}
