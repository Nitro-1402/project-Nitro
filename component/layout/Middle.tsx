import React from 'react'
import styles from '/styles/info.module.css'
import Information from '../information/Information'
import MiniInfo from '../miniInfo/MiniInfo'
import Summery from '../information/Summery'

const Middle = () => {
  return (
    <div className={styles.left}>
        <Information/>
        <MiniInfo/>
        <Summery/>
    </div>
  )
}

export default Middle