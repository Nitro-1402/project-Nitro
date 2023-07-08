import styles from '/styles/follower.module.css'

export default function Follower ({image='/image/test.jpeg',Firstname='وندزدی',Lastname='آدامز',name='username',profile_id='132', number=12346788,description='این متن تست است برای توضیحات',edit=false}:{edit?:boolean,image?:string,Firstname?:string,Lastname?:string,name?:string,profile_id?:number,number?:number,description?:string}){
    // if Firstname | Lastname
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
            <h4 style={{cursor:"pointer"}} onClick={()=>location.href="/profile/"+profile_id} className={styles.name}>  {Firstname}  {Lastname}</h4>
        </div>
    )
}