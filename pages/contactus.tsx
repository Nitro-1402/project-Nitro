import styles from '../styles/contactUs.module.css';
import react from 'react';
import Header from "@/component/header";
export default function contactUs(){
    
    return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.call}>
            <h6>پاسخ سوال خود را پیدا نکرده اید ؟</h6>
        </div>
        <br></br>
        <div className={styles.sagest}>
            <h4>میتوانید از طریق راه های ارتباطی که در زیر آمده است با ما تماس بگیرید.</h4>
        </div>



        <div className={styles.dokme}>
            <button  className={styles.btnrahnoma} type='submit'>راهنمای آنلاین ببینیم</button>
        </div>
        <br></br>
        <div className={styles.callus}>
            <h4>تماس با ما </h4>
        </div>
        <div className={styles.undertamasbama}>
            <p>با ارسال ایمیل به بخش مورد نظر خود میتوانید با ما در ارتباط باشید</p>
        </div>

        <div className={styles.callboxs}>
            <div className={styles.callboxright}>
                
                <p className={styles.pegiri}> پیگیری سایت : Bebinim@gmail.com</p><br />
                <p>پیگری پرداخت : pardakht@gmail.com</p><br />
                <p>پیشنهادات و انتقادات :ali kontratchi20@gmail.com</p>


            </div>

            <div className={styles.callboxleft}>

            <h2 className={styles.phone}>021-74524</h2><br/>
            <p>برای پاسخگویی به سوالات شما<br/> همه روزه به صورت 24 ساعته<br/> در کنار شما هستیم.</p>
            </div>
        </div>
        <div className={styles.final}>
                <h3 className={styles.h3final}>درخواست اشتراک سازمانی ببینیم</h3>
                <p className={styles.pfinal}>کارکنان، مشتریان و شرکای تجاریتون رو سوپرایز کنید!</p>
                <button  className={styles.btnfinal}>اطلاعات بیشتر </button>
                
        </div>

    </div>
)
}

