import Item from '@/component/FilmItem'
import styles from '../styles/Home.module.css'
import NewsCard from '@/component/news/Card'
import Header from '@/component/header'
import Footer from '@/component/Footer'
export default function Home() {
  return (
    <>
    <Header/>
    <div className={styles.header}>
      <h2>۴۰۰ هزار فیلم و قسمت سریال</h2>
      <ul>
        <li>پشتیبانی ۲۴ ساعته </li>
        <li>بدون سانسور و حذفیات</li>
        <li>اپلیکیشن اختصاصی</li>
      </ul>
      <div>
        <div>

        <h3>ثبت نام </h3>
        </div>
      </div>
    </div>
    <div className={styles.suggestion}>
      <h3>پیشنهادی ها</h3>
      <div>
      <Item image={'/image/spider-man.jpg'} name={'مزد عنکبوتی دور از خانه'}/>
      <Item image={'/image/swarm.jpg'} name={'ازدحام'}/>
      <Item image={'/image/meydanSorkh.jpg'} name={'میدان سرخ'}/>
      <Item image={'/image/lastOfUs.webp'} name={'آخرین نفر از ما'}/>
      <Item image={'/image/iron-man.jpg'} name={'مرد آهنی'}/>
      <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'}/>
      <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'}/>


      </div>
    </div>
    <div className={styles.news}>
      <h3>اخبار دنیای فیلم و سریال</h3>
      <div>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
