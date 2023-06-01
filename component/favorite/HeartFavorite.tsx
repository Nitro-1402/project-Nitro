import React , {useState} from 'react'
import {FaHeart} from 'react-icons/fa'
import styles from '@/styles/info.module.css'
import { InfoApi } from '@/API/InfoApi';
import AuthStore from '@/pages/store/Auth';

const HeartFavorite = ({id}:{id:number}) => {
  const user=AuthStore((state:any)=>state.user)
    const [favorite , setFavorite] = useState(false);
    const addFavorite=async()=>{
        let res=await InfoApi.favorite({movie:id,profile:user.id})
        console.log(res)
      }
      const deleteFavorite=async()=>{
        let res=await InfoApi.unfavourite()
        console.log(res)
      }
    return (
        <div>
        <label>
        <input 
            className={styles.input}
            type="radio"
            name="rating"
            onClick={() =>{
                if(favorite){
                    deleteFavorite()
                    setFavorite(false)
                  }else{
                    addFavorite()
                    setFavorite(true)
                  }
            }}
        />
        <FaHeart
            className={styles.heart} 
            color={(favorite) ? "red" : "gray"} 
            size={100}
            />
        </label>
        
        </div>
    );
  };
export default HeartFavorite


