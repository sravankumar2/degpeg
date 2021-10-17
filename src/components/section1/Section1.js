import React from "react";
import styles from "./Section1.module.scss";
import bg2 from "../../assets/images/bg2.png";
import Grid from "./Grid";
import pattern1 from "../../assets/images/pattern1.png";
function Section1() {
  const Data = [
    {
      icon: <i class="far fa-paper-plane"></i>,
      h4: "Company & Product/industry updates",
      p: "Stream and share all important information on your own communityalong with social channels.",
    },
    {
      icon: <i class="far fa-paper-plane"></i>,
      h4: "Commerce Integrations with Flash sales/Offers",
      p: "Build revenue over Live Broadcast with special offers for limited time only. Give them instant gratification.",
    },
    {
      icon: <i class="far fa-paper-plane"></i>,
      h4: "Product launches & demos",
      p: "Launch a new product Live in front of entire community.",
    },
    {
      icon: <i class="far fa-paper-plane"></i>,
      h4: "Interviews/Talks shows/ Reviews",
      p: "Host Live shows , talks shows with your brand ambassadors, super users etc for more interesting and informative sessions.",
    },
    {
      icon: <i class="far fa-paper-plane"></i>,
      h4: " Webinars, Classes, Workshops",
      p: "Easy setup to share your knowledge with rest of the world , best fit for education businesses or educators.",
    },
    {
      icon: <i class="far fa-paper-plane"></i>,
      h4: "Meetups & conference",
      p: "Take any offline event digital within no time and start interacting with wider audiences, best fit for events.",
    },
  ];
  return (
    <div
      className={styles.container}
      style={{
        paddingTop: "5%",
        backgroundImage: `url(${bg2})`,
        backgroundPosition: "left bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",
        zIndex: "4",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={styles.text}>
        <h5>
          Degpeg is a cloud based Live Commerce platform that will enable you to
          showcase and sell your products/services through multichannel
          livestreaming
          <br />
          <br />
          <span>
            Degpeg as a platform can be effectively used in many ways:
          </span>
        </h5>
      </div>
      <div className={styles.grid__wrapper}>
        <div className={styles.grid}>
          {Data.map((item, index) => {
            return <Grid data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Section1;
