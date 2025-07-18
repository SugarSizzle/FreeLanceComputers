import React from 'react'
import { Link } from 'react-router-dom';
import styles from './HomePageStoreSection.module.css'


export const HomePageStoreSection = () => {




    return(
        <>
        <h3 className={styles.homePageStoreTitle}>Check out our store</h3>
          <div className={styles.homePageStoreContainer}>
            
            <h3 className={styles.homePageStorePreferenceText}>Tech Prefernce</h3>

            <div className={styles.homePageStorePreferenceContainer}>
                <button className={styles.homePageStorePreferenceButton}/>
                <h3 className={styles.homePageStorePreferenceText}>Laptop</h3>
            

             
                <button className={styles.homePageStorePreferenceButton}/>
                <h3  className={styles.homePageStorePreferenceText}>Desktop</h3>
             </div>

             
            <h3 className={styles.homePageStorePreferenceText}>New Or Used?</h3>
            <div className={styles.homePageStorePreferenceContainer}>

               <button className={styles.homePageStorePreferenceButton}/>
               <h3 className={styles.homePageStorePreferenceText}>New</h3>

                <button className={styles.homePageStorePreferenceButton}/>
                <h3 className={styles.homePageStorePreferenceText}>Used</h3>

            </div>

            <div className={styles.homePageSubmitButtonContainer}>

                <button className={styles.homePageSubmitButton}>Submit</button>
                <Link to="/products"><button className={styles.allSelectionsButton}>All Selections</button></Link>

            </div>


          </div>

        </>
    )
}
