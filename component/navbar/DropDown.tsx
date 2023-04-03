import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import styles from '/styles/navbar.module.css'
import Link from 'next/link';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}
        onClick={handleClick}
        className={styles.dropdownMenu}>
        {MenuItems.map((item, index) => {
          return (
            <li style={{width:'80px'}} key={index}>
              <Link className={item.cName} href={item.path} onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
