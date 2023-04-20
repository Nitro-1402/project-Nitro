import MulticlassName from "@/helper/MultiClassName"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"
import { HiUserCircle } from 'react-icons/hi'
import Link from "next/link"
function Header(){
    const router=useRouter()
    const user:any = {}
    return (
        <header className={MulticlassName([styles.container])}>
            {!user?.id?<div onClick={()=>{
                router.push('/register')
            }}>
                <h4>ورود/ثبت نام</h4>
            </div>: <HiUserCircle color={'#7569FF'} size={50} style={{cursor:'pointer'}} onClick={()=>{
                router.push('/profile')
            }}/>}
            <div style={{display:'flex',alignItems:'center'}} >
            <div style={{width:400,justifyContent:'space-between',marginRight:80}} className={styles.navbar}>
                <Link style={{color:'white',fontSize:18,marginLeft:5,textDecoration:'none'}} href="/news">اخبار فیلم و سریال ها</Link>
                <Link style={{color:'white',fontSize:18,marginLeft:5,textDecoration:'none'}} href='/'>فیلم ها وسریال ها</Link>
                <Link style={{color:'white',fontSize:18,marginLeft:5,textDecoration:'none'}} href='/'>بازیگران</Link>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <img src='/image/logo.png'/>
            </div>
            </div>
        </header>
    )
}
export default Header