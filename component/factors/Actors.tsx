import React, { Component } from 'react'
import styles from '/styles/factors.module.css'
import Link from 'next/link'

function Actor ({image='/info-page-image/natasha.webp',name='ناتاشا لیون',link='/'}:{image?:string,name?:string,link?:string}){
    return(
        <Link href={link} className={styles.link} style={{}}>
            {/* <CustomImage src={image?image:''}style={{borderRadius: '40px', width: '40px',padding: '3px'}} alt={name}/> */}
            <div className={styles.actorName} style={{}}>{name}</div>
        </Link>
    )
}

const Actors = ({actors , director}:{actors:any , director:any}) => {
    // console.log(actors)
  return (
    <div className={styles.actors} style={{}}>
        <div className={styles.actor}>    
            <h2 style={{textAlign:'right', paddingRight:'60px', direction: 'rtl',paddingBottom:'20px'}}>بازیگران</h2>
            <div className={styles.act} style={{}}>
            {
                actors?.map((i:any)=>(
                    <Actor name={i.name} link={`/actors/${i.id}`}/>

                ))
            }            
            </div>
        </div>
        <div className={styles.actor}>
            <h2 style={{textAlign:'right', paddingRight:'60px', direction: 'rtl',paddingBottom:'20px'}}>کارگردان</h2>
            <div className={styles.act} style={{display:'flex', flexDirection:'row',textAlign:'right', marginRight:'60px', direction: 'rtl',marginBottom:'10px'}}>
                <Actor name={director.name} link={`/directors/${director.id}`}/>   
            </div>
        </div>
    </div>
  )
}

export default Actors