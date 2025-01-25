import React, { useEffect, useState } from 'react'
import styles from '../css/Accounts.module.css'
import AccountListTile from './AccountListTile'
import { SKFData, SKFDataSaturday } from '../../Data'
import GetDayName from '../../util/GetDayName';

function SKF() {

  const [dbCheckList, setDbChecklist] = useState([]);

  useEffect(()=>{
    var num = new Date().getDay();
    if(num === 6) setDbChecklist(SKFDataSaturday);
    else if(num === 0) setDbChecklist([])
    else setDbChecklist(SKFData)
  },[])

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
        {dbCheckList.map((obj,_)=>{
            return <AccountListTile key={_} no={obj.no} beforeTime={obj.beforeTime} cetTime={obj.cetTime} afterTime={obj.afterTime} region={obj.region} imsRegion={obj.imsRegion}  code={obj.code} keyCode={obj.key}></AccountListTile>
        })}
       
       { dbCheckList.length === 0 && <div className={styles.sunday_chill}>Chill dude, No db checks during Sunday! 😉 </div> }
    </div>
  )
}

export default SKF;