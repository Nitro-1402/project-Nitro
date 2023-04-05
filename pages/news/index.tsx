import NewsCard from "@/component/news/Card";
import styles from '../../styles/news.module.css'
export default function News(){
    return(
        <>
        <h1 style={{direction:'rtl',color:'white',margin:36}}>اخبار سینمای جهان</h1>
        <div className={styles.container}>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        </div>
        </>
    )
}