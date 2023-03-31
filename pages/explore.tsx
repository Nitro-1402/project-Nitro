import Item from '@/component/FilmItem'
import CustomImage from '@/ui/CustomImage'
import styles from '../styles/explore.module.css'
// import ImageSlider from '@/component/slider/ImageSlider'
// import { SliderData } from '@/component/slider/SliderData'

export default function Explore(){
    return(
        <div className= {styles.mainSection}>
            {/* <ImageSlider slides={SliderData} /> */}
            <h2 className={styles.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های جدید</h2>
            <div className={styles.container}>
                <h4 style={{position:'absolute',left:50,top:-30,color:'#FFA500',cursor:'pointer',}}>see all</h4>
                <Item image={'/image/manifest.jpg'} name={'manifest'}/>
                <Item image={'/image/good-doctor.jpeg'} name={'good doctor'}/>
                <Item image={'/image/sweet-home.jpeg'} name={'sweet home'}/>
                <Item image={'/image/harry-poter.jpg'} name={'harry poter'}/>
                <Item image={'/image/moon-knight.jpeg'} name={'moon knight'}/>
                <Item image={'/image/money-heist.jpg'} name={'money heist'}/>
                <Item image={'/image/legacies.jpg'} name={'legacies'}/>
            </div>

            <h2 className={styles.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های کمدی</h2>
            <div className={styles.container}>
                <h4 style={{position:'absolute',left:50,top:-30,color:'#FFA500',cursor:'pointer'}}>see all</h4>
                <Item image={'/image/manifest.jpg'} name={'manifest'}/>
                <Item image={'/image/good-doctor.jpeg'} name={'good doctor'}/>
                <Item image={'/image/sweet-home.jpeg'} name={'sweet home'}/>
                <Item image={'/image/harry-poter.jpg'} name={'harry poter'}/>
                <Item image={'/image/moon-knight.jpeg'} name={'moon knight'}/>
                <Item image={'/image/money-heist.jpg'} name={'money heist'}/>
                <Item image={'/image/legacies.jpg'} name={'legacies'}/>
            </div>


            <h2 className={styles.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های ترسناک</h2>
            <div className={styles.container}>
                <h4 style={{position:'absolute',left:50,top:-30,color:'#FFA500',cursor:'pointer'}}>see all</h4>
                <Item image={'/image/manifest.jpg'} name={'manifest'}/>
                <Item image={'/image/good-doctor.jpeg'} name={'good doctor'}/>
                <Item image={'/image/sweet-home.jpeg'} name={'sweet home'}/>
                <Item image={'/image/harry-poter.jpg'} name={'harry poter'}/>
                <Item image={'/image/moon-knight.jpeg'} name={'moon knight'}/>
                <Item image={'/image/money-heist.jpg'} name={'money heist'}/>
                <Item image={'/image/legacies.jpg'} name={'legacies'}/>
            </div>
        </div>
    )
}