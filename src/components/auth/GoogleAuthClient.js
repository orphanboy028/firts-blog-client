"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { authenticate } from "../../Actions/authAction";
import { isAuth } from "../../Actions/authAction";

export default function GoogleAuthClient() {
  const router = useRouter();
  const logined = isAuth();

  return (
    <div style={{ marginTop: "100px" }}>
      {logined ? (
        <p> Usewr Logined</p>
      ) : (
        <>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              console.log(credentialResponse);
              if (credentialResponse) {
                console.log("enter");

                try {
                  const res = await axios({
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
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </>
      )}
    </div>
  );
}
