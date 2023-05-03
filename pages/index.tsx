import Item from '@/component/FilmItem'
import styles from '../styles/Home.module.css'
import NewsCard from '@/component/news/Card'
import Header from '@/component/header'
import Footer from '@/component/Footer'
import axios from 'axios'
import { URL_API } from '@/constant/urlapi'
import AuthStore from './store/Auth'
import { HiUserCircle } from 'react-icons/hi'
import { MoviesApi } from '@/API/Movies'
import {useEffect,useState} from 'react'
import { NewsApi } from '@/API/news'
export default function Home() {
  const[movies,setmovies]=useState<any[]>([])
  const[news,setnews]=useState<any[]>([])
  const user=AuthStore((state:any)=>state.user)
  const api=async()=>{
    let res=await Promise.all([MoviesApi.getMovies(),NewsApi.getList()])
    console.log(res)
    if(res?.[0]?.status=='success'){
      console.log(res?.[0].content)
      setmovies(res?.[0].content)
    }
    if(res?.[1]?.status=='success'){
      console.log(res?.[1].content)
      setnews(res?.[1].content)
    }
  }
  useEffect(()=>{
    api()
  },[ ])
  return (
    <>
   {(news.length>0 && movies.length>0) && <>
    <Header/>
    <div className={styles.header}>
      <h2>۴۰۰ هزار فیلم و قسمت سریال</h2>
      <ul>
        <li>پشتیبانی ۲۴ ساعته </li>
        <li>بدون سانسور و حذفیات</li>
        <li>اپلیکیشن اختصاصی</li>
      </ul>
      <div onClick={()=>{
        axios.get(`${URL_API}movies/movies`)
      }}>
        <div>

        <h3>ثبت نام </h3>
        </div>
      </div>
    </div>
    <div className={styles.suggestion}>
      <h3>پیشنهادی ها</h3>
      <div>
        {
          movies.map((e:any)=>{
            return(
              <Item image={e.poster} name={e.title} description={`${e.description.slice(0,70)} ...`}/>
            )
          })
        }
{/* 
      <Item image={'/image/swarm.jpg'} name={'ازدحام'}/>
      <Item image={'/image/meydanSorkh.jpg'} name={'میدان سرخ'}/>
      <Item image={'/image/lastOfUs.webp'} name={'آخرین نفر از ما'}/>
      <Item image={'/image/iron-man.jpg'} name={'مرد آهنی'}/>
      <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'}/>
      <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'}/>
 */}

      </div>
    </div>
    <div className={styles.news}>
      <h3>اخبار دنیای فیلم و سریال</h3>
      <div>
      {
          news.map((e:any)=>{
            return(
              <NewsCard key={e?.id} id={e?.id} title={e.title} description={e.description} image={e.photo}/>
            )
          })
        }
{/* 
      <NewsCard/>
      <NewsCard/>
      <NewsCard/> */}
      </div>
    </div>
    <Footer/>
    </>}
    </>
  )
}
