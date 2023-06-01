import React, { Component } from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'
import StarRating from '../rating/StarRating'
import HeartFavorite from '../favorite/HeartFavorite'
import Tick from '../seenAll/Tick'
import Bookmark from '../bookmark/Bookmark'


function Card({image,id}:{image:string,id:number}){
    return (
      <div className= {styles.right}>
        <CustomImage className= {styles.poster} src={image} style={{}} alt='poster'/>
        <StarRating/>
        <div className= {styles.bullet}>
          <span className= {styles.seen}>
            <Tick id={id}/>
          </span>
          <span className= {styles.bookmark}>
            <Bookmark id={id}/>
          </span>
          <span className= {styles.favorite}>
            <HeartFavorite id={id}/>
          </span>
        </div>
      </div>
    )
  }

export default Card