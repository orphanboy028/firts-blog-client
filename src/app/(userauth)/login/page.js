"use client";

import React from "react";
import AuthForm from "../../../components/userAuthLayoutComponent/AuthForm/AuthForm";
import { loginInputs } from "../../../staticUtlis/JsonData/authFormFied";
import { loginAccount } from "../../../Actions/authAction";

export default function LoginPage() {
  return (
    <div className="AuthPagecontainer">
      <div className="single_formWrapper">
        <AuthForm
          formTitle="Hii Welcome Back !"
          formDescreption="Contrary to popular belief, Lorem Ipsum is not simply random text"
          formFileds={loginInputs}
          submitHandel={loginAccount}
        />
      </div>
    </div>
  );
}
