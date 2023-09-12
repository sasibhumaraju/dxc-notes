import React from 'react'
import styles from '../css/Accounts.module.css'
import AccountListTile from './AccountListTile'
import { SKFData } from '../../Data'

function SKF() {
  return (
    <div className={styles.account_container}>
        <div className={styles.title}>SKF - DB CHECKS</div>
        {SKFData.map((obj,_)=>{
            return <AccountListTile key={_} ISTTime={obj.ISTTime} cetTime={obj.cetTime} region={obj.region} imsRegion={obj.imsRegion}  code={obj.code} keyCode={obj.key}></AccountListTile>
        })}
       
    </div>
  )
}

export default SKF