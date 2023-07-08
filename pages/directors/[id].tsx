import React, { Component ,useEffect,useState} from 'react'
import ActorInfo from '@/component/actorInfoPage/ActorInfo'
import ActorMovie from '@/component/actorInfoPage/ActorMovie'
import style from '../../styles/explore.module.css'
import { useRouter } from 'next/router'
import { DirectorsApi } from '@/API/ActorApi'
import Header from '@/component/header'
import Footer from '@/component/Footer'


function director(){
  const[data,setdata]=useState<any>()
  const router=useRouter()

  const api=async()=>{
    let res=await DirectorsApi.getDirector(router.query?.id)
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
        <Footer/>
      </div>
    )
  }

export default director




