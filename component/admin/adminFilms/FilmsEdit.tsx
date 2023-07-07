import CustomBtn from "@/ui/CustomBtn"
import DropDown from "@/ui/DropDown"
import Input from "@/ui/Input"
function Film(){
    return(<>
    
    <div style={{display:'flex',flexDirection:"column"}}>
            <h1 style={{margin:30,display:"flex",justifyContent:"center",color:"orange",fontSize:'40px'}}>فیلم ها و سریال ها </h1>
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

export default Film