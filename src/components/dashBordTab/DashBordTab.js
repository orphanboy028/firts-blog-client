"use client";
import React from "react";
import styles from "./dashbordTab.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
const tabList = [
  { name: "Publsih", hrfLink: "blogs/published" },
  { name: "Draft", hrfLink: "blogs/draft" },
  { name: "profile", hrfLink: "profile" },
  { name: "Settings", hrfLink: "settings" },
  { name: "profile", hrfLink: "profile" },
];

export default function DashBordTab() {
  const pathname = usePathname();

  return (
    <div className={styles.tabs_wrapper}>
      {tabList.map((el, i) => {
        return (
          <Link
            href={`/user-dashboard/${el.hrfLink}`}
            key={i}
            className={styles.tabLink}
          >
            {el.name}
          </Link>
        );
      })}
    </div>
  );
}
