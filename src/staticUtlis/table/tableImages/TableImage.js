"use client";
import React from "react";
import Image from "next/image";
import styles from "./tableimage.module.css";
import sampleImage from "../../../../public/website-static-img/card-dummy-image.jpg";

export default function TableImage(props) {
  const { imageData, folderPath } = props;
  return (
    <div>
      <Image
        src={`/${folderPath}${imageData.url}`}
        alt="this is alt"
        width={100}
        height={100}
      />
    </div>
  );
}
