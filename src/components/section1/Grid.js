import React from "react";
import styles from "./Grid.module.scss";
function Grid({ data }) {
  return (
    <div className={styles.grid__item}>
      <div className={styles.grid__content}>
        {/* icon */}
        <div className={styles.iconWrapper}>{data.icon}</div>
        <div className={styles.inner_text}>
          <h4>{data.h4}</h4>
          <p>{data.p}</p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
