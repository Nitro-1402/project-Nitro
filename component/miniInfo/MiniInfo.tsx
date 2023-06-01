import React from 'react'
import styles from '/styles/info.module.css'

function MiniInfo({country , date , category_set}:{country:string , date:string , category_set:any}){

    return (
        <div className={styles.infoBox}>
            <span className={styles.info}> {date} </span>
            <span className={styles.info}> {country} </span>
            {
                category_set?.map((i:any)=>(
                    <span className={styles.info}> {i} </span>
                ))
            }
        </div>
    )
  }

export default MiniInfo