"use client";
import React, { useContext, useEffect, useState } from "react";
import UserDashBoardPage from "./page";
import styles from "./dashbord.module.css";
import Image from "next/image";
import dummyUser from "../../../../public/website-static-img/user-image.png";
import DashBordTab from "../../../components/dashBordTab/DashBordTab";
import { userDetailApi } from "../../../Actions/userAction";
import { UserContext } from "../../../contextApi/userContextApi";

export default function UserDashBoardLayout({ children }) {
  const { userDetail, setIsLoading } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left_side}>
          <section className={styles.topBar_conatiner}>
            <div className={styles.detail_wrapper}>
              <div className={styles.userImage_box}>
                <div className={styles.userImage_wrapper}>
                  <Image
                    src={dummyUser}
                    alt="userimage"
                    width={100}
                    height={100}
                    className={styles.userImage}
                  />
                </div>
              </div>
              <div className={styles.user_detailBox}>
                <h3>{userDetail && userDetail?.name}</h3>
                <p>{userDetail && userDetail?.email}</p>
              </div>
            </div>
            <div className={styles.userBio_box}>
              <p>{userDetail && userDetail?.bio}</p>
            </div>
          </section>
          <section className={styles.page_navigation_tabBox}>
            <DashBordTab />
          </section>
          <div>{children}</div>
        </div>
        <div className={styles.right_side}>right side</div>
      </div>
    </div>
  );
}
