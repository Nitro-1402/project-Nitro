import React from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/biography.module.css'
import Header from '../header'
import Footer from '../Footer'

export default function ActorInfo ({image='/info-page-image/natashaB.jpg',name='ناتاشا',birthday='دوم اردیبهشت',bio='بازیگر'}:{image?:string,name?:string,birthday?:string,bio?:string}){
  return(
      <div className={styles.main}>
        <div className={styles.actorName}>{name}</div>
        <div className={styles.actorInfo}>
          <div className={styles.frame}>
            <CustomImage className={styles.actorPic} src={image?image:''}style={{}} alt={name}/>
          </div>
          <div className={styles.infoCard} style={{display:'flex', flexDirection:'column'}}>
            <div className={styles.info} >اسم: {name}</div>
            <div className={styles.info} >تاریخ تولد: {birthday}</div>
            <div className={styles.info} >زندگی نامه: {bio}</div>
            <div className={styles.btn}><a className={styles.imdb} href="https://www.imdb.com/name/nm0005169/">پرفایل در IMDB</a></div>
          </div>
        </div>
      </div>
  )
}

//connect to imdb page

