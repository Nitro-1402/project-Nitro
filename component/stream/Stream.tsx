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
                <p className={styles.streamBoxText}>همین حالا تماشا کنید</p>
            </div>
        </div>
    </div>
  )
}

export default Stream