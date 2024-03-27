"use client";
import React from "react";
import styles from "./userauth.module.css";
import UserAuthNavBar from "../../components/userAuthLayoutComponent/navbar/UserAuthNavBar";
import "../global.css";
import { inter, publicSans, NunitoSans } from "../fonts/fonts";

export default function UserAuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.layout_body}>
        <div className={styles.main_container}>
          <UserAuthNavBar />
          <div className={styles.container}>
            <div
              className={` ${inter.variable} ${publicSans.variable} ${NunitoSans.variable}`}
            >
              {" "}
              {children}
            </div>
          </div>
          <div>footer</div>
        </div>
      </body>
    </html>
  );
}
