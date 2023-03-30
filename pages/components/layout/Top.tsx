import React from 'react'
import styles from '/styles/info.module.css'
import MiniInfo from '../miniInfo/MiniInfo'

const Top = () =>  {

  return (
    <div className={styles.pageTop}>
      <div className={styles.topContent}>
        <h1 className={styles.name}>Poker Face</h1>{/* props */}
        <MiniInfo/>
        <div className={styles.trackBox}>
          <button className={styles.track}>Track it</button>
        </div>
      </div>
    </div>
  )
}

export default Top