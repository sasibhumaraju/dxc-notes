import React from 'react'
import styles from '../css/Toast.module.css';

function Toast({message}) {
  return (
    <div className={styles.toast_container}>
        <span className={styles.copy_pad}>copied:</span>
        {message}
    </div>
  )
}

export default Toast
