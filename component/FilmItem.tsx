import CustomImage from '@/ui/CustomImage'
import styles from '../styles/watchlist.module.css'

export default function Item ({image='/image/test.jpeg',name='terminator', number=12346788}:{image?:string,name?:string,number?:number}){
    return(
        <div className={styles.item}>
            <div style={{width:"100%",height:227,overflow:'hidden'}}>
            <CustomImage src={image?image:''}style={{width:"100%",height:227,overflow:'hidden'}}/>
            </div>
            <h4 style={{marginLeft:10,padding:0}}>{name}</h4>
            <h6 style={{color:'#acacac',marginLeft:10,padding:0}}>{number} seen</h6>

        </div>
    )
}