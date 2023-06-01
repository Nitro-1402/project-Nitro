import React , {useState} from 'react'
import {FaBookmark} from 'react-icons/fa'
import styles from '@/styles/info.module.css'
import { InfoApi } from '@/API/InfoApi';
import AuthStore from '@/pages/store/Auth';

const Bookmark = (id:any) => {
  const user=AuthStore((state:any)=>state.user)
  const [bookmark , setBookmark] = useState(false);
  const addBookmark=async()=>{
    let res=await InfoApi.bookmark({movie:id, profile:user.id})
    console.log(res)
  }
  const deleteBookmark=async()=>{
    let res=await InfoApi.unbookmark()
    console.log(res)
  }
  return (
    <div>
      <label>
        <input 
          className={styles.input}
          type="radio"
          name="bookmark"
          onClick={() => {
            if(bookmark){
              deleteBookmark()
              setBookmark(false)
            }else{
              addBookmark()
              setBookmark(true)
            }
          }}        />
        <FaBookmark
          className={styles.trackIt} 
          color={bookmark ? "orange" : "gray"} 
          size={100}
          />
      </label>
    </div>
  );
};

export default Bookmark