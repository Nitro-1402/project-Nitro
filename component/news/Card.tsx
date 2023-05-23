import CustomImage from '@/ui/CustomImage'
import styles from '../../styles/news.module.css'
import Link from 'next/link'
import moment from 'jalali-moment';


// function date(){
//     // var dateFormat = new Intl.DateTimeFormat("fa");
//     // var finaldate = dateFormat.format(Date.now());
//     // return finaldate
//     const date = new Date();
//     const option = {
//         weekday:"long",
//         month:"long",
//         day:"numeric",
//         hour:"numeric",
//         minute:"numeric"
//     }
//     return date.toLocaleDateString("fa-IR",option)

// }



export default function NewsCard({image,description,title,id,publish_date}:{image:string,description:string,title:string,id:number,publish_date:string}){
    const gregorianDate = moment(publish_date, 'YYYY-MM-DD');
    const persianDate = gregorianDate.locale('fa').format('YYYY/MM/DD');
    return(
        <Link href={`/news/${id}`} style={{textDecoration:'none'}}>
        <div className={styles.card}>
        
            <CustomImage style={{height:200,width:280,borderRadius:10,marginLeft:30}} src={image}/>
            <div>
                <h2 style={{color:'white',fontSize:25,margin:"15px 0"}}>{title}</h2>
                <h6 style={{color:'#787878',fontSize:10}}>{description}</h6>
                
               
                <h4  style={{position:'absolute',left:10,bottom:10,fontSize:15,color:"#FFA500" ,direction:"rtl"}}>{persianDate}</h4>
            </div>
        </div>
        </Link>
    )
}