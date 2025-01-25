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
        <div className={styles.message}>
          <div className={styles.heading}>System Operations Guide</div>
          <div className={styles.message_body}>
            Start your SKF mainframe session and navigate to GTSO → ISPF → L.OP → Option 6 to check for WTORs. Before responding with D R,R, verify the database status in the respective regions ex: IIMSP, SIMSP, TIMSP etc.. use code GWC4 while checking, cross verify using skfapps list. If any abnormalities are found, escalate the issue to the relevant team immediately to prevent disruptions.
          </div>
        </div>

        <div className={styles.footer_text}>
            <div> 2025 @<a href='https://www.linkedin.com/in/sasibhumaraju/' target='_blank'>SasiBhumaraju</a>. Made with Love.  </div>
        </div>
     
    </section>
  )
}

export default Home