import React from 'react'
import styles from '/styles/info.module.css'
import Information from '../information/Information'
import MiniInfo from '../miniInfo/MiniInfo'
import Summery from '../information/Summery'

const Middle = (props:any) => {
  return (
    <div className={styles.left}>
        <Information {...props}/>
        <MiniInfo/>
        <Summery text={props.text}/>
    </div>
  )
}

export default Middle