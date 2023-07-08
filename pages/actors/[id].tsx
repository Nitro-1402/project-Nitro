import React, { Component ,useEffect,useState} from 'react'
import ActorInfo from '@/component/actorInfoPage/ActorInfo'
import ActorMovie from '@/component/actorInfoPage/ActorMovie'
import style from '../../styles/explore.module.css'
import { useRouter } from 'next/router'
import { ActorsApi } from '@/API/ActorApi'
import Header from '@/component/header'
import Footer from '@/component/Footer'


function actor(){
  const[data,setdata]=useState<any>()
  const router=useRouter()

  const api=async()=>{
    let res=await ActorsApi.getActor(router.query?.id)
    console.log(res)
    if(res?.status=='success'){
      console.log(res?.content)
      setdata(res?.content)
    }
  }
  useEffect(()=>{
    if(router.query.id)
    api()
  },[router.query.id])
  if(!data)

  return<></>
    return (
        <div>
          <Header/>
          <ActorInfo name={data.name} image={data.photo} bio={data.bio} birthday={data.birth_date} imdb_link={data.imdb_link}/>
        
        {/* <div className='ganreItem'style={{backgroundColor:'#3d3d3d', paddingTop:'20px', paddingRight:30}}>
          <h2 className={style.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلموگرافی</h2>
          <div className={style.container}>
            <h4 style={{position:'absolute',left:50,top:120,color:'#FFA500',cursor:'pointer',backgroundColor:'black',padding:10,borderRadius:10}}>see all</h4>
            <ActorMovie image={'/image/manifest.jpg'} name={'لیست پرواز'}/>
            <ActorMovie image={'/image/good-doctor.jpeg'} name={'دکتر خوب'}/>
            <ActorMovie image={'/image/sweet-home.jpeg'} name={'سوییت هوم'}/>
            <ActorMovie image={'/image/harry-poter.jpg'} name={'هری پاتر'}/>
            <ActorMovie image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'}/>
            <ActorMovie image={'/image/money-heist.jpg'} name={'خانه کاغذی'}/>
            <ActorMovie image={'/image/legacies.jpg'} name={'میراث ها'}/>
          </div>
        </div> */}
          <Footer/>
      </div>
    )
  }

export default actor




