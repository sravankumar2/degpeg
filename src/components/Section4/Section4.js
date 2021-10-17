import React from "react";
import styles from "./Section4.module.scss";
import img5 from "../../assets/images/img5.png";
function Section4() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.commerce}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.header}>
              <h6>E-Commerce </h6>
              <h2>Simplified Live Commerce In easy 3 steps with Degpeg</h2>
            </div>
            <div className={styles.textWrapper}>
              <div>
                <div className={styles.icon}>
                  <i class="far fa-envelope"></i>
                </div>
                <div className={styles.icon_text}>
                  <h4>Set up your show</h4>
                  <p>
                    Collaborate with our Content creators, create a concept with
                    our content team, and ideate your template and audio with
                    the degpeg's backend team so that you’re ready to rock.
                  </p>
                </div>
              </div>
              <div className={styles.text1}>
                <div className={styles.icon}>
                  <i class="far fa-envelope"></i>
                </div>
                <div className={styles.icon_text}>
                  <h4>Live Preview of broadcast</h4>
                  <p>
                    Let the Creative team devise trials with your content and
                    the Content creators, Test your setup in the preview screen
                    right before you go live.
                  </p>
                </div>
              </div>

              <div>
                <div className={styles.icon}>
                  <i class="far fa-envelope"></i>
                </div>
                <div className={styles.icon_text}>
                  <h4>Go Live with degpeg</h4>
                  <p>
                    Press “Start Streaming” to broadcast to your stream
                    audience, wherever they are. Monitor chat and Q&A in the
                    degpeg platform, too.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <img src={img5} alt="img5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
