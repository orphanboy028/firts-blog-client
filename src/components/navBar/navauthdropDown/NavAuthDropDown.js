"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./navAuthDropDown.module.css";
import { IoSettingsOutline } from "../../../staticUtlis/ApplicationIcon";
import RadiusBtn from "../navbtns/RadiusBtn";
import { ThemeContext } from "../../../contextApi/ThemeContextApi";
import Link from "next/link";
import { logoutAction } from "../../../Actions/authAction";
export default function NavAuthDropDown() {
  const { toggleNavDropDown, longined, dropdownRef } = useContext(ThemeContext);
  const [logOuttriger, setlogOuttriger] = useState(false);

  const handelLogOut = () => {
    logoutAction();
    setlogOuttriger(!logOuttriger);
  };

  useEffect(() => {}, [logOuttriger]);

  return (
    <>
      {longined ? (
        <div className={styles.main_container} ref={dropdownRef}>
          <div className={styles.dropDown_header}>
            <p className="title_link">Sanjay</p>
          </div>
          <div className={styles.dropDown_body}>
            <div className={styles.dropDown_optionBox}>
              <div>
                <IoSettingsOutline />
              </div>
              <div>
                <Link href={"/blogs"} className="medium_links">
                  Blogs
                </Link>
              </div>
            </div>
            <div className={styles.dropDown_optionBox}>
              <div>
                <IoSettingsOutline />
              </div>
              <div>
                <Link
                  href={"/user-dashboard/blogs/published"}
                  className="medium_links"
                >
                  Publishe{" "}
                </Link>
              </div>
            </div>

            <div className={styles.dropDown_optionBox}>
              <div>
                <IoSettingsOutline />
              </div>
              <div>
                <Link
                  href={"/user-dashboard/blogs/draft"}
                  className="medium_links"
                >
                  Draft{" "}
                </Link>
              </div>
            </div>
            <div className={styles.dropDown_optionBox}>
              <div>
                <IoSettingsOutline />
              </div>
              <Link href={"/user-dashboard/profile"} className="medium_links">
                Profile{" "}
              </Link>
            </div>
          </div>
          <div className={styles.dropDown_footer} onClick={handelLogOut}>
            Sig Out
          </div>
        </div>
      ) : (
        <>
          <div className={styles.main_container} ref={dropdownRef}>
            <div className={styles.wrapper}>
              <div>
                <p> Get started on Medium</p>
              </div>
              <div>
                <RadiusBtn
                  btnText="SING UP"
                  btnStyle="primaryBg"
                  pageLink="user-registration"
                />
              </div>
              <div>
                <RadiusBtn
                  btnText="Sing In"
                  btnStyle="primaryBorder"
                  pageLink="login"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
