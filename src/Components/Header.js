import React from "react";
import "../Css/Header.css";

// const burger = document.querySelector('.header');
// const burger2 = document.querySelector('.burger_close');
// const menu = document.querySelector('.menu');
// const menuNav = document.getElementById('menu-nav');
// let showMenu = false

// menu.addEventListener('click', toggle);

// function toggle(){
//   if(!showMenu){
//     burger.classList.add('show');
//     menuNav.style.display = "block";
//     burger2.classList.add('open');

//     showMenu = true;
//   }else{
//     burger.classList.remove('show');
//     menuNav.style.display = "none";
//     burger2.classList.remove('open');
  
//     showMenu = false;
//   }
// }

const Header = () => {
  return(
    <> 
      <div className="header">
        <div className="logo">
          <img src="./images/logo.svg" alt="easybank logo" />
        </div>
        <div className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <button className="btn">Request Invite</button>
      </div>

      <div class="hide_nav">
        <div class="close">
          <div class="menu_logo">
            <img src="images/logo.svg" alt="Logo"/>
          </div>
          <div class="menu">
              <img src="images/icon-hamburger.svg" alt="open" class="burger_open"/>
              <img src="images/icon-close.svg" alt="close" class="burger_close"/>
          </div>
        </div>
          <ul id="menu-nav" class="menu-nav">
            <li class="menu-nav-item">
                <a href="#" class="menu-nav-link">Home</a></li>
            <li class="menu-nav-item">
                <a href="#" class="menu-nav-link">About</a></li>
            <li class="menu-nav-item">
                <a href="#" class="menu-nav-link">Contact</a></li>
            <li class="menu-nav-item">
                <a href="#" class="menu-nav-link">Blog</a></li>
            <li class="menu-nav-item">
              <a href="#" class="menu-nav-link">Careers</a></li>
          </ul>
      </div>

      <div className="header-info">
        <div className="info">
          <h1>Next generation digital banking</h1>
          <p className="muted-text">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn">Request Invite</button>
        </div>
        <div className="svg">
          <img src="./images/bg-intro-desktop.svg" alt="" className="bg-icon" />
          <img className="front-svg" src="./images/image-mockups.png" alt="" />
        </div>
      </div>
      <div className="mobile-info">
        <h1>Next generation digital banking</h1>
        <p className="muted-text">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much more.
        </p>
        <button className="btn">Request Invite</button>
      </div>
    </>
  );
};
export default Header;