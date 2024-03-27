"use client";
import React from "react";
import styles from "./adminnavbar.module.css";
import { FaBars } from "../../../../staticUtlis/ApplicationIcon";

export default function AdminNavBar(props) {
  const { toogleSidebar } = props;
  return (
    <div className={styles.dashBoard_navBarContainer}>
      <div className={styles.dekstop_navBar}>
        <div className={styles.navToggle_box}>
          <FaBars onClick={toogleSidebar} />
        </div>
        <div>
          <h1>Navbar</h1>
        </div>
      </div>
    </div>
  );
}
