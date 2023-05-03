import MulticlassName from "@/helper/MultiClassName"
import CustomBtn from "@/ui/CustomBtn"
import CustomImage from "@/ui/CustomImage"
import Input from "@/ui/Input"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import {BsEyeFill,BsFillEyeSlashFill} from 'react-icons/bs'
import styles from '../styles/register.module.css'
import { plainToClass } from "class-transformer"
import { SignUpClass } from "@/validator/SignUp"
import { Validate, validate } from "class-validator"
import TransformError from "@/helper/TransformError"
import { RegisterApi } from "@/API/Register"
import {toast} from 'react-toastify'
import AuthStore from "./store/Auth"
function Password({onChange,errorMsg,setError,placeholder="رمز عبور"}:{placeholder?:string,setError?:React.Dispatch<React.SetStateAction<any>>,onChange:(e:string,label:string)=>void,errorMsg:string |null| undefined}){
  const[see,setsee]=useState<boolean>(false)
  return(
    <div style={{position:'relative'}}>
            <Input
              type={!see?"password":"text"}
              placeholder={placeholder}
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
  const[error,setError]=useState<{username:string,password:string,email:string,repeated_password:string}>({
    username:"",
    password:"",
    email:"",
    repeated_password:""
  })
  const init=AuthStore((state:any) => state.init)
  const router=useRouter()
  const ref=useRef<{username:string,password:string,email:string,repeated_password:string}>({
    username:'',
    password:'',
    email:"",
    repeated_password:""
  })
  const onChange=(e:string,label:string)=>{
    if(label=="username")
    ref.current.username=e;
    else if(label=="password")
    ref.current.password=e;
    else if(label=="email")
    ref.current.email=e;
    else if(label=="repeated_password")
    ref.current.repeated_password=e;
  }
  const api=async()=>{
    ref.current=plainToClass(SignUpClass,ref.current)
    let err:any=await validate(ref.current)
    err=TransformError(err)
    if(!err?.password && ref.current.password!=ref.current.repeated_password){
      err.password=['پسورد ها باید یکسان باشند']
      err.repeated_password=['پسورد ها باید یکسان باشند']
    }
    console.log(err)
    if(Object.keys(err)[0])
    setError(err)
    else{
      let a:any=await RegisterApi.SignUp({username:ref.current.username,password:ref.current.password,email:ref.current.email})
      console.log("response",a.content)
      init(a.content)
      if(a?.status=="success")
      router.push('/')
      else
      setError(a?.content)
    }
    console.log(ref.current)
  }
  return(<>
    <Input
    key={'username-signup'}
      required
      type="text"
      placeholder="نام کاربری"
      onChange={onChange}
      name="username"
      errorMsg={error?.username?.[0]}
    />


<Input
key={'email'}
      required
      type="text"
      placeholder="ایمیل"
      onChange={onChange}
      name="email"
      errorMsg={error?.email?.[0]}
    />
    <Input
      required
      type="password"
      placeholder="رمز عبور"
      onChange={onChange}
      name="password"
      errorMsg={error?.password?.[0]}
      />
      <Input
      required
      type="password"
      placeholder=" تایید رمز عبور"
      onChange={onChange}
      name="repeated_password"
      errorMsg={error?.repeated_password?.[0]}
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
              color:"white"
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
  const init=AuthStore((state:any) => state.init)
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
    let a=await RegisterApi.Login(ref.current)
    console.log(a)
    if(a?.status=="success"){

      localStorage.setItem("token",a.content)
      router.push('/')
      // toast.success("به ببینیم خوش امدید")
    }
    else{
      toast.error("مشکلی پیش آمده است")
    }
 }
  return(<>
    <Input
      key={'username'}
      required
      type="text"
      placeholder="نام کاربری"
      onChange={onChange}
      name="username"
      errorMsg={error?.username}
    />

    <Password
    key={'password'}
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
              color:'white'
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
         {!signup?<Login key={'login'} set={setsignup}/>:<SignUp set={setsignup}/>}
      </div>
      </div>
    )
  }