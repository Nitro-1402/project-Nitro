import styles from '../styles/profilecomment.module.css'


export default function Comment ({image='/image/test.jpeg',name='علی', id=12346788,text='این متن تست است برای توضیحات',createdAt='18/1/1400',film='سرقت پول',link=''}:{image?:string,name?:string,number?:number,description?:string,createdAt?:string,film?:string,link?:string}){
    return(
        <div className={styles.container}>
            <div className={styles.head}>
            <img className={styles.img} src={image?image:''} alt="" />
            <div className={styles.name}>نظر {name?name:''} در مورد فیلم <a className={styles.link} href={link}> {film?film:''}</a></div>
            <div className={styles.date}>{createdAt}</div>
            </div>
            <p  className={styles.paragh}>{text}</p>
        </div>
    )
}