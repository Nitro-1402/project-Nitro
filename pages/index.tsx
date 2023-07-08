import Item from '@/component/FilmItem'
import styles from '../styles/Home.module.css'
import NewsCard from '@/component/news/Card'
import Header from '@/component/header'
import Footer from '@/component/Footer'
import moment from 'jalali-moment';


import axios from 'axios'
import { URL_API } from '@/constant/urlapi'
import AuthStore from './store/Auth'
import { HiUserCircle } from 'react-icons/hi'
import { MoviesApi } from '@/API/Movies'
import {useEffect,useState} from 'react'
import { NewsApi } from '@/API/news'
import { useRouter } from 'next/router'
export default function Home() {
  const[movies,setmovies]=useState<any[]>([])
  const[news,setnews]=useState<any[]>([])
  const user=AuthStore((state:any)=>state.user)
  const router=useRouter()
  const api=async()=>{
    let res=await Promise.all([MoviesApi.getMovies(),NewsApi.getList()])
    console.log(res)
    if(res?.[0]?.status=='success'){
      console.log(res?.[0].content)
      setmovies(res?.[0].content.results)
    }
    if(res?.[1]?.status=='success'){
      console.log(res?.[1].content)
      setnews(res?.[1].content.results)
    }
  }
  useEffect(()=>{
    api()
  },[ ])
  return (
    <>
   {( movies.length>0) && <>
    <Header/>
    <div className={styles.header}>
      <h2> به دنیای فیلم خوش آمدید</h2>
      <ul>
        <li>هزاران فیلم</li>
        <li>نقد و بررسی تخصصی</li>
        <li>اپلیکیشن اختصاصی</li>
      </ul>
      <div onClick={()=>{
        if(!user)
        axios.get(`${URL_API}movies/movies`)
      }}>
        <div onClick={()=>{
          if(user)
          router.push('/profile/myprofile')
          else{
            router.push('/register')
          }
        }}>

        <h3>{user?'پروفایل':'ورود'}</h3>
        </div>
      </div>
    </div>
    <div className={styles.suggestion}>
      <h3>پیشنهادی ها</h3>
      <div style={{overflow:'auto',width:'100%'}}>
        {
          movies.slice(0,7).map((e:any)=>{
            return(
              <Item id={e.id} image={e.thumbnail} name={e.title} description={`${e.description.slice(0,70)} ...`}/>
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
      <h3>اخبار دنیای فیلم </h3>
      <div>
      {
          news.map((e:any)=>{
            return(
              <NewsCard key={e?.id} id={e?.id} title={e.title} description={e.description} image={e.photo} publish_date={e.publish_date} />
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
