import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./boxcard.module.css";
import cardImage from "../../../../public/website-static-img/card-dummy-image.jpg";
import { IoIosArrowRoundForward } from "../../../staticUtlis/ApplicationIcon";

export default function BoxCard(props) {
  const { cardType, cardData } = props;

  return (
    <>
      {cardData.map((data, i) => {
        return (
          <>
            {data.title && data.metaDescription && data?.BlogThumblin?.url && (
              <div className={styles[cardType]} key={i}>
                {" "}
                <div className={styles.card_imageBox}>
                  <Image
                    src={`/blog-thumblin/${data.BlogThumblin?.url}`}
                    width={500}
                    height={500}
                    className={styles.card_imageStyle}
                    alt="sample-image"
                  />
                </div>{" "}
                <div className={styles.card_body}>
                  <div className={styles.auther_box}>
                    <div className={styles.auther_imageBox}>
                      <Image
                        src={cardImage}
                        width={500}
                        height={500}
                        className={styles.autherImage}
                        alt="sample-image"
                      />
                    </div>
                    {data.posteBy?.name && (
                      <div>
                        <p> {data.posteBy.name}</p>
                      </div>
                    )}
                  </div>
                  <div className={styles.card_titleBox}>
                    <Link href={`/blog/${data.slug}`} className="title_link">
                      {data?.title}{" "}
                    </Link>
                  </div>
                  <div className={styles.card_descreption}>
                    <p>{data.metaDescription}</p>
                  </div>
                  <div className={styles.card_footer}>
                    <span>12 nov 2023</span>
                    <span className={styles.forward_iconBox}>
                      <IoIosArrowRoundForward />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
