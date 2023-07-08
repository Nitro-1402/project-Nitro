import React , {useState , useEffect} from 'react'
import {FaCheck, FaStar, FaTicketAlt} from 'react-icons/fa'
import styles from '@/styles/info.module.css'
import { InfoApi } from '@/API/InfoApi';
import AuthStore from '@/pages/store/Auth';

const Tick = ({id,status}:{id:number,status:boolean}) => {
  const user=AuthStore((state:any)=>state.user)
  const [seen , setSeen] = useState(status);
  const addSeen=async()=>{
    let res=await InfoApi.seen({movie:id,profile:user.profile_id?user.profile_id:user.id})
    console.log(res)
  }
  const deleteSeen=async()=>{
    let res=await InfoApi.unseen({movie:id, profile:user.profile_id?user.profile_id:user.id})
    console.log(res)
  }
  return (
    <div>
      <label>
        <input 
          className={styles.input}
          type="radio"
          name="seen"
          onClick={() => {
            if(seen){
              deleteSeen()
              setSeen(false)
            }else{
              addSeen()
              setSeen(true)
            }
          }}
        />
        <FaCheck
          className={styles.tick} 
          color={(seen) ? "green" : "gray"} 
          size={100}
          />
      </label>
    </div>
  );
};

export default Tick