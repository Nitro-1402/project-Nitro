import React, { Component } from 'react'
import styles from '/styles/info.module.css'
import CustomImage from '@/ui/CustomImage'

function Information({name , date , bbRate , imdbRate  , votes}:{name:string,date:string,bbRate:number,imdbRate:number,votes?:number}){
    return (
        <div className={styles.movieInfo}>
            <h3 className={styles.movieName}>{name}</h3>
            <div className={styles.rankBox}>
                <CustomImage className={styles.BB} src="/info-page-image/bb_logo.png" style={{}} alt='bb'/>  
                <span className={styles.rank}>{bbRate}</span>
                <CustomImage className={styles.IMDB} src="/info-page-image/imdb_logo.png" style={{}} alt='imdb'/>
                <span className={styles.rank}>{imdbRate}</span>
            </div>
        </div>
    )
  }

export default Information