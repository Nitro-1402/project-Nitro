import React , {useRef, useState} from 'react'
import {FaLink, FaStar} from 'react-icons/fa'
import styles from '@/styles/info.module.css'
import { InfoApi } from '@/API/InfoApi';
import Info from '@/pages/movie/[id]';
import AuthStore from '@/pages/store/Auth';

const StarRating = ({id,rating}:{id:number,rating:number}) => {
  console.log("rating",rating)
  const user=AuthStore((state:any)=>state.user)
  const [star , setStar] = useState<number>(0);
  const [hover , setHover] = useState<number | null>(null);
  const arr=useRef([1,1,1,1,1])
  const addStar=async(id:any)=>{
    let res=await InfoApi.star({movie:id , profile:user.profile_id?user.profile_id:user.id})
    console.log(res)
  }
  const changeStar=async(id:any)=>{
    let res=await InfoApi.restar({movie:id , profile:user.profile_id?user.profile_id:user.id})
    console.log(res)
  }
  
  return (
    <div className={styles.rateBox}>
      {arr.current.map((starr , i) => {
        const ratingValue = i + 1;
        
        return(
          <label key={i}>
            <input 
              className={styles.input}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() =>{ 
                InfoApi.star({
                  id:id,
                  movie:id,
                  profile:user.profile_id,
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
              color={ratingValue<=star ? "orange" : "gray"} 
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