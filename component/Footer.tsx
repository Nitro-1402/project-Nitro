import React from "react"
import styles from "../styles/footer.module.css";
import{BsInstagram,BsWhatsapp,BsTelegram}from "react-icons/bs"
import{GoLocation}from "react-icons/go"
import { Router, useRouter } from "next/router";
import MulticlassName from "@/helper/MultiClassName";
function Footer(){
    const router=useRouter()
    return(
        <div className={MulticlassName([styles.container])}>
            <div className={styles.text}>
                <h2 className={MulticlassName([styles.h2])}> درباره ببینیم</h2>
                <p className={MulticlassName([styles.h3])}>ببینیم یک پلتفرم آنلاین ایت که افراد میتوانند در ان فیلم هایی که دوست را بیابند نظرات آن را به خوانند واز اخبار روز دنیای سینما آگاه شوند
                در ببینیم میتوانید دربارهی فیلم ها کامنت بگإترید اطلاعات و افراد با سلیقهی یکسان را پیدا کنید</p>
            </div>
            {/* <div className={styles.namads}>
            <CustomImage style={{width:100,height:100}} src='./image/namad2.png'/>
            <CustomImage style={{width:100,height:100}} src='./image/namad2.png'/>
            <CustomImage style={{width:100,height:100}} src='./image/namad2.png'/>
            </div> */}
        <div className={styles.together}>
        <div className={styles.text} style={{width:100}}>
        <h3 className={MulticlassName([styles.h3,"hoverBtn"])} onClick={()=>{
            router.push('/about')
        }}>درباره ما</h3>
        <h3 className={MulticlassName([styles.h3,"hoverBtn"])} onClick={()=>{
            router.push('/contactus')
        }}>تماس با ما</h3>
        <h3 className={MulticlassName([styles.h3,"hoverBtn"])} onClick={()=>{
            router.push('/FAQ')
        }}>سوالات پرتکرار</h3>
        <h3 className={MulticlassName([styles.h3,"hoverBtn"])} onClick={()=>{
            router.push('/rules')
        }}>قوانین و مقررات</h3>
        {/* <h3 className={MulticlassName([styles.h3,"hoverBtn"])}>وبلاگ</h3> */}
        </div>
        <div className={styles.text} style={{width:320}}>
        <h3 className={MulticlassName([styles.h3])}>آدرس: تهران خیایبا حیدرخانی دانشگاه علم وصنعت
</h3>
        <h3 className={MulticlassName([styles.h3])}>پشتیبانی و درخواست همکاری : 011-33566788</h3>
        <h3 className={MulticlassName([styles.h3])}>پیگیری سفارش: 011-33566788</h3>
        <h3 className={MulticlassName([styles.h3])}>ایمیل: info@bebinim.com</h3>
        <div style={{width:120,marginTop:10,display:"flex",justifyContent:'space-between'}}>
            <BsInstagram className="hoverBtn" size={20} color={"orange"}/>
            <BsTelegram  className="hoverBtn" size={20} color={"orange"}/>
            <BsWhatsapp  className="hoverBtn" size={20} color={"orange"}/>
            <GoLocation  className="hoverBtn" size={20} color={"orange"}/>

        </div>
        </div>
        </div>
    </div>

    )
}
export default React.memo(Footer,()=>{
    return true
})