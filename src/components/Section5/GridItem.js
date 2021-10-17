import React from "react";
import styles from "./GridItem.module.scss";
function GridItem() {
  return (
    <div className={styles.grid_item}>
      <div className={styles.grid}>
        <div className={styles.iconWrapper}>
          <i class="fab fa-youtube"></i>
        </div>
        <div className={styles.text}>
          <h4>Retail & Fashion</h4>
          <p>
            Integrate degpeg, and connect your customers with your latest
            collection and array of merchandise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridItem;
