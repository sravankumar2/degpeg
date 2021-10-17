import React from "react";
import styles from "./Section.module.scss";
import img2 from "../../assets/images/img2.png";
function Section6() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contact__us}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div>
              <h6>Contact Us </h6>
              <h2>
                We Love To Help Great Companies To Enlarge Their Revenues.
              </h2>
            </div>
            <form>
              {/* FisrName */}
              <div className={styles.grid}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <span>
                      <i class="far fa-user"></i>
                    </span>
                  </div>
                  <input
                    name="firstName"
                    required
                    placeholder="First Name"
                    type="text"
                  />
                </div>
              </div>

              {/* LastName */}
              <div className={styles.grid}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <span>
                      <i class="far fa-user"></i>
                    </span>
                  </div>
                  <input
                    name="lastName"
                    required
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className={styles.grid}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <span>
                      <i class="far fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    name="email"
                    required
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
              </div>

              {/* PhoneNO */}
              <div className={styles.grid}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <span>
                      <i class="fas fa-phone-alt"></i>
                    </span>
                  </div>
                  <input
                    name="phone"
                    required
                    placeholder="Phone No"
                    type="text"
                  />
                </div>
              </div>

              {/* message */}
              <div className={styles.grid2}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputIcon}>
                    <span>
                      <i class="far fa-comment-dots"></i>
                    </span>
                  </div>
                  <textarea
                    name="message"
                    required
                    placeholder="Message"
                    rows="4"
                    cols="50"
                  />
                </div>
              </div>

              <button type="submit">
                <span>
                  {" "}
                  <i class="fas fa-chevron-right "></i>
                </span>
                Submit Now
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <div>
              <img src={img2} alt="img2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
