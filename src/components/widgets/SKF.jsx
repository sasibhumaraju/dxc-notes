import React, { useEffect } from 'react'
import styles from '../css/Accounts.module.css'
import AccountListTile from './AccountListTile'
import { SKFData } from '../../Data'

function SKF() {

  useEffect(()=>{
    new Date().toLocaleDateString('en-US',{
      timeZone: "Europe/Amsterdam",
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric'
  });
  },[])

  return (
    <div className={styles.account_container}>  
        {SKFData.map((obj,_)=>{
            return <AccountListTile key={_} beforeTime={obj.beforeTime} cetTime={obj.cetTime} afterTime={obj.afterTime} region={obj.region} imsRegion={obj.imsRegion}  code={obj.code} keyCode={obj.key}></AccountListTile>
        })}
       
    </div>
  )
}

export default SKF;