import React from "react";
import Navbar from "@/component/navbar/Navbar";
import styles from "../../styles/newscontent.module.css";
import { TfiAlarmClock } from "react-icons/tfi";
import styless from "../../styles/factors.module.css";
import CustomImage from "@/ui/CustomImage";
import Link from "next/link";
import Header from "@/component/header";
import Footer from "@/component/Footer";
import { NewsApi } from "@/API/news";
import {useEffect,useState} from 'react'
import { useRouter } from "next/router";
function Actor({
  image = "/info-page-image/natasha.webp",
  name = "ناتاشا لیون",
  link = "/",
}: {
  image?: string;
  name?: string;
  link?: string;
}) {
  return (
    <Link
      href={link}
      className={styles.actor}
      // style={{
      //   fontSize:"0.9em",
      //   display: "flex",
      //   flexDirection: "row",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   width: "140px",
      //   // width: "vw",
      //   backgroundColor: "gray",
      //   // borderRadius: "20px",
      //   borderRadius: "15vh",
      //   textDecoration: "none",
      //   color: "aliceblue",
      //   marginLeft: "7px",
      // }}
    >
      <CustomImage
        src={image ? image : ""}
        style={{ borderRadius: "40px", width: "40px", padding: "3px" }}
        alt={name}
      />
      <div className={styless.actorName} style={{}}>
        {name}
      </div>
    </Link>
  );
}
export default function NewsContent() {
    const[news,setnews]=useState<any>({})
    const router=useRouter()
    const api=async()=>{
        if(router?.query?.id){
      let res=await NewsApi.getNews(router.query.id)
      console.log(res)
      if(res?.status=='success'){
        setnews(res?.content)
      }
    }
    }
    useEffect(()=>{
    if(router?.query?.id)
      api()
    },[ ])
  return (
    <>
      <Header/>
      <div  style={{backgroundImage:` url(${news?.photo})`}}>
        <div className={styles.article}>
          {/* <div className={styles.img}> */}
          <div className={styles.mmd}>
            <img className={styles.image} src={news?.photo} alt="" />
            {/* <div className={styles.actors}>
              <Actor
                image={"/info-page-image/natasha.webp"}
                name={"ناتاشا لیون"}
                link="/actor"
              />
              <Actor
                image={"/info-page-image/natasha.webp"}
                name={"ناتاشا لیون"}
                link="/actor"
              />
              <Actor
                image={"/info-page-image/natasha.webp"}
                name={"ناتاشا لیون"}
                link="/actor"
              />
              <Actor
                image={"/info-page-image/natasha.webp"}
                name={"ناتاشا لیون"}
                link="/actor"
              />
  </div>*/}
          </div> 
          <div className={styles.descrip}>
            <h1 className={styles.title}>{news.title}</h1>
            <div className={styles.Clock}>
              <p>
                زمان تقریبی مطالعه : دو دقیقه <TfiAlarmClock />{" "}
              </p>
              <p> Date / time</p>
            </div>
            <p className={styles.description}>
                {news.description}
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}