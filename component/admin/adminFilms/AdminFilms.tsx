
import Item from "@/component/FilmItem"
import CustomBtn from "@/ui/CustomBtn"
import { useEffect, useState } from 'react';
import axios from 'axios';

function FilmList({settab}:{settab:any}){
  const [items,setItems] = useState<any>([])
  useEffect(() => {
    const payroll = async () => {
        const url = 'https://nitroback.pythonanywhere.com/movies/movies/';
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + localStorage.getItem("accessToken")
        }
      axios.get(url,{
          headers: headers
        }).then(x=>{
          console.log(x)
          setItems(x.data.results)
        }) }
      payroll()
},[])

   
  return(
    <div style={{display:'flex',flexDirection:'column',width:'100%',position:'relative'}}>
        <h1 style={{margin:30,display:"flex",justifyContent:"center",color:"orange",fontSize:'40px'}}>فیلم ها و سریال ها</h1>
        <CustomBtn
              press={async () => {
                settab(5)
              }}
              style={{
                width: 160,
                height: 40,
                marginTop: 10,
                position:'absolute',
                left:30,
                top:30,
                backgroundColor: "#FFA500",
                borderRadius: 5,

              }}
              text={"افزودن"}
              textStyle={{
                color: "white",
                fontSize: 16,
                fontFamily: "RegularPersian",
              }}
            />
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',width:"100%"}}>

            {items.map((item:any)=>(
              <Item key={item} image={item.poster} name={item.title}/>
            ))}
      
      

        </div>
        </div>
  )
}


export default FilmList