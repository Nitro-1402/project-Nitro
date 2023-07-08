import React from 'react'
import styles from '/styles/info.module.css'
import MiniInfo from '../miniInfo/MiniInfo'

const TopCard = ({title,poster}:{title:string,poster:string}) =>  {

  return (
    <div className={styles.pageTop} style={{backgroundImage:` url(${poster})`}}>
      <div className={styles.topContent}>
        <h1 className={styles.name}>{title}</h1>
      </div>
    </div>
  )
}

export default TopCard