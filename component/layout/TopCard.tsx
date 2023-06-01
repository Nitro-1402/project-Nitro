import React from 'react'
import styles from '/styles/info.module.css'
import MiniInfo from '../miniInfo/MiniInfo'

const TopCard = ({title,tumbnail}:{title:string,tumbnail:string}) =>  {

  return (
    <div className={styles.pageTop} style={{backgroundImage:` url(${tumbnail})`}}>
      <div className={styles.topContent}>
        <h1 className={styles.name}>{title}</h1>
      </div>
    </div>
  )
}

export default TopCard