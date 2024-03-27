import React from "react";
import styles from "./userauthnavbar.module.css";
import websiteLogo from "../../../../public/website-static-img/website-logo.png";
import Image from "next/image";

export default function UserAuthNavBar() {
  return (
    <div className={styles.main_container}>
      <div>
        <Image
          src={websiteLogo}
          alt="website-logo"
          width={500}
          height={500}
          className={styles.logo_style}
        />
      </div>
    </div>
  );
}
