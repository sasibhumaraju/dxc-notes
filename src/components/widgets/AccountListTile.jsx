import React, { useEffect } from 'react'
import styles from '../css/AccountListTile.module.css'
import { BiSolidCopyAlt } from 'react-icons/bi';

function AccountListTile({ISTTime,cetTime,region,imsRegion,code,keyCode}) {
  const copyKeyCode = (text) => {
            console.log("start")
            navigator.clipboard.writeText(text);
            alert("=>       "+text + "        <= copied!")
            console.log("end")
  }
  return (
    <div className={styles.list_tile}>
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
            <input  type="text" id="textToCopy" value={code}/> <button id='keyData' onClick={()=>copyKeyCode(code)}  ><BiSolidCopyAlt/>  <span class={styles.tooltiptext}>copy</span></button> </div>
         </div>

        <div className={styles.item}>
            <div className={styles.item_heading}>KEY</div>
            <div className={styles.item_content}>
            <input  type="text" id="textToCopy" value={keyCode}/> <button id='keyData' onClick={()=>copyKeyCode(keyCode)}  ><BiSolidCopyAlt/>  <span class={styles.tooltiptext}>copy</span></button> </div>
        </div>
    </div>
  )
}

export default AccountListTile