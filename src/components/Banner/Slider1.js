import React from "react";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
import pic4 from "../../assets/images/pic4.png";
import main from "../../assets/vedios/main.gif";
import styles from "./Slider1.module.scss";
import { Link as LinkR } from "react-router-dom";
function Slider1() {
  return (
    <div className={styles.slider}>
      <div
        style={{
          backgroundImage: `url(${pic2})`,
          backgroundPosition: "left bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "750px",
          zIndex: "4",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={styles.left__image}>
          <img src={pic3} alt="pic3" />
        </div>
        <div className={styles.right__image}>
          <img src={pic4} alt="pic4" />
        </div>
      </div>
      <div className={styles.inner__content}>
        <div className={styles.text}>
          <h1>Increase Engagement & Revenue</h1>
          <h4>
            {/* Connect with your own audience through Livestreaming on all */}
            Realise the power of
            <span> Live commerce </span> in your website & social channels.{" "}
          </h4>
          <div className={styles.button__wrapper}>
            <LinkR to="/">
              <span>
                {" "}
                <i class="fas fa-chevron-right "></i>
              </span>
              Let's Talk
            </LinkR>
          </div>
        </div>
        <div className={styles.gif}>
          <img src={main} alt="main" />
        </div>
      </div>
    </div>
  );
}

export default Slider1;
