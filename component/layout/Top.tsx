import React from 'react'
import styles from '/styles/info.module.css'
import MiniInfo from '../miniInfo/MiniInfo'

const Top = ({title,tumbnail}:{title:string,tumbnail:string}) =>  {

  return (
    <div className={styles.pageTop} style={{backgroundImage:` url(${tumbnail})`}}>
      <div className={styles.topContent}>
        <h1 className={styles.name}>{title}</h1>{/* props */}
        <div className={styles.miniInfoF}>
          <MiniInfo/>
        </div>
        <div className={styles.trackBox}>
          <button className={styles.track}>افزودن</button>
        </div>
      </div>
    </div>
  )
}

export default Top