import CustomImage from '@/ui/CustomImage'
import styles from '../../styles/news.module.css'
export default function NewsCard(){
    return(
        <div className={styles.card}>
            <CustomImage style={{minHeight:200,minWidth:280,borderRadius:10,marginLeft:30}} src=''/>
            <div>
                <h2 style={{color:'white',fontSize:20,margin:"15px 0"}}>تریلر جدید Secret Invasion: آخرین نبرد نیک فیوری</h2>
                <h6 style={{color:'#787878'}}>
                    
              
دومین تریلر سریال «حمله سری» منتشر شد.
«نیک فیوری» در تریلر جدید «حمله سری» (Secret Invasion) دیزنی+ به شخصیتی شرور تبدیل می‌شود. با اکران «مرد مورچه‌ای ۳» (Ant-Man and the Wasp: Quantumania) مارول آماده عرضه عنوان بعدی «دنیای سینمایی مارول» شده اس ...
            
                </h6>
                <h4 style={{position:'absolute',left:10,bottom:10,fontSize:15,color:"#FFA500"}}>14 فروردین 1402</h4>
            </div>
        </div>
    )
}