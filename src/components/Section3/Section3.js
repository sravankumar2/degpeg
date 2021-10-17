import React from "react";
import styles from "./Section3.module.scss";
import live from "../../assets/images/live.png";
import { Link as LinkR } from "react-router-dom";
function Section3({ data, count }) {
  console.log(count);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {count % 2 == 0 ? (
          <div>
            <div className={`${styles.left} ${styles.animate_left}`}>
              <div>
                <img src={data.image} alt="live" />
              </div>
            </div>
            <div className={`${styles.right} ${styles.animate_right}`}>
              <div className={styles.header}>
                <h6>{data.h6}</h6>
                <h2>{data.h2}</h2>
              </div>
              <p>{data.p}</p>
              <LinkR to="/">
                <span>
                  {" "}
                  <i class="fas fa-chevron-right "></i>
                </span>
                Let's Talk
              </LinkR>
            </div>
          </div>
        ) : (
          <div>
            <div className={`${styles.right} ${styles.animate_right}`}>
              <div className={styles.header}>
                <h6>{data.h6}</h6>
                <h2>{data.h2}</h2>
              </div>
              <p>{data.p}</p>
              <LinkR to="/">
                <span>
                  {" "}
                  <i class="fas fa-chevron-right "></i>
                </span>
                Let's Talk
              </LinkR>
            </div>
            <div className={`${styles.left} ${styles.animate_left}`}>
              <div>
                <img src={data.image} alt="live" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Section3;
