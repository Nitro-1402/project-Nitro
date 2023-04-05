import CustomImage from '@/ui/CustomImage'
import styles from '../styles/explore.module.css'

export default function Item ({image='/image/test.jpeg',name='terminator', number=12346788,description='این متن تست است برای توضیحات'}:{image?:string,name?:string,number?:number,description?:string}){
    return(
        <div className={styles.item}>
            <div style={{width:"100%",height:227,overflow:'hidden',position:'relative'}}>
            <CustomImage src={image?image:''}style={{width:"100%",height:227,overflow:'hidden', borderRadius:'10px'}}/>
            <div className={styles.effect}>
                <h5>{description}</h5>
            </div>
            </div>
            <h4 style={{marginLeft:10,padding:0,color:'aliceblue'}}>{name}</h4>
        </div>
    )
}