"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./tab.module.css";
import Link from "next/link";
import {
  IoIosArrowForward,
  IoIosArrowBack,
} from "../../staticUtlis/ApplicationIcon";

import { usePathname, useSearchParams } from "next/navigation";
const tabList = [
  { name: "property", hrfLink: "property" },
  { name: "Real Esate", hrfLink: "real-eates" },
  { name: "python", hrfLink: "python" },
  { name: "css", hrfLink: "css" },
  { name: "javascript", hrfLink: "javascript" },
  { name: "html", hrfLink: "html" },
  { name: "real estate", hrfLink: "real-estate" },
  { name: "gurgaon", hrfLink: "gurgaon" },
  { name: "godrej", hrfLink: "godrej" },
  { name: "javascript", hrfLink: "javascript" },
  { name: "html", hrfLink: "html" },
  { name: "real estate", hrfLink: "real-estate" },
  { name: "gurgaon", hrfLink: "gurgaon" },
  { name: "godrej", hrfLink: "godrej" },
];

export default function Tab() {
  const tabWrapperRef = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tag = searchParams.get("tag");
    if (tag) {
      const selectedTab = tabList.find((tab) => tab.hrfLink === tag);
      if (selectedTab) {
        tabWrapperRef.current.scrollTo({
          left: selectedTab.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  }, [searchParams]);

  const scrollToLeft = () => {
    tabWrapperRef.current.scrollTo({
      left: tabWrapperRef.current.scrollLeft - 100,
      behavior: "smooth",
    });
  };

  const scrollToRight = () => {
    tabWrapperRef.current.scrollTo({
      left: tabWrapperRef.current.scrollLeft + 100, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.tab_container}>
      <div onClick={scrollToLeft} className={styles.arrow_box}>
        <IoIosArrowBack />
      </div>
      <div className={styles.tab_wrapper} ref={tabWrapperRef}>
        {tabList.map((el, i) => {
          return (
            <Link
              href={`/blogs/?tag=${el.hrfLink}`}
              className={`${styles.tabLink} ${
                searchParams.get("tag") === el.hrfLink ? styles.selectedTab : ""
              }`}
              key={i}
            >
              {el.name}
            </Link>
          );
        })}
      </div>
      <div onClick={scrollToRight} className={styles.arrow_box}>
        <IoIosArrowForward />
      </div>
    </div>
  );
}
