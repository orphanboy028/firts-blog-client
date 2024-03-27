"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./userlogin.module.css";
import dummyUser from "../../../../public/website-static-img/dummy-user.jpg";
import loginUser from "../../../../public/website-static-img/loginuser.png";
import { ThemeContext } from "../../../contextApi/ThemeContextApi";
import { isAuth } from "../../../Actions/authAction";
export default function UserLogin() {
  const { handelToggleNavDropDown, longined } = useContext(ThemeContext);

  return (
    <div className={styles.image_wrapper} onClick={handelToggleNavDropDown}>
      {longined ? (
        <Image
          src={loginUser}
          alt="dummy-user"
          width={500}
          height={500}
          className={styles.imageStyle}
        />
      ) : (
        <Image
          src={dummyUser}
          alt="dummy-user"
          width={500}
          height={500}
          className={styles.imageStyle}
        />
      )}
    </div>
  );
}
