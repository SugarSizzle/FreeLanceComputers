import React from 'react'
import styles from './FinancingSection.module.css'

export const FinancingSection = () => {


    return(

        <div className={styles.financingSectionContainer}>
            <div className={styles.financingSectionTextContainer}>
                
                <p className={styles.financingSectionSubText}>In Order To Give The Best Deal
                    We Will Contact You and Come To 
                    An Agreement On What Will Be the 
                    Best Payment Plan For You
                </p>
            </div>

            <div className={styles.financingInformationContainer}>
                <form className={styles.financingInformationForm}>

                    <div className={styles.financingInformationNameContainer}>
                        <input className={styles.financingInformationInput} type="text" placeholder='First Name'  />
                        <input className={styles.financingInformationInput} type="text" placeholder='Last Name'  />
                    </div>   

                    <div className={styles.financingInformationContactContainer}>

                        <input className={styles.financingInformationInput} type="text" placeholder='Email'  />
                        <input className={styles.financingInformationInput} type="text" placeholder='Phone Number'  />
                    </div>

                </form>
            </div>

            <div className={styles.financingFinancialContainer}>
                <h3 className={styles.financingFinancialText}>
                    We Cannot Guarantee The Pricing You Input Below, This is 
                    Merely A Way For Us To See Where You Would Like Your Plan 
                    To Be
                </h3>
                    

                <div className={styles.financingFinancialInputContainer}>
                    <form  className={styles.financingFinancialForm}>
                        <input className={styles.financingFinancialInput} type="text" placeholder='Desired Payment'  />
                        <input className={styles.financingFinancialInput} type="text" placeholder='Contract Length'  />
                    </form>
                </div>


            </div>



        </div>



    )


}