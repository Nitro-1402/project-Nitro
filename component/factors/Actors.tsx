import React, { Component } from 'react'
import styles from '/styles/factors.module.css'
import CustomImage from '@/ui/CustomImage'
import Link from 'next/link'

function Actor ({image='/info-page-image/natasha.webp',name='ناتاشا لیون',link='/'}:{image?:string,name?:string,link?:string}){
    return(
        <Link href={link} style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',width:'140px' ,backgroundColor:'gray', borderRadius:'20px',textDecoration:'none', color:'aliceblue', marginLeft:'7px'}}>
            <CustomImage src={image?image:''}style={{borderRadius: '40px', width: '40px',padding: '3px'}} alt={name}/>
            <div className={styles.actorName} style={{}}>{name}</div>
        </Link>
    )
}

const Actors = () => {
  return (
    <div>
        <h2 style={{textAlign:'right', paddingRight:'60px', direction: 'rtl',paddingBottom:'20px'}}>بازیگران</h2>
        <div style={{display:'flex', flexDirection:'row',textAlign:'right', marginRight:'60px', direction: 'rtl',marginBottom:'10px'}}>
            <Actor image={'/info-page-image/natasha.webp'} name={'ناتاشا لیون'} link='/actor'/>
            <Actor image={'/info-page-image/natasha.webp'} name={'ناتاشا لیون'} link='/'/>
            <Actor image={'/info-page-image/natasha.webp'} name={'ناتاشا لیون'} link='/'/>
            <Actor image={'/info-page-image/natasha.webp'} name={'ناتاشا لیون'} link='/'/>
        </div>
    </div>
  )
}

export default Actors