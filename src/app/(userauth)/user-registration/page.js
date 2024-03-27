"use client";

import React from "react";
import RegisterForm from "../../../components/userAuthLayoutComponent/AuthForm/RegisterForm";
import styles from "./pagestyle.module.css";
import { signUpInputs } from "../../../staticUtlis/JsonData/authFormFied";
import { userRegister } from "../../../Actions/authAction";
export default function UserRegistration() {
  return (
    <div className={styles.container} suppressHydrationWarning={true}>
      <div className={styles.authBanner_side}>
        <div className={styles.buller_banner}></div>
      </div>

      <div className={styles.form_container}>
        <div className={styles.form_wrapeer}>
          <RegisterForm
            formTitle="Register"
            formDescreption="Contrary to popular belief, Lorem Ipsum is not simply random text"
            formFileds={signUpInputs}
            formFor="SINGUP"
            submitHandel={userRegister}
          />
        </div>
      </div>
    </div>
  );
}
