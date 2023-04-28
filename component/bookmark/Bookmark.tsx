import React , {useState} from 'react'
import {FaBookmark} from 'react-icons/fa'
import styles from '@/styles/info.module.css'

const Tick = () => {
  const [bookmark , setBookmark] = useState(false);
  const [hover , setHover] = useState(false);

  return (
    <div>
      <label>
        <input 
          className={styles.input}
          type="radio"
          name="bookmark"
          onClick={() => bookmark ? setBookmark(false): setBookmark(true)}
        />
        <FaBookmark
          className={styles.trackIt} 
          color={(hover || bookmark) ? "orange" : "gray"} 
          size={100}
          onMouseEnter={()=> setHover(true)}
          onMouseLeave={()=> setHover(false)}
          />
      </label>
    </div>
  );
};

export default Tick