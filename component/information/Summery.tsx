import React, { Component } from 'react'
import styles from '/styles/info.module.css'

function  Summery ({text}:{text:string})  {
    return (
      <div className={styles.summery}>{text}</div>
    )
}

export default Summery