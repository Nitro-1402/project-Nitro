import MulticlassName from "../helper/MultiClassName";
import { useEffect, useState } from "react";
import styles from "../styles/input.module.css";
export default function Input({placeholder,errorMsg,name,type,required=false,onChange,setError,black=false}:{name:string,black?:boolean,required?:boolean,onChange:(e:string,label:string)=>void,placeholder:string,type:"text"|"tel"|"password"|'number',errorMsg:string |null | undefined,setError?:React.Dispatch<React.SetStateAction<object>>}){
  const[direction,setdir]=useState<boolean>(true)
  return(
    <div className={errorMsg?MulticlassName([styles.inputgroup,styles.error]):MulticlassName([styles.inputgroup])}>
  <label className={styles.label} style={{color:black?'black':"white"}}>{placeholder}{required&&<span style={{color:'red'}}> * </span>}</label>      
    <input className={styles.input} style={{direction:direction?'rtl':'ltr',paddingLeft:40}} type={type} maxLength={45} onChange={(e)=>{
        var reg = /^[a-z]+$/i;
        if(e.target.value)
        setdir(!reg.test(e.target.value?.[0]))
        else
        setdir(true)
        onChange(e.target.value,name)
        if(setError&&errorMsg)
        setError(perv=>({...perv,[name]:null}))
    }}/>
    <div className={styles.errormessage}>{errorMsg}</div>
  </div>)
}