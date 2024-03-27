"use client";
import React, { useState } from "react";
import styles from "./authform.module.css";
import formLogo from "../../../../public/website-static-img/form-logo.png";
import Image from "next/image";
import useCustomeAuthForm from "../../../custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../../../staticUtlis/elements/buttons/SubmitBtn";
import { useParams } from "next/navigation";
import { authenticate } from "../../../Actions/authAction";
import { useRouter } from "next/navigation";
export default function AuthForm(props) {
  const router = useRouter();
  const { formTitle, formDescreption, formFileds, formFor, submitHandel } =
    props;
  const [loadingBtn, setloadingBtn] = useState(false);

  const {
    handleSubmit,
    formState,
    control,
    watch,
    renderInput,
    updatedInputs,
    isValid,
    errors,
  } = useCustomeAuthForm(formFileds, formFor);

  const handleForm = async (data) => {
    try {
      const res = await submitHandel(data);
      console.log(res);
      authenticate(res.data.user, res.data.token, () => {
        router.push("/write");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.form_logoBox}>
        <Image
          src={formLogo}
          alt="form-logo"
          width={500}
          height={500}
          className={styles.formLogo_style}
        />
      </div>
      <div className={styles.form_titleBox}>
        <h2> {formTitle}</h2>
      </div>
      <div className={styles.form_descreptionBox}>
        <p>{formDescreption}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit(handleForm)}>
          <div className={styles.inputContainer}>
            {updatedInputs.map((input) => (
              <div key={input.id}>
                {renderInput(input)}
                {errors[input.name] && (
                  <p className={"errorMes"}>{errors[input.name].message}</p>
                )}
              </div>
            ))}
          </div>
          <div>
            <SubmitBtn
              btnText="Submit"
              disabled={!isValid}
              btnSize="larg_btn"
              loading={loadingBtn}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
