import React, { Component } from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'
import StarRating from '../rating/StarRating'
import HeartFavorite from '../favorite/HeartFavorite'
import Tick from '../seenAll/Tick'
import Bookmark from '../bookmark/Bookmark'


function Card({image,id,isLiked,isSeen,isBooked,rating}:{image:string,rating:number,id:number,isLiked:boolean,isSeen:boolean,isBooked:boolean}){
    return (
      <div className= {styles.right}>
        <CustomImage className= {styles.poster} src={image} style={{}} alt='poster'/>
        {/* <StarRating id={id} rating={rating}/> */}
        <div className= {styles.bullet}>
          <span className= {styles.seen}>
            <Tick id={id} status={isSeen}/>
          </span>
          <span className= {styles.bookmark}>
            <Bookmark id={id} status={isBooked}/>
          </span>
          <span className= {styles.favorite}>
            <HeartFavorite id={id} status={isLiked}/>
          </span>
        </div>
      </div>
    )
  }

export default Card