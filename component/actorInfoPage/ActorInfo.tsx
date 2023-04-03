import React from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/biography.module.css'

export default function ActorInfo ({image='/info-page-image/natashaB.jpg',name='ناتاشا',birthday='دوم اردیبهشت',job='بازیگر'}:{image?:string,name?:string,birthday?:string,job?:string}){
  return(
      <div className={styles.main}>
        <div className={styles.actorName}>Natasha Lyonne</div>
        <div className={styles.actorInfo}>
          <div className={styles.frame}>\
            <CustomImage className={styles.actorPic} src={image?image:''}style={{}} alt={name}/>
          </div>
          <div className={styles.infoCard} style={{display:'flex', flexDirection:'column'}}>
            <div className={styles.info} >اسم: {name}</div>
            <div className={styles.info} >تاریخ تولد: {birthday}</div>
            <div className={styles.info} >حرفه: {job}</div>
            <div className={styles.btn}><a className={styles.imdb} href="/">پرفایل در IMDB</a></div>
          </div>
        </div>
        {/* <p style={{textAlign:'right',color:'black',direction:'rtl'}}>فیلم های {name}</p> */}
      </div>
  )
}