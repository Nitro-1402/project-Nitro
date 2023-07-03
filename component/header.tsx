import MulticlassName from "@/helper/MultiClassName"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"
import { HiUserCircle } from 'react-icons/hi'
import Link from "next/link"
import AuthStore from "@/pages/store/Auth"
function Header(){
    const user=AuthStore((state:any)=>state.user)
    const router=useRouter()
    return (
        <header className={MulticlassName([styles.container])}>
            {!user?.id?<div onClick={()=>{
                router.push('/register')
            }}>
                <h4>ورود/ثبت نام</h4>
            </div>: <HiUserCircle color={'orange'} size={50} style={{cursor:'pointer'}} onClick={()=>{
                router.push('/profile/myprofile')
            }}/>}
            <div style={{display:'flex',alignItems:'center'}} >
            <div style={{width:400,justifyContent:'space-between',marginRight:80}} className={styles.navbar}>
                <Link style={{color:'white',fontSize:18,marginLeft:5,textDecoration:'none'}} href="/news">اخبار فیلم و سریال ها</Link>
                <Link style={{color:'white',fontSize:18,marginLeft:5,textDecoration:'none'}} href='/movies'>فیلم ها وسریال ها</Link>
                <Link style={{color:'white',fontSize:18,marginLeft:5,textDecoration:'none'}} href='/critisisms'> نقد ها</Link>
            </div>
            <Link style={{display:'flex',alignItems:'center'}} href={'/'}>
                <img src='/image/logo.png'/>
            </Link>
            </div>
        </header>
    )
}
export default Header