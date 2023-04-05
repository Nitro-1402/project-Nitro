import React , {useState} from 'react'
import {FaHeart, FaStar} from 'react-icons/fa'
import styles from '@/styles/info.module.css'

const HeartFavorite = () => {
    const [rating , setRating] = useState(false);
    const [hover , setHover] = useState(false);
    return (
        <div>
        <label>
        <input 
            className={styles.input}
            type="radio"
            name="rating"
            onClick={() => rating ? setRating(false): setRating(true)}
        />
        <FaHeart
            className={styles.heart} 
            color={(hover || rating) ? "red" : "gray"} 
            size={100}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            />
        </label>
        
        </div>
    );
  };
export default HeartFavorite


