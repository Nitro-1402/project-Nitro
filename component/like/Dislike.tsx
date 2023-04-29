import React , {useState} from 'react'
import {FaThumbsDown} from 'react-icons/fa'
import styles from '@/styles/info.module.css'

const Dislike = () => {
    const [dislike , setDislike] = useState(null);
    const [hover , setHover] = useState(null);
    // const dislikeValue = 0;


  return (
    <div>
      <label>
        <input 
          className={styles.input}
          type="radio"
          name="dislike"
          onClick={() => dislike ? setDislike(false): setDislike(true)}
        />
        <FaThumbsDown
          className={styles.dislike} 
          color={(hover || dislike) ? "orange" : "white"} 
          size={100}
          onMouseEnter={()=> setHover(true)}
          onMouseLeave={()=> setHover(false)}
          />
          
      </label>
    </div>
  );
};

export default Dislike