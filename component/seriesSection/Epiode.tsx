import React from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'

const Episode = ({photo , title , episode_number}:{photo:string , title:string , episode_number:string}) => {
  return (
      <div className={styles.episodeBox}>
        <img className={styles.episodeImage} src={photo} alt={title} />
        <div className={styles.episodeContent}>
            <span>{title}</span>
            <span> - </span>
            <span>{episode_number} قسمت</span>
        </div>
        {/* <button className={styles.add}> افزودن </button> */}
      </div>
   
  )
}

export default Episode