import React, { Component } from 'react'
import styles from '/styles/info.module.css'
import CustomImage from '@/ui/CustomImage'
import StarRating from '../rating/StarRating'

function Information({id,name,date,bbRate,imdbRate ,metaRate,rating}:{id:number,name:string,date:string,bbRate:number,imdbRate:number,metaRate:number,rating:number}){
    return (
        <div className={styles.movieInfo}>
            <div className={styles.ratName} style={{display:'flex', flexDirection:"row"}}>
                <h3 className={styles.movieName}>{name}</h3>
                {/* <StarRating  id={id} rating={rating}/> */}
            </div>
            <div className={styles.rankBox}>
                <CustomImage className={styles.BB} src="/info-page-image/bb_logo.png" style={{}} alt='bb'/>  
                <span className={styles.rank}>{bbRate}/100</span>
                <CustomImage className={styles.IMDB} src="/info-page-image/imdb_logo.png" style={{}} alt='imdb'/>
                <span className={styles.rank}>{imdbRate}/10</span>
                <CustomImage className={styles.meta} src="/info-page-image/meta_logo.png" style={{}} alt='meta'/>
                <span className={styles.rank}>{metaRate}/100</span>
            </div>
        </div>
    )
  }

export default Information