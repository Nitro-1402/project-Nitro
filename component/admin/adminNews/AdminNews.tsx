import CustomBtn from "@/ui/CustomBtn"
import CustomImage from "@/ui/CustomImage"
import Input from "@/ui/Input"

function NewsList ({settab}:{settab:any}){

    return(
      <div style={{backgroundColor:'white',width:'400px',height:'420px',padding:'30px',display:'flex',flexDirection:'column',alignItems:'center',margin:'30px'}}>
        <h2 style={{marginBottom:'20px'}}>بازیگر فیلم «انگل» در دنباله «کاپیتان مارول» بازی میکند.</h2>
        <CustomImage src="/news-image/Park-Seo-joon.jpg" style={{width:280,height:200,borderRadius:10,marginBottom:'20px'}}/>
        <div style={{display:'flex',flexDirection:'row'}}>
          <CustomBtn
            press={async () => {settab(3)}}
            style={{
              width: 130,
              height: 40,
              marginLeft:10,
              backgroundColor: "#FFA500",
              borderRadius: 5}}
            text={"حذف"}
            textStyle={{
              color: "white",
              fontSize: 16,
              fontFamily: "RegularPersian"}}/>
          <CustomBtn
            press={async () => {}}
            style={{
              width: 130,
              height: 40,
              marginRight:10,
              backgroundColor: "#FFA500",
              borderRadius: 5,}}
            text={"ویرایش"}
            textStyle={{
              color: "white",
              fontSize: 16,
              fontFamily: "RegularPersian",}}/>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
        </div>
      </div>
    )
}



function AdminNews({settab}:{settab:any}){
    return(
        <div style={{width:'100%',position:'relative',display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'30px'}}>
          <div style={{}}>
            <h1 style={{color:"orange",fontSize:'50px'}}>اخبار</h1>
            <CustomBtn
                press={async () => {settab(4)}}
                style={{
                  width: 160,
                  height: 40,
                  position:'absolute',
                  left:'30px',
                  top:'50px',
                  backgroundColor:'orange',
                  borderRadius:'10px'}}
                text={"افزودن"}
                textStyle={{
                  color: "white",
                  fontSize: 16,
                  fontFamily: "RegularPersian"}}/>
          </div>
          <div style={{}}>
            <NewsList settab={settab}/>
            <NewsList settab={settab}/>
          </div>
        </div>
    )
}

export default AdminNews