import CustomBtn from "@/ui/CustomBtn"
import Input from "@/ui/Input"
import { useState } from "react"

export default function Admin(){
    const[tab,settab]=useState<string>('فیلم ها و سریال ها ')
    return(
        <div style={{minWidth:"100vw",minHeight:"100vh",height:'auto',backgroundColor:"white",display:"flex",paddingRight:300,direction:'rtl'}}>
            <div style={{display:'flex',flexDirection:"column"}}>
            <h1 style={{margin:30}}>{tab}</h1>
            <div style={{display:'flex',flexWrap:'wrap',width:700}}>
                <Input
                name="name"
                errorMsg={''}
                required
                type="text"
                placeholder="نام فیلم"
                black
                onChange={()=>{

                }}
                />
                <Input
                name="director"
                errorMsg={''}
                required
                type="text"
                placeholder="نام کارگردان"
                black
                onChange={()=>{

                }}
                />
                 <Input
                name="date"
                errorMsg={''}
                required
                type="text"
                placeholder="تاریخ انتشار"
                black
                onChange={()=>{

                }}
                />
                <Input
                name="director"
                errorMsg={''}
                required
                type="text"
                placeholder="نام بازیگران"
                black
                onChange={()=>{

                }}
                />
                </div>
                <textarea style={{width:450,height:260,margin:20,padding:20,fontSize:18}} placeholder="توضیحات ..."></textarea>

                <input type='file' style={{margin:20}}/>
                <CustomBtn text='اعمال تغییرات' press={()=>{}} style={{
                backgroundColor:'orange',
                border:"2px solid #FFA500",
                borderRadius:'5px',
                width:300,
                height:40,
                margin:20,
                cursor:'pointer'
            }}
            textStyle={{
                color:'white'
            }}/>

            </div>

            <div style={{width:300,backgroundColor:'orange',height:"100vh",position:"fixed",right:0,top:0,direction:'rtl',padding:20}}>

                <h2 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab('فیلم ها و سریال ها ')
                }}>فیلم ها و سریال ها </h2>
                <h2 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab('بازیگران')
                }}>بازیگران</h2>

            </div>


        </div>
    )
}