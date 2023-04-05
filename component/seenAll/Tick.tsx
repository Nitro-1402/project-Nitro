import React , {useState} from 'react'
import {FaCheck, FaStar, FaTicketAlt} from 'react-icons/fa'
import styles from '@/styles/info.module.css'

const Tick = () => {
  const [seen , setSeen] = useState(false);
  const [hover , setHover] = useState(false);

  return (
    <div>
      <label>
        <input 
          className={styles.input}
          type="radio"
          name="seen"
          onClick={() => seen ? setSeen(false): setSeen(true)}
        />
        <FaCheck
          className={styles.tick} 
          color={(hover || seen) ? "green" : "gray"} 
          size={100}
          onMouseEnter={()=> setHover(true)}
          onMouseLeave={()=> setHover(false)}
          />
      </label>
    </div>
  );
};

export default Tick