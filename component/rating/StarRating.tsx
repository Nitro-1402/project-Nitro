import React , {useState} from 'react'
import {FaLink, FaStar} from 'react-icons/fa'
import styles from '@/styles/info.module.css'
import { InfoApi } from '@/API/InfoApi';
import Info from '@/pages/movie/[id]';
import AuthStore from '@/pages/store/Auth';

const StarRating = ({id}:{id:number}) => {
  const user=AuthStore((state:any)=>state.user)
  const [star , setStar] = useState(null);
  const [hover , setHover] = useState(null);
  const addStar=async(id:any)=>{
    let res=await InfoApi.star({movie:id , profile:user.id})
    console.log(res)
  }
  const changeStar=async(id:any)=>{
    let res=await InfoApi.restar({movie:id})
    console.log(res)
  }
  
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
              onClick={() =>{ 
                InfoApi.restar({
                  id:id,
                  movie:id,
                  profile:user.id,
                  rating:ratingValue*20
                })
                setStar(ratingValue)
              }}
            //   if(star){
            //     changeStar()
            //     setStar(false)
            //   }else{
            //     addStar()
            //     setStar(true)
            //   }
            // }}
            />
            <FaStar
              className={styles.star} 
              color={ratingValue<= (hover || star) ? "orange" : "gray"} 
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