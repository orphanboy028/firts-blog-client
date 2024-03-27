"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { authenticate } from "../../Actions/authAction";
import { isAuth } from "../../Actions/authAction";

export default function GoogleOneTap() {
  const router = useRouter();
  const logined = false; //isAuth();

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log("test onTap");
      if (credentialResponse) {
        console.log("enter");

        try {
          const res = axios({
            method: "post",
            url: "http://localhost:8000/api/v1/first-blog/auth/google-login",
            data: {
              token: credentialResponse.credential,
            },
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(res);

          if (res.data.status === "Success") {
            authenticate(res.data.user, res.data.token, () => {
              router.push("/write");
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <div>
      <p> one tap</p>
    </div>
  );
}
