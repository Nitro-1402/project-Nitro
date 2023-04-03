import React ,{ useState } from 'react'
import CustomImage from '@/ui/CustomImage'
// import TextField from "@mui/material/TextField"
import styles from '/styles/navbar.module.css'
import Link from 'next/link'
import Dropdown from './DropDown'


function Navbar() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
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
                <Link href='/register' className={styles.login}>ورود</Link>
                <span className={styles.line}>|</span>
                <Link href='/' className={styles.signup}>ثبت نام</Link>
              </div>
            </div>
            <div className={styles.navbarItems}>
              <ul className={styles.items}>
                <li className={styles.navItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link href='/' onClick={closeMobileMenu} > 
                      سریال 
                  </Link> 
                  {dropdown && <Dropdown/>}
                </li>
              </ul>
              <Link href='/explore' className={styles.items} > فیلم </Link>
              <Link href='/' className={styles.items}> انیمه </Link>
              <Link href='/' className={styles.items}>واچ لیست</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  
}

export default Navbar