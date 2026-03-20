import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsDetails.module.css';

export default function ProductsDetails() { 

    const params = useParams();
    const id = params.id;
    const [product, setProduct] = useState();
    const [isLoading,  setIsLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState(0);

    console.log(id);

    const optimizedImages = (url, width, quality = 80) => {
       
        return url.replace(
            'ik.imagekit.io/irpk6rtbq/',
            `ik.imagekit.io/irpk6rtbq/tr:w-${width},q-${quality}/`
        );
    }

useEffect(() => { 

    const fetchProduct = async() =>{
        setIsLoading(true);

        try {
           const response = await fetch(`http://localhost:5000/api/products/${id}`)

           if(!response.ok){
            throw new Error('Failed to fetch product')
           }

           const data = await response.json();
           console.log(`Fetched Data from Express: ${data}`)
           setProduct(data);


        } catch(error){
            console.error('Supabase error:', error);

        } finally {
            setIsLoading(false);

        }

    };


    fetchProduct();
}, [id]);
    console.log(product)

   const secondaryImages = product?.images?.map((image, index) => {
    return (

    <>
        <div 
        className={styles.secondaryImageContainer} 
        onClick={() => setSelectedImage(index)}>
            <img 
            className={styles.secondaryImage} 
            src={optimizedImages(image, 150, 75)} 
            alt={product.name} />
        </div>
    </>
    )
   })


    return (
        <>
            <div className={styles.productDetailsContainer}>
                {product ? (
                    <>
                <div>
                   <img className={styles.productDetailsImageContainer} src={optimizedImages(product.images?.[selectedImage], 800, 85)} alt={product.name} />
                </div>

                    <div className={styles.secondaryImagesContainer}>
                        {secondaryImages}
                    </div>
                            <ProductCard productData={product} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
         
        </>
    )


    }
