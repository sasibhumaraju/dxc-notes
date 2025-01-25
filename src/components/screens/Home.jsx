import React from 'react'
import Navbar from '../widgets/Navbar'
import SKF from '../widgets/SKF'
import styles from '../css/Home.module.css'
import { useSelector } from 'react-redux'

function Home() {
    const istTime = useSelector((store)=>store.time.IST)
  return (
    <section className={styles.home}>
        <Navbar/>
        <div className={styles.content}>
          <SKF/>
        </div>
     
    </section>
  )
}

export default Home