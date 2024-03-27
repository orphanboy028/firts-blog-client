"use client";

import React from "react";
import styles from "./asideDrawer.module.css";
import { FaBars } from "../../../../staticUtlis/ApplicationIcon";
import { drawerMenuList } from "../../../../staticUtlis/JsonData/formfileds";
import Link from "next/link";

export default function AsideDrawer(props) {
  const { toogle, toogleSidebar } = props;

  const asibarClass = toogle
    ? styles.dashBoard_sideBarOpen
    : styles.dashBoard_sideBar;
  return (
    <div className={asibarClass}>
      <div className={styles.sideBar_header}>
        <p>this is header</p>
        <div className={styles.sidebarCloseHangBug}>
          <FaBars onClick={toogleSidebar} />
        </div>
      </div>
      <div className={styles.menu_listBox}>
        {drawerMenuList.map((el, i) => {
          return (
            <Link
              href={`${el.hrfLink}`}
              className={styles.DrawerLink_box}
              key={i}
            >
              {el.name}{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
