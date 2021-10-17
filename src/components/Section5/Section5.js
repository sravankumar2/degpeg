import React from "react";
import GridItem from "./GridItem";
import styles from "./Section5.module.scss";
function Section5() {
  return (
    <div className={styles.container}>
      <div className={styles.business}>
        <div className={styles.header}>
          <h6>Business</h6>
          <h2>We create live shows to integrate commerce and entertainment.</h2>
        </div>

        <div className={styles.grid_wrapper}>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
      </div>
    </div>
  );
}

export default Section5;
