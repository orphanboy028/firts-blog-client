"use client";

import React from "react";
import styles from "./authform.module.css";
import useCustomeAuthForm from "../../custome-hooks/useCustomeAuthForm";
import { loginInputs } from "../../staticUtlis/JsonData/formfileds";
import { loginAccount, authenticate } from "../../Actions/authAction";
import GoogleAuthClient from "./GoogleAuthClient";
import GoogleOneTap from "./GoogleOneTap";

export default function AuthForm() {
  //   useCustomeAuthForm()
  const {
    handleSubmit,
    formState,
    control,
    watch,
    renderInput,
    updatedInputs,
    isValid,
    errors,
  } = useCustomeAuthForm(loginInputs, "LOGIN");

  const handleForm = async (data) => {
    try {
      console.log("triger");
      const res = await loginAccount(data);

      console.log(res);
      authenticate(res.data.user, res.data.token, () => {
        router.push("/write");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.form_container}>
          <div className={styles.form_heding}>
            <h2>Sign in with email</h2>
            <p>Enter the email address associated with your account,</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(handleForm)}>
              {updatedInputs.map((input) => (
                <div key={input.id}>
                  {renderInput(input)}
                  {errors[input.name] && (
                    <p className={"error_Msg"}>{errors[input.name].message}</p>
                  )}
                </div>
              ))}
              <button>submit</button>
            </form>
          </div>
          <div>{/* <GoogleAuthClient /> */}</div>
          <div>
            <GoogleOneTap />
          </div>
        </div>
      </div>
    </div>
  );
}
