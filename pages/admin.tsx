import Item from "@/component/FilmItem"
import CustomBtn from "@/ui/CustomBtn"
import CustomImage from "@/ui/CustomImage"
import DropDown from "@/ui/DropDown"
import Input from "@/ui/Input"
import { useState } from "react"
import { FaPen } from "react-icons/fa"
function ActorComponent(){

    return(
        <div style={{width:"90%",height:120,backgroundColor:'white',boxShadow:"1px 1px 2px 2px rgba(166, 166, 166, 0.5)",display:'flex',justifyContent:'space-between',alignItems:'center',margin:"20px 0",borderRadius:10,padding:"10px 30px",direction:'ltr'}}>
           <div style={{display:'flex',alignItems:'center'}}>
            <CustomImage src="/image/bradpit.jpg" style={{width:100,height:100,borderRadius:50}}/>
            <div style={{marginLeft:20}}>


            <h2>ali konteratchi</h2>
            <h4>بازیگر</h4>
                
                
            </div>

           </div>
            <div>
            <CustomBtn
              press={async () => {

              }}
              style={{
                width: 160,
                height: 40,
                backgroundColor: "#FFA500",
                borderRadius: 5,

              }}
              text={"حذف"}
              textStyle={{
                color: "white",
                fontSize: 16,
                fontFamily: "RegularPersian",
              }}
            />
            <CustomBtn
              press={async () => {

              }}
              style={{
                width: 160,
                height: 40,
                marginTop: 10,
                backgroundColor: "#FFA500",
                borderRadius: 5,

              }}
              text={"ویرایش"}
              textStyle={{
                color: "white",
                fontSize: 16,
                fontFamily: "RegularPersian",
              }}
            />
            </div>
        </div>
    )

}
function FilmList({settab}:{settab:any}){
  return(
    <div style={{display:'flex',flexDirection:'column',width:'100%',position:'relative'}}>
        <h1 style={{direction:'rtl',margin:40,marginRight:550,color:"yellow"}}>فیلم ها و سریال ها</h1>
        <CustomBtn
              press={async () => {
                settab(3)
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
      <Item image={'/image/swarm.jpg'} name={'ازدحام'} edit/>
      <Item image={'/image/meydanSorkh.jpg'} name={'میدان سرخ'} edit/>
      <Item image={'/image/lastOfUs.webp'} name={'آخرین نفر از ما'} description="" edit/>
      <Item image={'/image/iron-man.jpg'} name={'مرد آهنی'} edit/>
      <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'} edit/>
      <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'} edit/>
      <Item image={'/image/swarm.jpg'} name={'ازدحام'} edit/>
      <Item image={'/image/meydanSorkh.jpg'} name={'میدان سرخ'} edit/>
      <Item image={'/image/lastOfUs.webp'} name={'آخرین نفر از ما'} description="" edit/>
      <Item image={'/image/iron-man.jpg'} name={'مرد آهنی'} edit/>
      <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'} edit/>
      <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'} edit/>
      <Item image={'/image/swarm.jpg'} name={'ازدحام'} edit/>
      <Item image={'/image/meydanSorkh.jpg'} name={'میدان سرخ'} edit/>
      <Item image={'/image/lastOfUs.webp'} name={'آخرین نفر از ما'} description="" edit/>
      <Item image={'/image/iron-man.jpg'} name={'مرد آهنی'} edit/>
      <Item image={'/image/moon-knight.jpeg'} name={'شوالیه ماه'} edit/>
      <Item image={'/image/money-heist.jpg'} name={'خانه کاغذی'} edit/>

        </div>
        </div>
  )
}
function ActorList({settab}:{settab:any}){
    return(
        <div style={{display:'flex',flexDirection:'column',width:'100%',position:'relative'}}>
        <h1 style={{direction:'rtl',margin:40,marginRight:550,color:"yellow"}}>بازیگران</h1>
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
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:"100%"}}>


            <ActorComponent/>
            <ActorComponent/>
            <ActorComponent/>
            <ActorComponent/>

        </div>
        </div>
    )
}
function Actor(){
    return(<>
    
    <div style={{display:'flex',flexDirection:"column"}}>
            <h1 style={{margin:30,color:"orange",marginRight:300}}>بازیگران</h1>
            <div style={{display:'flex',flexWrap:'wrap',width:700}}>
                <Input
                name="name"
                errorMsg={''}
                required
                type="text"
                placeholder="نام"
                onChange={()=>{

                }}
                />
                 <Input
                name="date"
                errorMsg={''}
                required
                type="text"
                placeholder="تاریخ تولد"
                onChange={()=>{

                }}
                />
                </div>
                <textarea style={{width:640,height:260,margin:20,padding:20,fontSize:18}} placeholder="bio ..."></textarea>

                <input type='file' style={{margin:20,marginRight:300}}/>
                <CustomBtn text='اعمال تغییرات' press={()=>{}} style={{
                backgroundColor:'orange',
                border:"2px solid #FFA500",
                borderRadius:'5px',
                width:300,
                height:40,
                margin:20,
                cursor:'pointer',
                marginRight:200
                
            }}
            textStyle={{
                color:'white'
            }}/>

            </div>

    
    
    </>)
}
function Film(){
    return(<>
    
    <div style={{display:'flex',flexDirection:"column"}}>
            <h1 style={{margin:30,marginRight:440,color:"yellow"}}>فیلم ها و سریال ها </h1>
            <div style={{display:'flex',flexWrap:'wrap',width:700}}>
                <Input
                name="name"
                errorMsg={''}
                required
                type="text"
                placeholder="نام فیلم"
                onChange={()=>{

                }}
                />
                <div style={{marginTop:20}}>

                <DropDown change={()=>{}} data={[]} trash={false} name="نام کارگردان"/>

                </div>
                 <Input
                name="date"
                errorMsg={''}
                required
                type="text"
                placeholder="تاریخ انتشار"
                onChange={()=>{

                }}
                />
                
                <div style={{marginTop:20,}}>

                <DropDown change={()=>{}} data={[]} trash={false} name="نام بازیگران"  />
                </div>
                <Input
                name="date"
                errorMsg={''}
                required
                type="text"
                placeholder="ژانر"
                
                onChange={()=>{

                }}
                />
                </div>
                <textarea style={{width:300,height:150,margin:20,padding:20,fontSize:18}} placeholder="توضیحات ..."></textarea>

                <input type='file' style={{margin:20,marginRight:130}}/>
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

    
    
    </>)
}
export default function Admin(){
    const[tab,settab]=useState<number>(0)
    return(
        <div style={{minWidth:"100vw",minHeight:"100vh",height:'auto',backgroundColor:"white",backgroundImage:"url(/image/bg.png)",display:"flex",paddingRight:300,direction:'rtl'}}>
            {tab==0?
            <ActorList settab={settab}/>:
            tab==1?
            <Actor/>
            :
            tab==2?
            <FilmList settab={settab}/>
          :<Film/>}
            <div style={{width:300,backgroundColor:'orange',height:"100vh",position:"fixed",right:0,top:0,direction:'rtl',padding:20}}>

                <h2 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab(2)
                }}>فیلم ها و سریال ها </h2>
                <h2 style={{color:'white',margin:20,cursor:'pointer'}} onClick={()=>{
                    settab(0)
                }}>بازیگران</h2>

            </div>


        </div>
    )
}