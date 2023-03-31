import React from 'react'
import CustomImage from '@/ui/CustomImage'
// import TextField from "@mui/material/TextField"
import styles from '/styles/navbar.module.css'
import Link from 'next/link'


const Navbar = () => {
  
    return (
      <nav className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.navbarLogo}>
            <CustomImage className={styles.navbarLogo} src="/info-page-image/logo.png" style={{}} alt='BB'/>
          </div>
          <div className={styles.navbarContent}>
            <div className={styles.navTop}>
              <input className={styles.searchBox}></input>
              {/* <TextField className={styles.searchBox} variant="outlined" fullWidth label="Search"/> */}
              <div className={styles.LandS}>
                <Link href='/register' className={styles.login}>Login</Link>
                <span>|</span>
                <Link href='/' className={styles.signup}>Sign Up</Link>
              </div>
            </div>
            <div className={styles.navbarItems}>
              <Link href='/' className={styles.items}>Tv Shows</Link>
              <Link href='/explore' className={styles.items}>Movies</Link>
              <Link href='/' className={styles.items}>Watch List</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar