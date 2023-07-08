import React from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/biography.module.css'
import Header from '../header'
import Footer from '../Footer'
import Link from 'next/link'

export default function ActorInfo ({imdb_link='https://www.imdb.com/name/nm1869101/',image='/info-page-image/natashaB.jpg',name='ناتاشا',birthday='دوم اردیبهشت',bio='بازیگر'}:{image?:string,name?:string,birthday?:string,bio?:string,imdb_link?:string}){
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
            <Link className={styles.btn}  href={imdb_link}>
              <div className={styles.imdb}>پرفایل در IMDB</div>
            </Link>
          </div>
        </div>
      </div>
  )
}

//connect to imdb page

