import React from "react";
import styles from "./Footer.module.scss";
import bg4 from "../../assets/images/bg4.png";
import pattern2 from "../../assets/images/pattern2.png";
import whiteLogo from "../../assets/images/white-logo.png";
import { Link as LinkR } from "react-router-dom";
// import icon from "../../assets/icons/office-building.png";
function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg4})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "auto !important",
        zIndex: "4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#0e1b1f",
        paddingTop: "10%",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${pattern2})`,
          backgroundPosition: "left top",
          backgroundRepeat: " no-repeat",
          backgroundSize: "contain",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className={styles.top}>
        <div className={styles.subscribe}>
          <div className={styles.flexWrapper}>
            <h2>Subscribe For Latest Updates</h2>
            <form>
              <div className={styles.input_group}>
                <input type="email" required placeholder="Your Email Address" />
                <div className={styles.button}>
                  <button type="submit" value="Submit" name="submit">
                    <i class="far fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footer__middle}>
        <div className={styles.flexWrapper}>
          <div className={styles.grid}>
            <LinkR to="/" className={styles.image}>
              <img src={whiteLogo} alt="whiteLogo" />
            </LinkR>
          </div>
          <div className={styles.grid}>
            <div className={styles.textWrapper}>
              <div className={styles.header}>
                <h5>Our links</h5>
                <div className={styles.border}></div>
              </div>
              <ul>
                <li>
                  <LinkR to="/" className={styles.nav__links}>
                    Home
                  </LinkR>
                </li>
                <li>
                  <LinkR to="/login" className={styles.nav__links}>
                    Login
                  </LinkR>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.textWrapper}>
              <div className={styles.header}>
                <h5>Privacy Policy</h5>
                <div className={styles.border}></div>
              </div>
              <ul>
                <li>
                  <LinkR to="/" className={styles.nav__links}>
                    Privacy Policy
                  </LinkR>
                </li>
                <li>
                  <LinkR to="/login" className={styles.nav__links}>
                    Term & Conditions
                  </LinkR>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.textWrapper}>
          <div className={styles.grid1}>
            <span>
              Copyright © 2021{" "}
              <LinkR to="/" className={styles.nav__links}>
                Degpeg.
              </LinkR>
              All rights reserved.
            </span>
          </div>
          <div className={styles.grid2}>
            <span>
              Contact Us at{" "}
              <LinkR to="/aa" className={styles.nav__links}>
                hello@degpeg.com
              </LinkR>
            </span>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
