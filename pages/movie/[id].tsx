import React, { Component ,useEffect,useState} from 'react'
import styles from '../../styles/info.module.css'
import Card from '@/component/card/Card'
import Middle from '@/component/layout/Middle'
import Top from '@/component/layout/Top'
import Stream from '@/component/stream/Stream'
import Item from '@/component/FilmItem'
import style from '../styles/explore.module.css'
import Actors from '@/component/factors/Actors'
import OtherFactors from '@/component/factors/OtherFactors'
import CommentBox from '@/component/comments/CommentBox'
import Header from '@/component/header'
import Footer from '@/component/Footer'
import Comment from '@/component/comments/commentComponent'
import { MoviesApi } from '@/API/Movies'
import { useRouter } from 'next/router'
import CustomBtn from '@/ui/CustomBtn'
import Series from '@/component/seriesSection/Series'
import { SeriesApi } from '@/API/Series'



function Info(){
  const[data,setdata]=useState<any>()
  const[season,setseason]=useState<any>()
  const router=useRouter()
  const api2=async()=>{
    let res=await SeriesApi.getSeries(data?.id)
    console.log(res)
    if(res?.status=='success'){
      console.log(res?.content)
      setseason(res?.content)
    }
  }
  useEffect(()=>{
    if(data?.id){
      api2()
}  },[data])
  const api=async()=>{
    let res=await MoviesApi.getMovie(router.query?.id)
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
        <Top title={data.title} tumbnail={data.thumbnail} country={data.country} date={data.publish_date} category_set={data.category_set}/>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div className= {styles.middleView}>
            <div className= {styles.leftPart}>
              <Card image={data?.poster} id={data?.id}/>
            </div>
            <div className= {styles.rightPart}>
              <Middle text={data.description} name={data.title} date={data.publish_date} bbRate={data.meta_rating} imdbRate={data.imdb_rating} metaRate={data.meta_rating} country={data.country} category_set={data.category_set}/>
              {/* <Stream/> */}
            </div>
          </div>
          <div style={{display:"flex", justifyContent:'center'}}>
            <Series 
            seasonNum={season.title} id={season?.id}
            // title={season.title} episode_number={season.episode_number} photo={season.photo}
            />
          </div>
          {/* <div>
            <div className='ganreItem'style={{backgroundColor:'#3d3d3d', paddingTop:'20px', paddingRight:30}}>
                <h2 className={style.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های پیشنهادی</h2>
                <div className={style.container}>
                    <h4 style={{position:'absolute',left:50,top:120,color:'#FFA500',cursor:'pointer',backgroundColor:'black',padding:10,borderRadius:10}}>see all</h4>
                    <Item image={'/image/manifest.jpg'} name={'لیست پرواز'}/>
                    <Item image={'/image/good-doctor.jpeg'} name={'دکتر خوب'}/>
                    <Item image={'/image/sweet-home.jpeg'} name={'سوییت هوم'}/>
                    <Item image={'/image/harry-poter.jpg'} name={'هری پاتر'}/>
                    <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'}/>
                    <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'}/>
                    <Item image={'/image/legacies.jpg'} name={'میراث ها'}/>
                </div>
            </div>
          </div> */}
          <div style={{backgroundColor:'black', color:'aliceblue',paddingTop:'30px' , paddingBottom:'30px'}}>
            <Actors actors={data.actors} director={data.director}/>
          </div>
          
          <div style={{ color:'aliceblue',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
            <CommentBox/>
            {/* <div style={{width:'100%',display:'flex',justifyContent:'space-between',padding:"0 10%"}}>
              <CustomBtn text='ثبت نظر' style={{width:120,margin:"0 20px",height:40,borderRadius:10,backgroundColor:'orange'}} textStyle={{color:'white'}} press={()=>{}}/>
              <h3 style={{color:'white',direction:'rtl',fontSize:35}}>نظرات</h3>
            </div> */}
            
            {/* <Comment/>
            <Comment/>
            <Comment/>
            <Comment/> */}
          </div>
        </div>
        {/* <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
          <CustomBtn text='نظرات بیشتر' style={{width:120,margin:"20px 20px",height:40,borderRadius:10,backgroundColor:'orange'}} textStyle={{color:'white'}} press={()=>{}}/>
        </div> */}
        <Footer />
      </div>
    )
  }

export default Info