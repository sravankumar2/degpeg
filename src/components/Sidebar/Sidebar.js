import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import { Link as LinkR } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
function Sidebar({ isOpen, toggle }) {
  return (
    <nav className={`${styles.nav_menu} ${isOpen ? styles.active : ""}`}>
      <div className={styles.logo}>
        <LinkR to="/" className={styles.nav__logo}>
          <img src={Logo} alt="logo " width="100%"></img>
        </LinkR>
      </div>
      <div onClick={toggle} className={styles.mobile__icon}></div>
      <ul className={styles.nav__menu} onClick={toggle}>
        <li>
          <LinkR to="/" className={styles.nav__links}>
            Home
          </LinkR>
        </li>
        <li>
          <LinkR to="#features" className={styles.nav__links}>
            Platform Features
          </LinkR>
        </li>
        <li>
          <LinkR to="/about" className={styles.nav__links}>
            About Us
          </LinkR>
        </li>
        <li>
          <LinkR to="/career" className={styles.nav__links}>
            Career
          </LinkR>
        </li>
        <li>
          <LinkR to="#contact" className={styles.nav__links}>
            Contact Us
          </LinkR>
        </li>
      </ul>
      <div className={styles.grid3}>
        <div>
          <ul>
            <li>
              <LinkR to="/">
                <i class="fab fa-facebook-f"></i>
              </LinkR>
            </li>
            <li>
              <LinkR to="/">
                <i class="fab fa-instagram"></i>
              </LinkR>
            </li>
            <li>
              <LinkR to="/">
                <i class="fab fa-twitter"></i>
              </LinkR>
            </li>
            <li>
              <LinkR to="/">
                <i class="fab fa-linkedin-in"></i>
              </LinkR>
            </li>
            <li>
              <LinkR to="/">
                <i class="fab fa-youtube"></i>
              </LinkR>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
