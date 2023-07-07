
import CustomBtn from "@/ui/CustomBtn"
import Input from "@/ui/Input"


function Actor(){
    return(<>
    
    <div style={{display:'flex',flexDirection:"column"}}>
            <h1 style={{margin:30,display:"flex",justifyContent:"center",color:"orange",fontSize:'40px'}}>بازیگران</h1>
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
export default Actor