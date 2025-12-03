import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ProductCard.module.css"
import { FinancingSection } from "../Financing/FinancingSection";

export default function ProductCard({ productData }) {

 
  const [moreInfoExpanded, setMoreInfoExpanded] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);


  const {name, Type, price, description} = productData;

  const toggleMoreInfo = () => {
    setMoreInfoExpanded(!moreInfoExpanded);
  };

  const handleAddToCart = async () => {

    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: productData.id }),
      });
     
      const data = await response.json();
      if(!response.ok){
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }


  }

  const mainspecs = productData.specs.map((spec, index) => {
    return (
      <p key={index} className={styles.specItem}>{spec}</p>
    )

  })

  const moreInfoSpecs = productData.secondarySpecs.map((spec, index) => {

    return(

        <p key={index} className={styles.specItem}>{spec}</p>

    )

  })


  return (
    <>    
    
    <div className={styles.productCard}>
      <div className={styles.fadingBorder}>
        <div className={styles.cardInner}>
          
          <div className={styles.productHeader}>
            <h1 className={styles.productTitle}>{name} {Type}</h1>
            <p className={styles.productPrice}>{price}</p>
          </div>
          
          <div className={styles.productDescription}>
            <p className={styles.descriptionText}>
              {productData.description}
            </p>
          </div>
          
          <div className={styles.specContainer}>
            <div className={styles.specList}>
              {mainspecs}
            </div>
          </div>
          
          <div className={styles.collapsibleSections}>
           
            <div className={styles.collapsibleSection}>
              <button className={styles.collapsibleButton} onClick={toggleMoreInfo}>
                <span>More Info</span>
                <ChevronDown  className={`${styles.chevronIcon} ${moreInfoExpanded ? styles.expanded : ''}`}/>
              </button>
              <div className={`${styles.collapsibleContent} ${moreInfoExpanded ? styles.expanded : ''}`}>
                <div className={styles.contentList}>
                  {moreInfoSpecs}
                </div>
              </div>
            </div>
            
            {/* <div className={styles.collapsibleSection}>
              <button 
                className={styles.collapsibleButton}
                onClick={toggleFeatures}>
                <span>Financing</span>
                <ChevronDown className={`${styles.chevronIcon} ${featuresExpanded ? styles.expanded : ''}`}/>
            
              </button>
              <div className={`${styles.collapsibleContent} ${featuresExpanded ? styles.expanded : ''}`}>
                <FinancingSection />
             
              </div>
            </div> */}
          </div>

          <div className={styles.addToCartButtonContainer}>
            <button 
            onClick={handleAddToCart}
            className={styles.addToCartButton} 
            
           >
           Add to Cart

            </button>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}
