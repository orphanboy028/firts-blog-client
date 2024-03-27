import React from "react";
import styles from "./css/cardskeleton.module.css";
export default function CardSkeleton() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7].map(() => {
        return (
          <div className={styles.CardSkeleton_container}>
            <div className={styles.left_side}>
              <div className={styles.title_bar}> </div>
              <div className={styles.descreption_bar}> </div>
              <div className={styles.card_footer}>
                <div className={styles.footer_left}>
                  <span className={styles.footerTab}></span>
                  <span className={styles.footerTab}></span>
                </div>
                <div className={styles.footer_right}>
                  {" "}
                  <div className={styles.footerTab}></div>{" "}
                </div>
              </div>
            </div>
            <div className={styles.right_side}></div>
          </div>
        );
      })}
    </div>
  );
}
