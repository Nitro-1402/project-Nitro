import React from "react";
import Navbar from "@/component/navbar/Navbar";
import styles from "../styles/newscontent.module.css";
import { TfiAlarmClock } from "react-icons/tfi";
import styless from "/styles/factors.module.css";
import CustomImage from "@/ui/CustomImage";
import Link from "next/link";
import Header from "@/component/header";
import Footer from "@/component/Footer";

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
  return (
    <>
      <Header/>
      <div className={styles.main}>
        <div className={styles.article}>
          {/* <div className={styles.img}> */}
          <div className={styles.mmd}>
            <img className={styles.image} src="../image/alice.jpg" alt="" />
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
            <h1 className={styles.title}>تایتل خبر</h1>
            <div className={styles.Clock}>
              <p>
                زمان تقریبی مطالعه : دو دقیقه <TfiAlarmClock />{" "}
              </p>
              <p> Date / time</p>
            </div>
            <p className={styles.description}>
              دانلود زیرنویس فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی محصول
              ۲۰۲۲ به نویسندگی و کارگردانی کریستین ور لیندن در اولین کارگردانی
              خود است. در این فیلم کیک پالمر، جانی لی میلر، کامن، گایوس چارلز و
              آلیشیا ویت به ایفای نقش پرداخته اند. برای دانلود به لینک زیر
              مراجعه کنید <a>https://blue-subtitle.com/alice-2022/</a> اولین
              نمایش آن دانلود زیرنویس فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی
              محصول ۲۰۲۲ به نویسندگی و کارگردانی کریستین ور لیندن در اولین
              کارگردانی خود است. در این فیلم کیک پالمر، جانی لی میلر، کامن،
              گایوس چارلز و آلیشیا ویت به ایفای نقش پرداخته اند. دانلود زیرنویس
              فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به نویسندگی
              و کارگردانی کریستین ور لیندن در اولین کارگردانی خود است. در این
              فیلم کیک پالمر، جانی لی میلر، کامن، گایوس چارلز و آلیشیا ویت به
              ایفای نقش پرداخته اند. برای دانلود به لینک زیر مراجعه کنید
              <a>https://blue-subtitle.com/alice-2022/</a> اولین نمایش آن دانلود
              زیرنویس فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به
              نویسندگی و کارگردانی کریستین ور لیندن در اولین کارگردانی خود است.
              در این فیلم کیک پالمر، جانی لی میلر، کامن، گایوس چارلز و آلیشیا
              ویت به ایفای نقش پرداخته اند. دانلود زیرنویس فیلم Alice 2022 آلیس
              یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به نویسندگی و کارگردانی کریستین
              ور لیندن در اولین کارگردانی خود است. در این فیلم کیک پالمر، جانی
              لی میلر، کامن، گایوس چارلز و آلیشیا ویت به ایفای نقش پرداخته اند.
              برای دانلود به لینک زیر مراجعه کنید
              <a>https://blue-subtitle.com/alice-2022/</a> اولین نمایش آن دانلود
              زیرنویس فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به
              نویسندگی و کارگردانی کریستین ور لیندن در اولین کارگردانی خود است.
              در این فیلم کیک پالمر، جانی لی میلر، کامن، گایوس چارلز و آلیشیا
              ویت به ایفای نقش پرداخته اند. دانلود زیرنویس فیلم Alice 2022 آلیس
              یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به نویسندگی و کارگردانی کریستین
              ور لیندن در اولین کارگردانی خود است. در این فیلم کیک پالمر، جانی
              لی میلر، کامن، گایوس چارلز و آلیشیا ویت به ایفای نقش پرداخته اند.
              برای دانلود به لینک زیر مراجعه کنید
              <a>https://blue-subtitle.com/alice-2022/ </a>اولین نمایش آن دانلود
              زیرنویس فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به
              نویسندگی و کارگردانی کریستین ور لیندن در اولین کارگردانی خود است.
              در این فیلم کیک پالمر، جانی لی میلر، کامن، گایوس چارلز و آلیشیا
              ویت به ایفای نقش پرداخته اند. دانلود زیرنویس فیلم Alice 2022 آلیس
              یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به نویسندگی و کارگردانی کریستین
              ور لیندن در اولین کارگردانی خود است. در این فیلم کیک پالمر، جانی
              لی میلر، کامن، گایوس چارلز و آلیشیا ویت به ایفای نقش پرداخته اند.
              برای دانلود به لینک زیر مراجعه کنید
              <a>https://blue-subtitle.com/alice-2022/</a> اولین نمایش آن دانلود
              زیرنویس فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به
              نویسندگی و کارگردانی کریستین ور لیندن در اولین کارگردانی خود است.
              در این فیلم کیک پالمر، جانی لی میلر، کامن، گایوس چارلز و آلیشیا
              ویت به ایفای نقش پرداخته اند. دانلود زیرنویس فیلم Alice 2022 آلیس
              یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به نویسندگی و کارگردانی کریستین
              ور لیندن در اولین کارگردانی خود است. در این فیلم کیک پالمر، جانی
              لی میلر، کامن، گایوس چارلز و آلیشیا ویت به ایفای نقش پرداخته اند.
              برای دانلود به لینک زیر مراجعه کنید
              <a>https://blue-subtitle.com/alice-2022/</a>اولین نمایش آن دانلود
              زیرنویس فیلم Alice 2022 آلیس یک فیلم مهیج آمریکایی محصول ۲۰۲۲ به
              نویسندگی و کارگردانی کریستین ور لیندن در اولین کارگردانی خود است.
              در این فیلم کیک پالمر، جانی لی میلر، کامن، گایوس چارلز و آلیشیا
              ویت به ایفای نقش پرداخته اند.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
