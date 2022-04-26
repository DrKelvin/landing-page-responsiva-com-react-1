import React from 'react';
import Logo from '../images/logo.svg'
import IconMenu from '../images/icon-menu.svg'

export default function(){
  return(
    <div className="header">
      <img src={Logo} alt="logo snap icon" />
      <button id="button-header" onClick={function showMenu() {
        const menuMobile = document.getElementById("menu-mobile");
        menuMobile.classList.add("show");
      }}>
        <img src={IconMenu} alt="hamburguer icon to open menu" />
      </button>
      
    </div>
  )
}
