import React, { Component } from 'react'
import styles from '../styles/info.module.css'
import Card from '@/component/card/Card'
import Middle from '@/component/layout/Middle'
import Navbar from '@/component/navbar/Navbar'
import Top from '@/component/layout/Top'
import Stream from '@/component/stream/Stream'
import Item from '@/component/FilmItem'
import style from '../styles/explore.module.css'
import Actors from '@/component/factors/Actors'
import OtherFactors from '@/component/factors/OtherFactors'
import CommentBox from '@/component/comments/CommentBox'
import Header from '@/component/header'
import Footer from '@/component/Footer'



export class info extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Top/>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div className= {styles.middleView}>
            <div className= {styles.leftPart}>
              <Card/>
            </div>
            <div className= {styles.rightPart}>
              <Middle/>
              <Stream/>
            </div>
          </div>
          <div>
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
          </div>
          <div style={{backgroundColor:'black', color:'aliceblue',paddingTop:'30px'}}>
            <Actors/>
            <OtherFactors/>
          </div>
          <div style={{backgroundColor:'black', color:'aliceblue'}}>
            <CommentBox/>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default info