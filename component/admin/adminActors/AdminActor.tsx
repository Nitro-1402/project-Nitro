
import Item from "@/component/FilmItem"
import Actors from "@/component/factors/Actors"
import CustomBtn from "@/ui/CustomBtn"
import CustomImage from "@/ui/CustomImage"
import { useEffect, useState } from 'react';
import axios from 'axios';


// function ActorComponent(){

//     return(
//         <div style={{width:"90%",height:120,backgroundColor:'white',boxShadow:"1px 1px 2px 2px rgba(166, 166, 166, 0.5)",display:'flex',justifyContent:'space-between',alignItems:'center',margin:"20px 0",borderRadius:10,padding:"10px 30px",direction:'ltr'}}>
//            <div style={{display:'flex',alignItems:'center'}}>
//             <CustomImage src="" style={{width:100,height:100,borderRadius:50}}/>
//             <div style={{marginLeft:20}}>
//             <h2>بازیگر</h2>
//             </div>
//            </div>
//             <div>
//             <CustomBtn
//               press={async () => {

//               }}
//               style={{
//                 width: 160,
//                 height: 40,
//                 backgroundColor: "#FFA500",
//                 borderRadius: 5,

//               }}
//               text={"حذف"}
//               textStyle={{
//                 color: "white",
//                 fontSize: 16,
//                 fontFamily: "RegularPersian",
//               }}
//             />
//             <CustomBtn
//               press={async () => {

//               }}
//               style={{
//                 width: 160,
//                 height: 40,
//                 marginTop: 10,
//                 backgroundColor: "#FFA500",
//                 borderRadius: 5,

//               }}
//               text={"ویرایش"}
//               textStyle={{
//                 color: "white",
//                 fontSize: 16,
//                 fontFamily: "RegularPersian",
//               }}
//             />
//             </div>
//         </div>
//     )

// }

function ActorList({settab}:{settab:any}){
    const [items,setItems] = useState<any>([])
    useEffect(() => {
      const payroll = async () => {
          const url = 'https://nitroback.pythonanywhere.com/movies/actors/';
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
        <h1 style={{margin:30,display:"flex",justifyContent:"center",color:"orange",fontSize:'40px'}}>بازیگران</h1>
        <CustomBtn
              press={async () => {
                settab(1)
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
        {/* <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:"100%"}}>
            <ActorComponent/>
        </div> */}
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',width:"100%"}}>

            {items.map((item:any)=>(
            <Item key={item} image={item.photo} name={item.name}/>
            ))}

        </div>
        </div>
    )
}

export default ActorList