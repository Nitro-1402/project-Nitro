import React , {useState} from 'react'
import {FaHeart} from 'react-icons/fa'
import styles from '@/styles/info.module.css'
import { InfoApi } from '@/API/InfoApi';
import AuthStore from '@/pages/store/Auth';
import { useRouter } from 'next/router';
//
const HeartFavorite = ({id,status}:{id:number,status:boolean}) => {
  const user=AuthStore((state:any)=>state.user)
  const router=useRouter()
    const [favorite , setFavorite] = useState(status);
    const addFavorite=async()=>{
      console.log(user)
        let res=await InfoApi.favorite({movie:id,profile:user?.profile_id?user.profile_id:user.id})
        console.log(res)
      }
      const deleteFavorite=async()=>{
        let res=await InfoApi.unfavourite({movie:id,profile:user?.profile_id?user.profile_id:user.id})
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
                  if(user?.id){
                    deleteFavorite()
                    setFavorite(false)
                  }
                  else{
                    router.push(`/register?backUrl=${router.asPath}`)
                  }
                  }else{
                    if(user?.id){
                    addFavorite()
                    setFavorite(true)
                    }
                    else{
                      router.push(`/register?backUrl=${router.asPath}`)
                    }
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


