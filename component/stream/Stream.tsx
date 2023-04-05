import React from 'react'
import CustomImage from '@/ui/CustomImage'
import styles from '/styles/info.module.css'

const Stream = () => {
  return (
    <div className={styles.streamPlace}>
        <div className={styles.contentStream}>
            <CustomImage className={styles.streamLogo} src="/info-page-image/filimo-logo.png" style={{ height: '45px', paddingLeft: '5px'}}/>
            <p className={styles.streamText} >در فیلیمو تماشا کنید</p>
            <div className={styles.streamBox}>
                <a href="https://www.filimo.com/m/130742/%D9%BE%D9%88%DA%A9%D8%B1_%D9%81%DB%8C%D8%B3" className={styles.streamBoxText}>همین حالا تماشا کنید</a>
                
            </div>
        </div>
    </div>
  )
}

export default Stream