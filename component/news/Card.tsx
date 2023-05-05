import CustomImage from '@/ui/CustomImage'
import styles from '../../styles/news.module.css'
import Link from 'next/link'
export default function NewsCard({image,description,title,id}:{image:string,description:string,title:string,id:number}){
    return(
        <Link href={`/news/${id}`} style={{textDecoration:'none'}}>
        <div className={styles.card}>
        
            <CustomImage style={{height:200,width:280,borderRadius:10,marginLeft:30}} src={image}/>
            <div>
                <h2 style={{color:'white',fontSize:20,margin:"15px 0"}}>{title}</h2>
                <h6 style={{color:'#787878'}}>{description}</h6>
                <h4 style={{position:'absolute',left:10,bottom:10,fontSize:15,color:"#FFA500"}}>14 فروردین 1402</h4>
            </div>
        </div>
        </Link>
    )
}