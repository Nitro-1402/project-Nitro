import CustomBtn from "@/ui/CustomBtn"
import CustomImage from "@/ui/CustomImage"
import DropDown from "@/ui/DropDown"
import Input from "@/ui/Input"
function NewsEdit(){
    return(<>
        <div style={{display:'flex',flexDirection:"column",alignItems:'center',paddingTop:'30px'}}>
            <h1 style={{color:'orange',fontSize:'50px',paddingBottom:'30px'}}>اخبار</h1>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div  style={{display:"flex", flexDirection:"column"}}>
                    <div style={{}}>
                        <Input
                        name="title"
                        errorMsg={''}
                        required
                        type="text"
                        placeholder="عنوان"
                        onChange={()=>{}}/>

                    </div>
                    <textarea name="description" required style={{marginRight:'20px',marginTop:'20px',width:'300px',height:'131px'}} placeholder="توضیحات ..."></textarea>
                    <div style={{display:'flex',flexDirection:'column',margin:'20px'}}>
                        <input type='file' name="photo" style={{color:'orange',marginBottom:'20px'}}/>
                        <input type='file' name="thumbnail" style={{color:'orange'}}/>
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{}}>
                        <Input
                        name="movies"
                        errorMsg={''}
                        required
                        type="text"
                        placeholder="فیلم ها"
                        onChange={()=>{}}/>
                    </div>

                    <div style={{}}>
                        <Input
                        name="actors"
                        errorMsg={''}
                        required
                        type="text"
                        placeholder="بازیگران"
                        onChange={()=>{}}/>
                    </div>

                    <div style={{}}>
                            <Input
                            name="directors"
                            errorMsg={''}
                            required
                            type="text"
                            placeholder="کارگردان"
                            onChange={()=>{}}/>
                    </div>
                </div>
            </div>
            <div>
                <CustomBtn text='اعمال تغییرات' press={()=>{}} style={{
                backgroundColor:'orange',
                border:"2px solid #FFA500",
                borderRadius:'5px',
                width:300,
                height:40,
                margin:20,
                cursor:'pointer'}}
                textStyle={{color:'white'}}/>
            </div>
        </div>
    </>)
}
export default NewsEdit