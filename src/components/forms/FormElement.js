"use client";

import React, { useState } from "react";
import useCustomeForm from "../../custome-hooks/useCustomeForm";
import styles from "./formelement.module.css";
import SubmitBtn from "../../staticUtlis/elements/buttons/SubmitBtn";
export default function FormElement(props) {
  const { formInputs, inputApiDetails, handelFormSubmitApi, setIsLoading } =
    props;

  const [loadingBtn, setloadingBtn] = useState(false);
  const {
    handleSubmit,
    formState,
    control,
    watch,
    renderInput,
    isValid,
    errors,
  } = useCustomeForm(formInputs, inputApiDetails);

  const handleForm = async (data) => {
    try {
      setIsLoading(true);
      const res = await handelFormSubmitApi(data);
      console.log(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.formeCard}>
      <div className={styles.formCard_header}>Profile</div>
      <form onSubmit={handleSubmit(handleForm)} className={styles.form_Wrapper}>
        {formInputs.map((input) => (
          <div key={input.id}>
            {renderInput(input)}
            {errors[input.name] && (
              <p className={"error_Msg"}>{errors[input.name].message}</p>
            )}
          </div>
        ))}
        <div className={styles.submitBtn_wrapper}>
          <SubmitBtn
            btnText="Submit"
            disabled={!isValid}
            btnSize="inline_btn"
            loading={loadingBtn}
          />
        </div>
      </form>
    </div>
  );
}
