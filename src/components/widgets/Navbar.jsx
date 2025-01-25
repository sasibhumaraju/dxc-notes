import React from 'react';
import styles from '../css/Navbar.module.css'
import logo from '../../assets/logo.png'
import Time from './Time';
import { setCETTime, setISTTime } from '../../store';

function Navbar() {
  return (

    <section className={styles.nav_bar}>
        <div className={styles.logo}>
            <span className={styles.logo_name}>Skf Db Checks</span>
            <span className={styles.logo_slogan}>- sasibhumaraju</span>
        </div>
        <div className={styles.times}>
            <div>
            <Time heading={"CET  TIME"} setTime={setCETTime} timezone={"Europe/Amsterdam"} />
            </div>
        </div>
    </section>
  )
}

export default Navbar