import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./ProductCard.module.css"
import { supabase } from '../../lib/supabase';


export default function ProductCard({ productData }) {

 


  const [moreInfoExpanded, setMoreInfoExpanded] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);



  const {name, Type, price, description} = productData;

  const toggleMoreInfo = () => {
    setMoreInfoExpanded(!moreInfoExpanded);
  };

  const toggleFeatures = () => {
    setFeaturesExpanded(!featuresExpanded);
  };

  const mainspecs = productData.specs.map((spec, index) => {
    return (
      <p key={index} className={styles.specItem}>{spec}</p>
    )

  })

  const moreInfoSpecs = productData.more_info_specs.map((spec, index) => {

    return(

        <p key={index} className={styles.specItem}>{spec}</p>

    )

  })



  return (
    <div className={styles.productCard}>
      <div className={styles.fadingBorder}>
        <div className={`${styles.cardInner} ${styles.textFade}`}>
          {/* Product Header */}
          <div className={styles.productHeader}>
            <h1 className={styles.productTitle}>{name} {Type}</h1>
            <p className={styles.productPrice}>{price}</p>
          </div>
          
          {/* Product Description */}
          <div className={styles.productDescription}>
            <p className={styles.descriptionText}>
              {productData.description}
            </p>
          </div>
          
          {/* Product Specs */}
          <div className={styles.specContainer}>
            <div className={styles.specList}>
              {mainspecs}
            </div>
          </div>
          
          {/* Collapsible Sections */}
          <div className={styles.collapsibleSections}>
            {/* More Info Section */}
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
            
            {/* Features Section */}
            <div className={styles.collapsibleSection}>
              <button 
                className={styles.collapsibleButton}
                onClick={toggleFeatures}>
                <span>Financing</span>
                <ChevronDown className={`${styles.chevronIcon} ${featuresExpanded ? styles.expanded : ''}`}/>

              </button>
              <div className={`${styles.collapsibleContent} ${featuresExpanded ? styles.expanded : ''}`}>
                <div className={styles.contentList}>
                   
                </div>
              </div>
            </div>
          </div>
          
        
        
        </div>
      </div>
    </div>
  );
}
