import { useRouter } from 'next/router';
import styles from '../styles/profilecomment.module.css'
import moment from 'jalali-moment'

export default function Comment ({image='/image/test.jpeg',name='علی', id=12346788,text='این متن تست است برای توضیحات',createdAt='18/1/1400',film='سرقت پول',link='',movie_id=1}:{image?:string,name?:string,number?:number,description?:string,createdAt?:string,film?:string,link?:string,movie_id?:number}){
    const gregorianDate = moment(createdAt, 'YYYY-MM-DD');
    const persianDate = gregorianDate.locale('fa').format('YYYY/MM/DD');
    const router = useRouter()
    return(
        <div  className={styles.container}>
            <div className={styles.head}>
            <img className={styles.img} src={image?image:''} alt="" />
            <div onClick={()=>router.push("/movie/"+movie_id)} style={{cursor:"pointer"}} className={styles.name}>نظر {name?name:''} در مورد فیلم <a className={styles.link}> {film?film:''}</a></div>
            <div className={styles.date}>{persianDate} </div>
            </div>
            <p  className={styles.paragh}>{text}</p>
        </div>
    )
}