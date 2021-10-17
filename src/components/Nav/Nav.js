import React, { useState, useEffect } from "react";
import styles from "./Nav.module.scss";
import { Link as LinkR } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
function Nav({ toggle, openStatus }) {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
    //eslint-disable-next-line
  }, []);
  return (
    <div className={`${styles.nav} ${show && styles.nav__black}`}>
      <div className={styles.container}>
        <LinkR to="/" className={styles.nav__logo}>
          <img src={Logo} alt="logo " width="100%"></img>
        </LinkR>

        <ul className={styles.nav__menu}>
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
          <button>
            <LinkR to="/">
              <span>
                {" "}
                <i class="fas fa-chevron-right "></i>
              </span>
              Login
            </LinkR>
          </button>
          <div onClick={toggle} className={styles.mobile__icon}>
            <label htmlFor="check" className={styles.icon_wrapper}>
              <span className={`${openStatus ? "opened" : ""}`}></span>
              <span className={`${openStatus ? "opened" : ""}`}></span>
              <span className={`${openStatus ? "opened" : ""}`}></span>
            </label>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
