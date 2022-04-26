import React from 'react';
import IconCloseMenu from '../images/icon-close-menu.svg'
import IconArrowDown from '../images/icon-arrow-down.svg'
import IconToDo from '../images/icon-todo.svg'
import IconCalendar from '../images/icon-calendar.svg'
import IconReminders from '../images/icon-reminders.svg'
import IconPlanning from '../images/icon-planning.svg'

export default function(){
  return(
    <div className="menu-mobile" id="menu-mobile">
      <button className="close-menu" onClick={function remMenu(){
        const menuMobile = document.getElementById("menu-mobile");
        menuMobile.classList.remove("show");
      }}>
        <img src={IconCloseMenu} alt="icon x to close menu" />
      </button>
      <ul>
        <li>
          <a href="#">Features</a>
          <button onClick={function FeaturesCollapse(){
            const features_collapse = document.getElementById("features-collapse");
            features_collapse.classList.toggle("show");
          }}>
            <img src={IconArrowDown} alt="" />
          </button>
        </li>
          <ul id="features-collapse">
            <li>
              <img src={IconToDo} alt="" />
              <a href="#">Todo List</a>
            </li>
            <li>
              <img src={IconCalendar} alt="" />
              <a href="#">Calendar</a>
            </li>
            <li>
              <img src={IconReminders} alt="" />
              <a href="#">Reminders</a>
            </li>
            <li>
              <img src={IconPlanning} alt="" />
              <a href="#">Planning</a>
            </li>
          </ul>
        <li>
          <a href="#">Company</a>
          <button onClick={function CompanyCollapse(){
            const company_collapse = document.getElementById("company-collapse");
            company_collapse.classList.toggle("show");
          }}>
            <img src={IconArrowDown} alt="" />
          </button>
        </li>
          <ul id="company-collapse">
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="btns-desktop">
        <a href="#">Login</a>
        <button className="main-button">
            Register
        </button>
      </div>
      

    </div>
  );
}