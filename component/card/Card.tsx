import React, { Component } from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'

export class Card extends Component {
    state = {
        poster:"/info-page-image/poker-face-poster.webp"
    }
  render() {
    return (
      <div className= {styles.leftPart}>
        <CustomImage className= {styles.poster} src={this.state.poster} style={{}} alt='poster'/>
            <div className= {styles.bullet}>
                <span className= {styles.rate}>
                    <CustomImage className= {styles.star} src="/info-page-image/star.png" style={{}} alt='rate'/>
                    <span className= {styles.logoText}>Rate it</span>
                </span>
                <span className= {styles.seen}>
                    <CustomImage className= {styles.tick} src="/info-page-image/tick.png" style={{}} alt='seen'/>
                    <span className= {styles.logoText}>Seen all</span>
                </span>
                <span className= {styles.favorite}>
                    <CustomImage className={styles.heart} src="/info-page-image/heart.png" style={{}} alt='favorite'/>
                    <span className= {styles.logoText}>Favorite</span>
                </span>
            </div>
      </div>
    )
  }
}

export default Card