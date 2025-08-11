import React from 'react'
import styles from './ComputerFixInfo.module.css'
import {motion} from 'framer-motion'




export const ComputerFixInfo = ({damage, setViewInfo}) => {



    return (

        <div className={styles.fixInfoContainer}>
            <div className={styles.computerFixInfoTitleContainer}>
                <p className={styles.computerFixInfoTitle}>Computer Fix Info</p>
            </div>

            <p
            onClick={() => setViewInfo(false)}
             className={styles.fixInfoTitle}>{damage.title}</p>
        </div>

    )

}
