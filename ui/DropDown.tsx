import React, { useState,useEffect } from "react";
import styles from "../styles/dropdown.module.css";
import {IoChevronDownOutline,IoTrash} from 'react-icons/io5'

function DropDown({change,data=[],name,sp,trash=true}:{sp?:string,trash?:boolean,change:(e:any)=>void,name:string,data:any[]}) {
  const [show, setShow] = useState(false);
  const [choose, setchoose] = useState<string | null>(null);
  useEffect(()=>{
  if(sp)
  setchoose(sp)
  },[sp])
  return (
    <div style={{display:'flex',alignItems:'center'}}>
    <div tabIndex={0} className={styles.container} style={{width:250}} onClick={()=>{
        setShow(!show)
    }} onBlur={()=>{
        setShow(false)
    }}>
        <IoChevronDownOutline color={'#7569FF'} size={18}/>
        <h3 className={styles.text} style={{color:'black'}}>{choose?choose:name}</h3>
        <div className={styles.items} style={{display:!show?'none':'block',borderWidth:!show?0:1,height:200,overflow:'auto'}}>
       {data.map((e:any)=>{
        return(<h3 onClick={()=>{
          if(e.id){
            setchoose(e.name)
            change(e.id)
          }
          else{

            setchoose(e)
            change(e)
          }
        }} className={styles.item}>{e.id?e.name:e}</h3>)
       })} 
        </div>
    </div>
   {choose && trash ? <IoTrash style={{cursor:'pointer'}} onClick={()=>{
            setchoose(null)
            change(null)
        }} color={'red'} size={18} />:<div style={{width:15,height:10}}></div>}
    </div>
  )
}
export default React.memo(DropDown);