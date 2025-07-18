import React from 'react'
import styles from './DataRecoveryMethods.module.css'

export const DataRecoveryMethods = () => {

        const dataRecoveryMethods =[
            'System Repair Tools',
            'File Restoration',
            'Hard Drive Recovery',
            'Data Backups'
        ]
      
        const mappedDataRecoveryMethods=dataRecoveryMethods.map((method, index)=>{
          return(
            <div  className={styles.dataRecoveryIndividualMethodContainer} key={index} >
              <h3 className={styles.dataRecoveryIndividualMethodTitle}>{method}</h3>
            </div>
          )
        })
      


    return (
        <>
        <div className={styles.dataRecoveryMethodsContainer}>
            <p className={styles.dataRecoveryMethodsHeader}>Recovery Methods</p>
            <h3 className={styles.dataRecoveryMethodsTitle}>Using Modern Methods, We Can Recover Your Lost Data</h3>
            <p className={styles.dataRecoveryMethodsText}>
                Offering Professional Data Recovery Services, 
                We Are Confident That We Can Regain Your Precious Memories 
                or Your Confidential Information.
            </p>

            <p className={styles.dataRecoveryMethodsInformationHeader}>Methods</p>
            <div className={styles.dataRecoveryMethodsInformationContainer}>
                
                <div className={styles.dataRecoveryMethodsSectionContainer}>
                {mappedDataRecoveryMethods}
                </div>

                <div className={styles.dataRecoveryMethodsInformationTextContainer}>
                    <h3 className={styles.dataRecoveryMethodsInformationTextHeader} >Header Here, will finish later</h3>
                        <p className={styles.dataRecoveryMethodsInformationText} >Text Here, will finish later. We can have methods here, and explain data recovery 
                            methods here. Maybe a fading out effect on the text here, to match the effect of the border
                        </p>

                </div>

            </div>


        </div>
        
        
        
        </>

    )


}