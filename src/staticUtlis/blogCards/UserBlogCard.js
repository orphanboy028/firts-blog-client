import React from "react";
import styles from "./useblogCard.module.css";
import Image from "next/image";
import dummyImage from "../../../public/website-static-img/card-dummy-image.jpg";
export default function UserBlogCard(props) {
  const { data } = props;
  return (
    <div>
      {data.map((el, i) => {
        return (
          <div className={styles.card_conatiner} key={i}>
            <div className={styles.card_wrapper}>
              <div className={styles.card_content}>
                <div className={styles.card_titleBox}>
                  <h3>{el?.title}</h3>
                </div>
                <div>
                  <p>{el?.metaDescription}</p>
                </div>
                <div className={styles.card_footer}>
                  <div>
                    {" "}
                    <span>Publsihed</span> <span>Feb 14, 2024 ·</span>{" "}
                  </div>
                  <div>
                    <span>...</span>
                  </div>
                </div>
              </div>
              <div className={styles.card_imageBox}>
                <div className={styles.image_Box}>
                  <Image
                    src={dummyImage}
                    alt="card-image"
                    className={styles.card_imageStyle}
                    width={500}
                    height={500}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
