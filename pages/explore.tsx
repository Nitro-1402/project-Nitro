import Item from '@/component/FilmItem'
import CustomImage from '@/ui/CustomImage'
import styles from '../styles/watchlist.module.css'

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