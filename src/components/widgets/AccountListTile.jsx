import React, { useEffect, useState } from 'react'
import styles from '../css/AccountListTile.module.css'
import { useSelector } from 'react-redux';
import { areTimesApproximatelyEqual } from '../../util/GetTimeDif';
import { Toast } from '@sasibhumaraju/react-toast';
import controller from '../../Controller';
import warnAudio from "../../audio/warning.mp3"

function AccountListTile({beforeTime,cetTime,afterTime,region,imsRegion,code,keyCode}) {

  const [bgColor, setBgColor] = useState(false)  
  const copyKeyCode = (text) => {
            navigator.clipboard.writeText(text);
            Toast.info(`copy: ${text}`)
            controller.showToast("" + text)
  }

  const audio = new Audio(warnAudio);

  const setBackGroundColor = () => {
    console.log(beforeTime,afterTime,cetTime)
    const currentTime = new Date().toLocaleTimeString('en-US',{timeZone: "Europe/Amsterdam",hour12: false,hour: 'numeric',minute: 'numeric'});
    if(currentTime >= beforeTime && currentTime <= afterTime) {
        setBgColor(true);
        audio.play()
    }
    else setBgColor(false);

  }

  useEffect(()=>{
    
   
    const interval = setInterval(setBackGroundColor,10000);
    return () => clearInterval(interval);
  },[])

  return (
    <div className={`${styles.list_tile} ${bgColor? styles.disco_bg : null}`}   >
       

        <div className={styles.item} onClick={()=>copyKeyCode(cetTime)}>
            <div className={styles.item_content}> {cetTime}</div>
        </div>

        <div className={styles.item} onClick={()=>copyKeyCode(region)}>
            <div className={styles.item_content}> {region}</div>
        </div>

        <div className={styles.item} onClick={()=>copyKeyCode(imsRegion)}>
            <div className={styles.item_content}> {imsRegion}</div>
        </div>

        <div className={styles.item } onClick={()=>copyKeyCode(keyCode)}>
            <div className={styles.item_content}>
                {keyCode}  
            </div>
        </div>
    </div>
  )
}

export default AccountListTile