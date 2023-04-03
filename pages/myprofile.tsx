import Item from '@/component/FilmItem'
import CustomBtn from '@/ui/CustomBtn'
import CustomImage from '@/ui/CustomImage'
import { useState  } from 'react'
import styles from '../styles/myprofile.module.css'
import Navbar from '@/component/navbar/Navbar'
function Head(){
    return(
        <div style={{ position: 'relative'}}>
        <CustomImage src='' style={{ width: "100vw", height: "12vw", minHeight: "100px"}} />
        <div  className={styles.container}>
            <div style={{ display: 'flex', alignItems: "center" ,marginRight:10,marginBottom:10}}>
                <CustomImage src="" style={{ width: "12vw", height: "12vw", minHeight: "110px", minWidth: "110px", borderRadius: "50%" }} />
                <div style={{ marginLeft: 25 }}>
                    <h1 className={styles.name}>Reza Noori</h1>
                    <h3 className={styles.email}>noorireza200@gmail.com</h3>
                </div>
            </div>
            <CustomBtn  text='ادیت پروفایل' press={()=>{location.href='/editprofile'}} style={{
                backgroundColor:'orange',
                border:"2px solid #FFA500",
                borderRadius:'5px',
                width:200,
                height:34,
                cursor:'pointer'
            }}
            
            textStyle={{
                color:'#000000'
            }}
            />
            </div>
    </div>
    )}
function Menu({menu}:{menu?:string[]}){
    const[select,setselect]=useState<number>(0)
    return(

        <div style={{display:'flex',width:"100%",padding:"0 40px"}} className={styles.menu}>

            {menu?.map((e:string,index:number)=>{
                return(
                    <h2  style={{padding:5,borderBottom:index==select?"2px solid #FFA500":"",cursor:"pointer",margin:"0 20px"}} onClick={()=>{
                        setselect(index)
                    }} className={styles.menuItem}>{e}</h2>
                )
            })}

        </div>

    )
}

export default function Profile() {
    return (

        <>
        <Navbar />
        <Head/>
        
        <Menu menu={['فیلم هایی که دیدی','فیلم هایی که داری میبینی',' فیلم هایی که میخوای ببینی ']}/>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:15, backgroundColor:"#3d3d3d"}}>
                    <Item image={'/image/manifest.jpg'} name={'لیست پرواز'}/>
                    <Item image={'/image/good-doctor.jpeg'} name={'دکتر خوب'}/>
                    <Item image={'/image/sweet-home.jpeg'} name={'سوییت هوم'}/>
                    <Item image={'/image/harry-poter.jpg'} name={'هری پاتر'}/>
                    <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'}/>
                    <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'}/>
                    <Item image={'/image/legacies.jpg'} name={'میراث ها'}/>
                    <Item image={'/image/shahrBano.webp'} name={'شهربانو'}/>
                    <Item image={'/image/alice.jpg'} name={'آلیس در سرزمین مرزی'}/>
                    <Item image={'/image/spider-man.jpg'} name={'مزد عنکبوتی دور از خانه'}/>
                    <Item image={'/image/swarm.jpg'} name={'ازدحام'}/>
                    <Item image={'/image/meydanSorkh.jpg'} name={'میدان سرخ'}/>
                    <Item image={'/image/lastOfUs.webp'} name={'آخرین نفر از ما'}/>
                    <Item image={'/image/iron-man.jpg'} name={'مرد آهنی'}/>

        </div>
        </>

    )
}