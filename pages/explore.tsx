import Item from '@/component/FilmItem'
import styles from '../styles/explore.module.css'
import Navbar from '@/component/navbar/Navbar'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: '/slider-image/gotham.jpg'},
    { url: '/slider-image/wednesday.jpg'},
    { url: '/slider-image/aquman.jpg'},
    { url: '/slider-image/shadow&bone.jpg'},
    { url: '/slider-image/good-doctor.jpg'},
    { url: '/slider-image/chuky.jpg'},
    { url: '/slider-image/lucky-hank.jpg'},
    { url: '/slider-image/black-list.jpg'}
    
  ];
export default function Explore(){
    return(
        <div className= {styles.mainSection}>
            <Navbar/>
            <div>
            <SimpleImageSlider
                width={'100%'}
                height={720}
                images={images}
                showBullets={true}
                showNavs={true}/>
            </div>
            <div className='ganreItem'style={{backgroundColor:'#3d3d3d', paddingTop:'20px', paddingRight:30}}>
                <h2 className={styles.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های جدید</h2>
                <div className={styles.container}>
                    <h4 style={{position:'absolute',left:50,top:120,color:'#FFA500',cursor:'pointer',backgroundColor:'black',padding:10,borderRadius:10}}>see all</h4>
                    <Item image={'/image/manifest.jpg'} name={'لیست پرواز'}/>
                    <Item image={'/image/good-doctor.jpeg'} name={'دکتر خوب'}/>
                    <Item image={'/image/sweet-home.jpeg'} name={'سوییت هوم'}/>
                    <Item image={'/image/harry-poter.jpg'} name={'هری پاتر'}/>
                    <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'}/>
                    <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'}/>
                    <Item image={'/image/legacies.jpg'} name={'میراث ها'}/>
                </div>
            </div>

            <div className='ganreItem' style={{backgroundColor:'#3d3d3d', paddingTop:'20px', paddingRight:30}}>
                <h2 className={styles.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های کمدی</h2>
                <div className={styles.container}>
                    <h4 style={{position:'absolute',left:50,top:120,color:'#FFA500',cursor:'pointer',backgroundColor:'black',padding:10,borderRadius:10}}>see all</h4>
                    <Item image={'/image/shahrBano.webp'} name={'شهربانو'}/>
                    <Item image={'/image/alice.jpg'} name={'آلیس در سرزمین مرزی'}/>
                    <Item image={'/image/spider-man.jpg'} name={'مزد عنکبوتی دور از خانه'}/>
                    <Item image={'/image/swarm.jpg'} name={'ازدحام'}/>
                    <Item image={'/image/meydanSorkh.jpg'} name={'میدان سرخ'}/>
                    <Item image={'/image/lastOfUs.webp'} name={'آخرین نفر از ما'}/>
                    <Item image={'/image/iron-man.jpg'} name={'مرد آهنی'}/>
                </div>
            </div>

            <div className='ganreItem'style={{backgroundColor:'#3d3d3d', paddingTop:'20px', paddingRight:30}}>
                <h2 className={styles.title} style={{direction:'rtl',marginRight:30,fontSize:30}}>فیلم های ترسناک</h2>
                <div className={styles.container}>
                    <h4 style={{position:'absolute',left:50,top:120,color:'#FFA500',cursor:'pointer',backgroundColor:'black',padding:10,borderRadius:10}}>see all</h4>
                    <Item image={'/image/ant-man.webp'} name={'مرد مورچه ای'}/>
                    <Item image={'/image/allOfUs.jpg'} name={'همه ما مرده ایم'}/>
                    <Item image={'/image/soghot.webp'} name={'سقوط'}/>
                    <Item image={'/image/trainToBusan.jpg'} name={'قطار بوسان'}/>
                    <Item image={'/image/yaghi.webp'} name={'یاقی'}/>
                    <Item image={'/image/latari.jpg'} name={'لاتاری'}/>
                    <Item image={'/image/poker-face.webp'} name={'پوکر فیس'}/>
                </div>
            </div>
        </div>
    )
}