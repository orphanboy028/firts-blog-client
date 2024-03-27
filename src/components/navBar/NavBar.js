"use client";

import React, { useContext } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import facbookIcon from "../../../public/website-static-img/facebook-icon.png";
import instagramIcon from "../../../public/website-static-img/instagram-icon.png";
import twitter from "../../../public/website-static-img/twitterx-icon.png";
import ToggleBtn from "../../staticUtlis/toggleBtn/ToggleBtn";
import { FaBars, PiNotePencilThin } from "../../staticUtlis/ApplicationIcon";
import GoogleOneTap from "../auth/GoogleOneTap";
import UserLogin from "./userlogin/UserLogin";
import NavAuthDropDown from "./navauthdropDown/NavAuthDropDown";
import { ThemeContext } from "../../contextApi/ThemeContextApi";
import SearchInput from "./search/SearchInput";

export default function NavBar() {
  const { toggleNavDropDown, longined } = useContext(ThemeContext);
  return (
    <div className={`${styles.main_container}`}>
      <div className={styles.dekstop_container}>
        <div className={styles.logoBox}>
          <h2>Medium </h2>
        </div>
        <div className={styles.social_IconBox}>
          <Link href="https://www.facebook.com/">
            <Image
              src={facbookIcon}
              alt="facbook-icon"
              width={20}
              height={20}
              className={styles.image_icon}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image
              src={instagramIcon}
              alt="facbook-icon"
              width={20}
              height={20}
              className={styles.image_icon}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image
              src={twitter}
              alt="facbook-icon"
              width={20}
              height={20}
              className={styles.image_icon}
            />
          </Link>
        </div>
        <div className={styles.search_box}>
          <SearchInput />
        </div>
        <div>
          <ToggleBtn />
        </div>
        <div className={styles.nav_optionBox}>
          <Link href={"/write"}>
            <PiNotePencilThin />
          </Link>
          <Link href={"/"}>home</Link>
          <div className={styles.userlogin_Wraper}>
            <UserLogin />
            {toggleNavDropDown && <NavAuthDropDown />}
          </div>
        </div>
      </div>
      <div className={styles.mobile_conatiner}>
        <div>
          {" "}
          <FaBars />{" "}
        </div>
        <div>
          <h3>Medium</h3>
        </div>
        <div className={styles.Mobile_toggleBox}>
          <Link href={"/"}>
            <PiNotePencilThin />
          </Link>
          <ToggleBtn />
        </div>
      </div>
      <GoogleOneTap />
    </div>
  );
}
