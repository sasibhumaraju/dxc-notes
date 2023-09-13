import React from 'react';
import styles from '../css/Navbar.module.css'
import logo from '../../assets/logo.png'
import Menu from '../screens/Menu';
import HamburgerAction from './HamburgerAction';
import ISTTime from './Time';
import Time from './Time';

function Navbar() {
  return (

    <section className={styles.nav_bar}>
        <div className={styles.logo}>
            <img src={logo}></img>
        </div>
        <div className={styles.times}>
            <div>
            <Time heading={"IST  TIME"} timezone={"Asia/Kolkata"}/>
            </div>
            <div>
            <Time heading={"CET  TIME"} timezone={"Europe/Amsterdam"} />
            </div>
        </div>
        {/* <div className={styles.hamburger}>
           <HamburgerAction/>
        </div> */}
    </section>
 

  )
}

export default Navbar