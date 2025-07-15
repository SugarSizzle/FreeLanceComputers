import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Navigation } from '../Layout/Navigation';
import { Footer } from '../Layout/Footer';
import { FaArrowCircleDown } from "react-icons/fa";
       

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


    // this will be code for the alt images that you can select, will uncomment when completely done
    // const mappedAltImages =product.img_url.map((image, index) => (
    //     <div key={index} className='product-details-alt-images-container'>
    //         <img src={image} alt={`Product Image ${index + 1}`} className='product-details-alt-images' />
    //     </div>
    // ));



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

                        <div className='product-details-information-container'> 
                            <h1 className='product-details-name'>{product.name} {product.Type} </h1>
                             
                            <p className='product-details-price'>${product.price}</p>
                        </div>


                        <div className='product-details-description-container'>
                            <p className='product-details-description'>{product.description}</p>
                            
                        </div>
                        
                        <div className="product-details-more-information-container">
                            <h3 className='product-details-more-information-title'>More Info</h3>
                            <FaArrowCircleDown className='product-details-more-information-down-arrow' />

                        </div>

                    

                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
         
            <Footer />
        </>
    )


    }
