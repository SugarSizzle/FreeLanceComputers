import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';
import styles from './Products.module.css';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  


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
    <div className={styles.productsContainer}>
      {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}

      {products.length === 0 && !error && <p>Loading products...</p>}

    
      {products.map((p) => (
        
        <Link to={`/products/${p.id}`}>
          <div className={styles.individualProductContainer} key={p.id}>
            <img className={styles.individualProductImage} src={p.img_url} alt={p.name} />
            <div className={styles.individualProductInfoContainer}>
              <h3 className={styles.individualProductName}>{p.name}</h3>
              <p className={styles.individualProductPrice}>${p.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};