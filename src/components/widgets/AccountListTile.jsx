import React, { useEffect, useState } from 'react'
import styles from '../css/AccountListTile.module.css'
import { Toast } from '@sasibhumaraju/react-toast';
import controller from '../../Controller';
import gif from "../../assets/warningLOttie.gif"
import audioPlayer from '../../util/AudioPlayer';

function AccountListTile({no,beforeTime,cetTime,afterTime,region,imsRegion,code,keyCode}) {

        const defaultOptions = {
            loop: true,  // Set to `true` for infinite loop
            autoplay: true,  // Set to `true` for autoplay
            animationData: gif,  // Your Lottie JSON
            rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'  // Optional: handles scaling
            }
        };

        const [bgColor, setBgColor] = useState(false)  
        const copyKeyCode = (text) => {
                    navigator.clipboard.writeText(text);
                    controller.showToast("" + text)
        }


  const setBackGroundColor = () => {
    const currentTime = new Date().toLocaleTimeString('en-US',{timeZone: "Europe/Amsterdam",hour12: false,hour: 'numeric',minute: 'numeric'});
    if(currentTime >= beforeTime && currentTime <= afterTime) {
        setBgColor(true);
        audioPlayer.playAudio(no)
    }
    else {
        setBgColor(false);
        audioPlayer.stopAudio(no)
    }
  }

  useEffect(() => {
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

       { bgColor? <img src={gif} alt="warning" /> : null}
    </div>
  )
}

export default AccountListTile