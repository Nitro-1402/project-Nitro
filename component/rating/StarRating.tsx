import React , {useState} from 'react'
import {FaLink, FaStar} from 'react-icons/fa'
import styles from '@/styles/info.module.css'

const StarRating = () => {
  const [rating , setRating] = useState(null);
  const [hover , setHover] = useState(null);

  
  return (
    <div className={styles.rateBox}>
      {[...Array(5)].map((star , i) => {
        const ratingValue = i + 1;
        
        return(
          <label key={star}>
            <input 
              className={styles.input}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={styles.star} 
              color={ratingValue<= (hover || rating) ? "orange" : "gray"} 
              size={30}
              onMouseEnter={()=> setHover(ratingValue)}
              onMouseLeave={()=> setHover(null)}
              />
          </label>
        );
      })}
      
    </div>
  );
};

export default StarRating