import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Supabase error:", error);
        setError(error.message);
      } else {
        setProducts(data);
      }
    }

    fetchProducts();
  }, []);

  console.log(products); // Good for dev only; remove in production

  return (
    <div>
      {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}

      {products.length === 0 && !error && <p>Loading products...</p>}

      {products.map((p) => (
        <div key={p.id}>
          <img src={p.image_url} alt={p.name} width="200" />
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <strong>${p.price}</strong>
        </div>
      ))}
    </div>
  );
};