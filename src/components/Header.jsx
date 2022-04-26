import React from 'react';
import Logo from '../images/logo.svg'
import IconMenu from '../images/icon-menu.svg'

export default function(){
  return(
    <div className="header">
      <img src={Logo} alt="Imagem da logo escrito snap" />
      <button id="button-header" onClick={function showMenu() {
        const menuMobile = document.getElementById("menu-mobile");
        menuMobile.classList.add("show");
      }}>
        <img src={IconMenu} alt="Icone de menu" />
      </button>
      
    </div>
  )
}
