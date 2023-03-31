import MulticlassName from "@/helper/MultiClassName"
import CustomBtn from "@/ui/CustomBtn"
import CustomImage from "@/ui/CustomImage"
import Input from "@/ui/Input"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import {BsEyeFill,BsFillEyeSlashFill} from 'react-icons/bs'
import styles from '../styles/register.module.css'
function Password({onChange,errorMsg,setError}:{setError?:React.Dispatch<React.SetStateAction<any>>,onChange:(e:string,label:string)=>void,errorMsg:string |null| undefined}){
  const[see,setsee]=useState<boolean>(false)
  return(
    <div style={{position:'relative'}}>
            <Input
              type={!see?"password":"text"}
              placeholder="رمز عبور"
              required
              onChange={onChange}
              name="password"
              errorMsg={errorMsg}
              setError={setError}
            />
            {see?<BsEyeFill style={{position:'absolute',left:30,top:40,zIndex:1000}} size={18} color={'#FFA500'} onClick={()=>{
              setsee(false)
            }}/>:<BsFillEyeSlashFill style={{position:'absolute',left:30,top:40,zIndex:1000}} size={18} color={'#FFA500'} onClick={()=>{
              setsee(true)
            }}/>}

    </div>
  )
}






const SignUp=({set}:{set:React.Dispatch<React.SetStateAction<boolean>>})=>{
  const[error,setError]=useState<{username:string,password:string,email:string}>({
    username:"",
    password:"",
    email:""
  })
  const router=useRouter()
  const ref=useRef<{username:string,password:string,email:string}>({
    username:'',
    password:'',
    email:""
  })
  const onChange=(e:string,label:string)=>{
    if(label=="username")
    ref.current.username=e;
    else if(label=="password")
    ref.current.password=e;
    else if(label=="email")
    ref.current.email=e;
  }
  const api=async()=>{
    console.log(ref.current)
  }
  return(<>
    <Input
      required
      type="text"
      placeholder="نام کاربری"
      onChange={onChange}
      name="username"
      errorMsg={error?.username}
    />


<Input
      required
      type="text"
      placeholder="ایمیل"
      onChange={onChange}
      name="email"
      errorMsg={error?.email}
    />

<Password
    onChange={onChange}
    errorMsg={""}
    />

   
          <CustomBtn
            key={"login"}
            press={async() => {
              await api()
            }}
            style={{
              width: 300,
              height: 40,
              marginTop: 10,
              backgroundColor: "#FFA500",
              borderRadius: 5,
            }}
            text={"ورود"}
            textStyle={{
              color: "white",
              fontSize: 16,
              fontFamily: "RegularPersian",
            }}
          />
          <h6
            style={{
              fontFamily: "RegularPersian",
              fontSize: 12,
              width: 340,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            ثبت نام کرده اید؟{" "}
            <span
              style={{ color: "#FFA500", cursor: "pointer" }}
              onClick={() => {
                set(false)
              }}
            >
              وارد شوید
            </span>{" "}
          </h6>
  </>)
}







const Login=({set}:{set:React.Dispatch<React.SetStateAction<boolean>>})=>{
  const[error,setError]=useState<{username:string,password:string}>({
    username:"",
    password:""
  })
  const router=useRouter()
  const ref=useRef<{username:string,password:string}>({
    username:'',
    password:''
  })
  const onChange=(e:string,label:string)=>{
    if(label=="username")
    ref.current.username=e;
    else if(label=="password")
    ref.current.password=e;
  }
  const api=async()=>{
    console.log(ref.current)
  }
  return(<>
    <Input
      required
      type="text"
      placeholder="نام کاربری"
      onChange={onChange}
      name="username"
      errorMsg={error?.username}
    />

    <Password
    onChange={onChange}
    errorMsg={""}
    />

          <CustomBtn
            key={"login"}
            press={async() => {
              await api()
            }}
            style={{
              width: 300,
              height: 40,
              marginTop: 10,
              backgroundColor: "#FFA500",
              borderRadius: 5,
            }}
            text={"ورود"}
            textStyle={{
              color: "white",
              fontSize: 16,
              fontFamily: "RegularPersian",
            }}
          />
          <h6
            style={{
              fontFamily: "RegularPersian",
              fontSize: 12,
              width: 340,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            ثبت نام نکرده اید؟{" "}
            <span
              style={{ color: "#FFA500", cursor: "pointer" }}
              onClick={() => {
                set(true)
              }}
            >
              ثبت نام کنید
            </span>{" "}
          </h6>
  </>)
}

export default function Register() {
  const[signup,setsignup]=useState<boolean>(false)
    return (
      <div className={styles.main}>
      <div className={styles.bg}></div>
      <div className={MulticlassName([styles.container])}>
        <CustomImage src="/image/logo.png" style={{  }} />
         {!signup?<Login set={setsignup}/>:<SignUp set={setsignup}/>}
      </div>
      </div>
    )
  }