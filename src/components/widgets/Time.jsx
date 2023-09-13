import React, { useEffect } from 'react'
import styles from '../css/ISTTime.module.css';

function Time({heading,timezone}) {

const  updateClock = () => {
        const now = new Date();
        const options = {
            timeZone: timezone,
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        const istTime = now.toLocaleTimeString('en-US', options);
        document.getElementById(timezone).textContent = istTime;
    }

    useEffect(()=>{
        setInterval(updateClock, 1000);
        updateClock();
    },[])
   
  return (
    <div className={styles.time}>
         <div className={styles.heading}>{heading}</div> 
         <div className={styles.content} id={timezone}></div>
    </div>
  )
}

export default Time