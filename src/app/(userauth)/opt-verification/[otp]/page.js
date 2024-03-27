"use client";

import React from "react";
import { otpVerifation } from "../../../../staticUtlis/JsonData/authFormFied";
import OTPForm from "../../../../components/userAuthLayoutComponent/AuthForm/OTPForm";
import { otpVerfication } from "../../../../Actions/authAction";

export default function OTPverficationPage() {
  return (
    <div className="AuthPagecontainer">
      <div className="single_formWrapper">
        <OTPForm
          formTitle="OTP VERFICATION"
          formDescreption="Contrary to popular belief, Lorem Ipsum is not simply random text"
          formFileds={otpVerifation}
          submitHandel={otpVerfication}
        />
      </div>
    </div>
  );
}
