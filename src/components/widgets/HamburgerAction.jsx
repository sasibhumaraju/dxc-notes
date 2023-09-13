import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import Menu from '../screens/Menu'
import styles from '../css/Menu.module.css'

function HamburgerAction() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const menuContainer = document.getElementById("menu");
  
       setIsOpen(!isOpen)
   
      menuContainer.classList.toggle(styles.active);
  
  }

  return (
    <div>

     <div className={styles.hamburger}>
      <Hamburger toggled={isOpen} toggle={()=>toggleMenu()} />
      </div>
      <Menu/>

    </div>
  )
}

export default HamburgerAction