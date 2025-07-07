import React from 'react'


export const DataRecoveryMethods = () => {

        const dataRecoveryMethods =[
            'System Repair Tools',
            'File Restoration',
            'Hard Drive Recovery',
            'Data Backups'
        ]
      
        const mappedDataRecoveryMethods=dataRecoveryMethods.map((method, index)=>{
          return(
            <div  className={`individual-data-recovery-method-container `} key={index} >
              <h3 className='data-recovery-method-title'>{method}</h3>
            </div>
          )
        })
      


    return (
        <>
        <div className='data-recovery-methods-container'>
            <p>Recovery Methods</p>
            <h3>Using Modern Methods, We Can Recover Your Lost Data</h3>
            <p>
                Offering Professional Data Recovery Services, 
                We Are Confident That We Can Regain Your Precious Memories 
                or Your Confidential Information.
            </p>

            <p className="data-recovery-methods-information-header">Methods</p>
            <div className='data-recovery-methods-information-container'>
                
                <div className="data-recovery-methods-section-container">
                {mappedDataRecoveryMethods}
                </div>

                <div className="data-recovery-methods-information-text-container">
                    <h3 className="data-recovery-methods-information-text-header" >Header Here, will finish later</h3>
                        <p className="data-recovery-methods-information-text" >Text Here, will finish later. We can have methods here, and explain data recovery 
                            methods here.
                        </p>

                </div>

            </div>


        </div>
        
        
        
        </>

    )


}