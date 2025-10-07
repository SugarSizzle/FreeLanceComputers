import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Products.module.css';
import {motion} from 'framer-motion';


export const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  

  const [searchParams] =useSearchParams();
   
  const typeFilter = searchParams.get('type')?.split(',') || [];
  const conditionFilter = searchParams.get('condition')?.split(',') || [];
  const deviceFilter = searchParams.get('device');


  useEffect(() => {
    async function fetchProducts() {

      let query = supabase.from('products').select("*");

      if(typeFilter.length > 0) {
        query = query.in("type" , typeFilter);
      }

      if(conditionFilter.length > 0) {
        query = query.in('condition' , conditionFilter);
      }

      const {data ,error} = await query;

      if(error) {
        console.error("Supabase error:" , error);
        setError(error.message);
      } else{
        setProducts(data);
      }
    }

    fetchProducts();
  }, [searchParams]);






  const paginatedProducts = currentProducts.map((product) => {

    return (
  
      <Link to={`/products/${product.id}`}>
        <div 
          className={styles.individualProductContainer}
          key={product.id}>
          <img className={styles.individualProductImage} src={product.img_url} alt={product.name} />
          <div className={styles.individualProductInfoContainer}>
            <h3 className={styles.individualProductName}>{product.name}</h3>
            <p className={styles.individualProductPrice}>${product.price}</p>
          </div>
        </div>
      </Link>
   

    )

  })






  return (
    <div className={styles.productsContainer}>
      {error && <h2 style={{ color: 'red' }}>Error: {error}</h2>}

      {products.length === 0 && !error && <p>Loading products...</p>}

      {paginatedProducts}

      <div className={styles.paginationContainer}>
        <motion.button className={styles.paginationPrevButton}  
          initial={{scale:1}}
          transition={{duration:.2, ease:'easeInOut'}}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px 3px whitesmoke" }}
          whileTap={{scale:0.70}}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}>Previous
        </motion.button>

      

        <span className={styles.paginationPageNumber}>Page {currentPage}</span>

        <motion.button 
          initial={{scale:1}}
          transition={{duration:.2, ease:'easeInOut'}}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px 3px whitesmoke" }}
          whileTap={{scale:0.70}}
          className={styles.paginationNextButton}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(products.length / itemsPerPage)))}
          disabled={currentPage === Math.ceil(products.length / itemsPerPage)}>Next
        </motion.button>

      </div>


   
    </div>
  );
};