import CustomImage from '@/ui/CustomImage'
import styles from '../styles/watchlist.module.css'
function Item ({image='/image/test.jpeg',name='terminator', number=12346788}:{image?:string,name?:string,number?:number}){
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
export default function WatchList(){
    return(
        <>
        <h2 className={styles.h2} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های جدید</h2>
        <div className={styles.container}>
        <h4 style={{position:'absolute',left:20,top:-30,color:'#7569FF',cursor:'pointer',}}>see all</h4>
        
        <Item image={'/image/manifest.jpg'} name={'manifest'}/>
        <Item image={'/image/good-doctor.jpeg'} name={'good doctor'}/>
        <Item image={'/image/sweet-home.jpeg'} name={'sweet home'}/>
        <Item image={'/image/harry-poter.jpg'} name={'harry poter'}/>
        <Item image={'/image/moon-knight.jpeg'} name={'moon knight'}/>
        <Item image={'/image/money-heist.jpg'} name={'money heist'}/>
        <Item image={'/image/legacies.jpg'} name={'legacies'}/>
        </div>

        <h2 className={styles.h2} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های کمدی</h2>
        <div className={styles.container}>
        <h4 style={{position:'absolute',left:20,top:-30,color:'#7569FF',cursor:'pointer'}}>see all</h4>
        
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </div>


        <h2 className={styles.h2} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های ترسناک</h2>
        <div className={styles.container}>
        <h4 style={{position:'absolute',left:20,top:-30,color:'#7569FF',cursor:'pointer'}}>see all</h4>
        
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        </div>
        </>
    )
}