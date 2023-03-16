import MulticlassName from "../helper/MultiClassName";
import { useEffect, useState } from "react";
import styles from "../styles/input.module.css";
export default function Input({placeholder,errorMsg,name,type,required=false,onChange,setError}:{name:string,required?:boolean,onChange:(e:string,label:string)=>void,placeholder:string,type:"text"|"tel"|"password"|'number',errorMsg:string |null | undefined,setError?:React.Dispatch<React.SetStateAction<object>>}){

  return(
    <div className={errorMsg?MulticlassName([styles.inputgroup,styles.error]):MulticlassName([styles.inputgroup])}>
  <label className={styles.label}>{placeholder}{required&&<span style={{color:'red'}}> * </span>}</label>      
    <input className={styles.input} type={type} maxLength={45} onChange={(e)=>{
        onChange(e.target.value,name)
        if(setError&&errorMsg)
        setError(perv=>({...perv,[name]:null}))
    }}/>
    <div className={styles.errormessage}>{errorMsg}</div>
  </div>)
}