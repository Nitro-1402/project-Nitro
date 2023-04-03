import React, { Component } from 'react'
import styles from '/styles/info.module.css'
import CustomImage from '@/ui/CustomImage'

export class Information extends Component {
    state = {
        name: 'پوکر فیس',
        date: '(2023-2023)',
        bbRate: '78/100',
        imdbRate: '8/10',
        votes: '18.8K',
    }
  render() {
    const {name , date  , bbRate , imdbRate  , votes} = this.state;
    return (
        <div className={styles.movieInfo}>
            <h3 className={styles.movieName}>{name} {date}</h3>
            <div className={styles.rankBox}>
                <CustomImage className={styles.BB} src="/info-page-image/bb_logo.png" style={{}} alt='bb'/>  
                <span className={styles.rank}>{bbRate}</span>
                <CustomImage className={styles.IMDB} src="/info-page-image/imdb_logo.png" style={{}} alt='imdb'/>
                <span className={styles.rank}>{imdbRate}</span>
                <span className={styles.rank}>{votes} رأی</span>
            </div>
        </div>
    )
  }
}

export default Information