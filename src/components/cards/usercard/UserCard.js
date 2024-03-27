import React from "react";
import styles from "./usercard.module.css";
import dummyImage from "../../../../public/website-static-img/card-dummy-image.jpg";
import Image from "next/image";
import { IoIosArrowRoundForward } from "../../../staticUtlis/ApplicationIcon";
import Link from "next/link";

export default function UserCard(props) {
  const { cardData } = props;
  return (
    <>
      {cardData &&
        cardData.map((data, i) => {
          return (
            <>
              {data.title &&
                data.metaDescription &&
                data?.BlogThumblin?.url && (
                  <div className={styles.card_Container}>
                    <div className={styles.card_body}>
                      <div className={styles.card_content}>
                        <div className={styles.card_titleBox}>
                          <Link
                            href={`/blog/${data.slug}`}
                            className="title_link"
                          >
                            {data?.title}{" "}
                          </Link>
                        </div>
                        <div className={styles.card_descreption}>
                          <p>{data.metaDescription}</p>
                        </div>
                      </div>
                      <div className={styles.card_imageBox}>
                        <Image
                          src={`/blog-thumblin/${data.BlogThumblin?.url}`}
                          alt="dummy-image"
                          className={styles.card_image}
                          width={700}
                          height={700}
                        />
                      </div>
                    </div>
                    <div className={styles.card_footer}>
                      <span>Oct 19, 2023</span>
                      <span>views 200</span>
                      <div className={styles.iconBox}>
                        <IoIosArrowRoundForward />
                      </div>
                      <div className={styles.iconBox}>
                        <IoIosArrowRoundForward />
                      </div>
                    </div>
                  </div>
                )}
            </>
          );
        })}
      <div>
        <p></p>
      </div>
    </>
  );
}
