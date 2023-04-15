import CustomImage from '@/ui/CustomImage'
import styles from '../styles/explore.module.css'
import { FaPen } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'

export default function Item ({image='/image/test.jpeg',name='terminator', number=12346788,description='این متن تست است برای توضیحات',edit=false}:{edit?:boolean,image?:string,name?:string,number?:number,description?:string}){
    return(
        <div className={styles.item}>
            <div style={{width:"100%",height:227,overflow:'hidden',position:'relative'}}>
            <CustomImage src={image?image:''}style={{width:"100%",height:227,overflow:'hidden', borderRadius:'10px'}}/>
            <div className={styles.effect}>
                <h5>{description}</h5>
            </div>
            </div>
            <h4 style={{marginLeft:10,padding:0,color:'aliceblue'}}>{name}</h4>
            {edit && <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'40px'}}>
            <FaPen size={16} color="orange" title='ویرایش'/>
            <IoCloseSharp size={22} color="red" title='حذف'/>
            </div>}
        </div>
    )
}