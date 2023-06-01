import React from 'react'
import styles from '/styles/info.module.css'
import MiniInfo from '../miniInfo/MiniInfo'
// import Bookmark from '../bookmark/Bookmark'

const Top = (props:any) =>  {

  return (
    <div className={styles.pageTop} style={{backgroundImage:` url(${props.tumbnail})`}}>
      <div className={styles.topContent}>
        <h1 className={styles.name}>{props.title}</h1>
        <div className={styles.miniInfoF}>
          <MiniInfo {...props}/>
        </div>
        <div className={styles.trackBox}>
          {/* <Bookmark {...props}/> */}
          {/* <button className={styles.track}>افزودن</button> */}
        </div>
      </div>
    </div>
  )
}

export default Top