import React, { useEffect, useState } from 'react'
import styles from '../css/Toast.module.css';
import Toast from './Toast';
import controller from '../../Controller';



function ToastHolder() {
    const [message, setMessage] = useState("");
    const showToast = (msg) => {
        setMessage(()=>msg)
    }

    const hideToast = () => {
        setMessage(()=>"")
    }

    useEffect(() => {
        controller.setToastMethods(showToast,hideToast)
        const handleKeyPress = (event) => {
          if (event.key === "Enter") {
            hideToast();
          }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, []);



  return (
    <div className={styles.toast_holder}>
      {message !== ""? <Toast message={message}></Toast>:null}
    </div>
  )
}

export default ToastHolder
