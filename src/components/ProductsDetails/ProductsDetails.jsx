import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Navigation } from '../../Layout/Navigation';
import { Footer } from '../../Layout/Footer';
import { FaArrowCircleDown } from "react-icons/fa";
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsDetails.module.css';

export default function ProductsDetails() { 

    const params = useParams();
    const id = params.id;
    const [product, setProduct] = useState();
    const [isLoading,  setIsLoading] = useState(true)

    console.log(id);


useEffect(() => { 

    const fetchProduct = async() =>{
        setIsLoading(true);

        try {
            const {data, error} = await supabase
            .from('products')
            .select('*')
            .eq('id', id);

            if( error) throw error;

            console.log(data);
            setProduct(data[0]);


        } catch(error){
            console.error('Supabase error:', error);

        } finally {
            setIsLoading(false);

        }

    };


    fetchProduct();
}, [id]);
    console.log(product)

   


    return (
        <>
            <Navigation />
            <div className={styles.productDetailsContainer}>
                {product ? (
                    <>

                        <div className={styles.productDetailsImageContainer}>   
                            <div
                                className={styles.productDetailsImage}
                                style={{
                                    backgroundImage: `url(${product.img_url})`,
                                }}
                            />
                            
                        </div> 
                       
                        
                      

                            <ProductCard productData={product} />
                          

                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
         
            <Footer />
        </>
    )


    }
