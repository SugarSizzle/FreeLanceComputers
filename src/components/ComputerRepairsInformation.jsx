import React from 'react'
import { VirusGetInTouch as GetInTouch  } from './VirusGetInTouch'


export const ComputerRepairsInformation = () => {


    return(
    <>
        <div className='computer-repairs-information-container'>
            <p className='computer-repairs-information-header'>Repairs</p>
            <h3 className='computer-repairs-information-title'>Efficient and Reliable</h3>
            <p className='computer-repairs-information-text'>
                Our expert repair services are designed to not only fix problems but actively
                enhance your system’s performance.With a focus on efficiency, transparency, 
                and lasting results, our technicians deliver repairs that restore 
                confidence in your tech — and keep your workflow moving without interruption.
            </p>

        </div>

        <GetInTouch/>
        </>

    )


}