import React, { Component } from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'
import StarRating from '../rating/StarRating'
import HeartFavorite from '../favorite/HeartFavorite'
import Tick from '../seenAll/Tick'
import Bookmark from '../bookmark/Bookmark'


export class Card extends Component {
    state = {
        poster:"/info-page-image/poker-face-poster.webp"
    }
  render() {
    return (
      <div className= {styles.right}>
        <CustomImage className= {styles.poster} src={this.state.poster} style={{}} alt='poster'/>
        <StarRating/>
        <div className= {styles.bullet}>
          <span className= {styles.seen}>
            <Tick/>
          </span>
          <span className= {styles.bookmark}>
            <Bookmark/>
          </span>
          <span className= {styles.favorite}>
            <HeartFavorite/>
          </span>
        </div>
      </div>
    )
  }
}

export default Card