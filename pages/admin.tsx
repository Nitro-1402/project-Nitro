
import AdminNews from "@/component/admin/adminNews/AdminNews"
import NewsEdit from "@/component/admin/adminNews/NewsEdit"
import Input from "@/ui/Input"
import { useState } from "react"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaPen,FaFilm,FaNewspaper,FaRegUser, FaRegCommentAlt} from "react-icons/fa"
import FilmList from "@/component/admin/adminFilms/AdminFilms"
import Film from "@/component/admin/adminFilms/FilmsEdit"
import ActorList from "@/component/admin/adminActors/AdminActor"
import Actor from "@/component/admin/adminActors/ActorEdit"



export default function Admin(){
    const[tab,settab]=useState<number>(0)
    return(
        <div style={{minWidth:"100vw",minHeight:"100vh",height:'auto',backgroundColor:"gray",display:"flex",paddingRight:300,direction:'rtl',justifyContent: 'center'}}>
            {tab==0?
            <ActorList settab={settab}/>:
            tab==1?
            <Actor/>:
            tab==2?
            <FilmList settab={settab}/>:
            tab==5?
            <Film/>:
            tab==3?
            <AdminNews settab={settab}/>:
            tab==4?
            <NewsEdit/>:
            <ActorList settab={1}/>
            }
            <div style={{width:300,backgroundColor:'#0C1012',height:"100vh",position:"fixed",right:0,top:0,direction:'rtl',padding:20}}>
                
                <h3 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab(2)
                }}>
                  <FaFilm style={{margin:"0 10px"}}/> 
                  
                  فیلم ها و سریال ها
                
                </h3>
                {/* <Button variant="outlined" startIcon={<DeleteIcon />}/> */}
              

                <h3 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab(0)
                }}>
                  <FaRegUser style={{margin:"0 10px"}}></FaRegUser>
                بازیگران</h3>
                <h3 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab(3)
                }}>
                  <FaNewspaper style={{margin:"0 10px"}}></FaNewspaper>
                  اخبار</h3>
                <h3 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab(3)
                }}>
                  <FaRegCommentAlt style={{margin:"0 10px"}}></FaRegCommentAlt>
                  نظرات</h3>

            </div>


        </div>
    )
}