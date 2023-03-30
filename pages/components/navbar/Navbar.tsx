import React from 'react'
import CustomImage from '@/ui/CustomImage'
// import TextField from "@mui/material/TextField"
import styles from '/styles/navbar.module.css'


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
                <a href='/' className={styles.login}>Login</a>
                <span>|</span>
                <a href='/' className={styles.signup}>Sign Up</a>
              </div>
            </div>
            <div className={styles.navbarItems}>
              <a href='/' className={styles.items}>Tv Shows</a>
              <a href='/' className={styles.items}>Movies</a>
              <a href='/' className={styles.items}>Watch List</a>
            </div>
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar