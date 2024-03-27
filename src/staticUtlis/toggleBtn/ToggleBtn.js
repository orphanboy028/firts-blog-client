import React, { useContext, useState } from "react";
import styles from "./togglebtn.module.css";
import Image from "next/image";
import moonIcon from "../../../public/website-static-img/crescent-moon.png";
import sunIcon from "../../../public/website-static-img/sun-image.png";
import { ThemeContext } from "../../contextApi/ThemeContextApi";
export default function ToggleBtn() {
  const { handeltoggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "light" ? styles.toggle_switch : styles.toggle_switchActive
      } ${theme === "light" ? styles.on : styles.off}`}
      onClick={handeltoggle}
    >
      <Image
        src={moonIcon}
        alt="moon-icon"
        width={12}
        height={12}
        className={styles.sun_imageStyle}
      />
      <Image
        src={sunIcon}
        alt="sun-icon"
        width={12}
        height={12}
        className={styles.moon_ImageStyle}
      />
      <div className={styles.round_button}></div>
    </div>
  );
}
