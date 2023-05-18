import styles from "../styles/about.module.css";
import react from "react";
import Header from "@/component/header";
export default function contactUs() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.photo}></div>




      <div className={styles.rightside}>
        <div className={styles.first}>
          <h2 className={styles.title}>درباره ما</h2>
          <div className={styles.firstboxtitile}>
          <p>
            ببینیم وب سایت ساخته شده توسط جمعی ازد دانشجویان دانشگاه علم وصنعت
            مباشد که در جهت ایجاد محیطی امن و پر نشاط در حوزه فیلم و سریال
            فعالیت میکند. از مهم ترین ویژگی های ببینیم میتوان به ارزان بودن
            هزینه اشتراک و قابل استفاده بودن برای تمامی سنین اشاره کرد. وب سایت
            ببینیم تمام تلاش خود را به کار میگیرد تا بهترین فیلم و سریال های
            ایرانی و خارجی را در اولین فرصت به مخاطبان ارائه دهد و امکان نقد
            فیلم ها را به کاربران بدهد
            .شما می­توانید با همراهی خود در این زمینه در پیشبرد هرچه بهتر این سایت با ما همگام باشید. لذا خواهشمندیم با توجه به رعایت قوانین و مقررات مربوطه ما را یاری نمایید
          </p>
          </div>

        </div>

        <div className={styles.secound}>
          <h2 className={styles.title2}>راهنما</h2>

          <div className={styles.secoundboxtitile}>
          <p>پس از انجام مراحل ثبت نام شما میتوانید از طریق سرچ باکس یا از طریق قسمت فیلم ها به تمامی فیلم ها دسترسی داشته باشید و با کلیک کردن روی فیلم مورد نظر به صفحه اطلاعات مربوطه بروید .هنچین میتوانید از قسمت اخبار آخرین اتفاقات دنیای فیلم و سریال را ببیندید و با گرفتن اشتراک میتوانید نظرات و نقد های کاربران راجب اتفاقات فیلم ها را بررسی کنید و لذت ببرید </p>
          <br/><br/>
          <p className={styles.lastp}>در صورت بروز هرگونه مشکل شما میتوانید با پشتیبانی در ارتباط باشید</p>
          
            <button className={styles.btn} type="button"><a className={styles.link}  href="contactus" title="ارتباط با ما ">تماس با ما </a></button>
          </div>

          
        </div>
      </div>



    </div>
  );
}
