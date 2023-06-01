import React from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'

const SeasonNum = ({seasonNumber}:{seasonNumber:string}) => {
  
  return (
    <div className={styles.numberBox}>
        <span className={styles.seasonNum}>{seasonNumber}</span>
    </div>
  )
}

export default SeasonNum