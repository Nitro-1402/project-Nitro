import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';

export default function CustomImage({src,style,className='',alt=''}:{alt?:string,src:string,style:React.CSSProperties,className?:string}){
    const[load,setload]=useState<boolean>(false)
    useEffect(()=>{
        const Img=new Image;
        Img.onload= async function(){
            setload(true)
        }
        Img.src=src
    },[])
    return(
        <>
        {load?
        <img className={className} src={src} style={style} alt={alt}/>
        :<Shimmer  style={style}/>}</>
    )
}