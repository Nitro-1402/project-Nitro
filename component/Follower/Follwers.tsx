import styles from '/styles/follower.module.css'

export default function Follower ({image='/image/test.jpeg',name='وندزدی', number=12346788,description='این متن تست است برای توضیحات',edit=false}:{edit?:boolean,image?:string,name?:string,number?:number,description?:string}){
    return(
        <div className={styles.item}>
            {/* <div style={{width:"100%",height:227,overflow:'hidden',position:'relative'}}>
            <CustomImage src={image?image:''}style={{width:"100%",height:227,overflow:'hidden', borderRadius:'10px'}}/>
            <div className={styles.effect}>
                <h5>{description}</h5>
            </div>
            </div>
            <h4 style={{marginLeft:10,padding:0,color:'aliceblue'}}>{name}</h4>
            {edit && <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'40px'}}>
            <FaPen size={16} color="orange" title='ویرایش'/>
            <IoCloseSharp size={22} color="red" title='حذف'/>
            </div>} */}
            <img  src={image?image:''} alt="" className={styles.img} />
            <h4 className={styles.name}> {name}</h4>
            <button className={styles.buttom}> دنبال کردن</button>
        </div>
    )
}