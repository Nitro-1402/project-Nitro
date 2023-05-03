import NewsCard from "@/component/news/Card";
import styles from '../../styles/news.module.css'
import Link from "next/link";
import { NewsApi } from "@/API/news";
import {useEffect,useState} from 'react'
export default function News(){
    const[news,setnews]=useState<any[]>([])
    const api=async()=>{
      let res=await NewsApi.getList()
      console.log(res)
      if(res?.status=='success'){
        setnews(res?.content)
      }
    }
    useEffect(()=>{
        console.log("Called useEffect");
      api()
    },[ ])
    return(
        <>
        <h1 style={{direction:'rtl',color:'white',margin:36}}>اخبار سینمای جهان</h1>
        <div className={styles.container}>
        {
          news.map((e:any)=>{
            return(
              <NewsCard key={e?.id} id={e?.id}  title={e.title} description={e.description} image={e.photo}/>
            )
          })
        }
        {/* <NewsCard />
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/> */}
        </div>
        </>
    )
}