import React , {useState} from 'react'
import {FaThumbsUp} from 'react-icons/fa'
import styles from '@/styles/info.module.css'

const Like = () => {
    const [like , setLike] = useState(null);
    const [hover , setHover] = useState(null);


  return (
    <div>
      <label>
        <input 
          className={styles.input}
          type="radio"
          name="like"
          onClick={() => like ? setLike(false): setLike(true)}
        />
        <FaThumbsUp
          className={styles.like} 
          color={(hover || like) ? "orange" : "white"} 
          size={100}
          onMouseEnter={()=> setHover(true)}
          onMouseLeave={()=> setHover(false)}
          />
      </label>
    </div>
  );
};

export default Like