import React from 'react'
import Navbar from '../widgets/Navbar'
import Menu from './Menu'
import SKF from '../widgets/SKF'
import OKQ8 from '../widgets/OKQ8'
import styles from '../css/Home.module.css'
import { useSelector } from 'react-redux'

function Home() {
    const istTime = useSelector((store)=>store.time.IST)
  return (
    <section className={styles.home}>
        <Navbar/>
       
        <div className={styles.content}>
        <SKF/>
        {/* <OKQ8/> */}
        </div>
        {/* {istTime} */}
     
    </section>
  )
}

export default Home