"use client";
import React from "react";
import banner from "../../../../public/website-static-img/sie-banner.png";
import Image from "next/image";
import styles from "./sidebanner.module.css";
export default function SideBanner() {
  return (
    <div className="sideBanner_Container">
      <Image
        src={banner}
        alt="side banner"
        width={500}
        height={500}
        className="sideBannerImage"
      />
    </div>
  );
}
