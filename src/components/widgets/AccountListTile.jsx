import React, { useEffect } from 'react'
import styles from '../css/AccountListTile.module.css'
import { BiSolidCopyAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { areTimesApproximatelyEqual } from '../../util/GetTimeDif';

function AccountListTile({ISTTime,cetTime,region,imsRegion,code,keyCode}) {

  const istTime = useSelector((store)=>store.time.IST)  
  const copyKeyCode = (text) => {
            console.log("start")
            navigator.clipboard.writeText(text);
            alert("=>       "+text + "        <= copied!")
            console.log("end")
            
  }
  return (
    <div className={styles.list_tile} style={{    backgroundColor:  areTimesApproximatelyEqual("0"+istTime,"0"+ISTTime)? "aqua":"var(--primary-color)"}} >
        <div className={styles.item}>
            <div className={styles.item_heading}>IST</div>
            <div className={styles.item_content}> {ISTTime}</div>
           
        </div>

        <div className={styles.item}>
            <div className={styles.item_heading}>CET</div>
            <div className={styles.item_content}> {cetTime}</div>
        </div>

        <div className={styles.item}>
            <div className={styles.item_heading}>REGION</div>
            <div className={styles.item_content}> {region}</div>
        </div>

        <div className={styles.item}>
            <div className={styles.item_heading}>IMS REGION</div>
            <div className={styles.item_content}> {imsRegion}</div>
        </div>

        <div className={styles.item}> 
            <div className={styles.item_heading}>CODE</div>
            <div className={styles.item_content}> 
            <div className={styles.item_data2}>  {code}  </div> <button id='keyData' onClick={()=>copyKeyCode(code)}  ><BiSolidCopyAlt/>  <span className={styles.tooltiptext}>copy</span></button> </div>
         </div>

        <div className={styles.item}>
            <div className={styles.item_heading}>KEY</div>
            <div className={styles.item_content}>
                <div className={styles.item_data}>  {keyCode}  </div>
                <button id='keyData' onClick={()=>copyKeyCode(keyCode)}  ><BiSolidCopyAlt/>  <span className={styles.tooltiptext}>copy</span></button> </div>
        </div>
    </div>
  )
}

export default AccountListTile