import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Navigation } from '../Layout/Navigation';
import { Footer } from '../Layout/Footer';
import { FaArrowCircleDown } from "react-icons/fa";
import ProductCard from './ProductCard';

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
            <div className='product-details-container'>
                {product ? (
                    <>

                        <div className='product-details-image-container'>   
                            <div
                                className='product-details-image'
                                style={{
                                    backgroundImage: `url(${product.img_url[0]})`,
                                }}
                            />
                            
                        </div> 
                        {/* <div>

                                this is where the alt images will go
                        </div> */}

                        {/* <div className='product-details-information-container'> 
                            <h1 className='product-details-name'>{product.name} {product.Type} </h1>
                             
                            <p className='product-details-price'>${product.price}</p>
                        </div> */}


                        {/* <div className='product-details-description-container'>
                            <p className='product-details-description'>{product.description}</p>
                        </div>

                        <div    className='product-details-specs-container'>
                            
                        <p className='product-details-specs-items'>Specs</p>
                        <p className='product-details-specs-items'>Go </p>
                        <p className='product-details-specs-items'>Here</p>
                        <p className='product-details-specs-items'>For </p>
                        <p className='product-details-specs-items'>Now</p>

                        </div> */}
                        
                      

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
