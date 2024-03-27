import React from "react";
import styles from "./sidebanner.module.css";
import Image from "next/image";
import cardImage from "../../../public/website-static-img/card-dummy-image.jpg";

export default function SideBanner() {
  return (
    <div className={styles.banner_container}>
      <Image
        src={cardImage}
        width={500}
        height={300}
        className={styles.banner_image}
        alt="sample-image"
      />
    </div>
  );
}
