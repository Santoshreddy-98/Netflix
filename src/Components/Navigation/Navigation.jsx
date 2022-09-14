import React from 'react'
import SecondaryNavigation from '../SecondaryNavigation'
import logo from './Assets/logo.png'

import styles from './Navigation.module.css'

const Navigation = () => {
  const navItems=["Home","TV Shows","Movies","New & Popular","My List"]
  return (
    <div className={styles.navigation}>
    <div className={styles.mainNavigation}>
    <img className={styles.logo} src={logo} alt='logo'/>
    <ul className={styles.navigationList}>
      {navItems.map(item=>{
        <li className={styles.navigationItem} key={item}>
        {item}
        </li>
      })}
    </ul>

</div>
<SecondaryNavigation />
</div>
  )
}

export default Navigation