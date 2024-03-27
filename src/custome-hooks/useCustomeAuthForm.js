"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import InputElement from "../staticUtlis/elements/inputElement/InputElement";

export default function useCustomeAuthForm(customeInputs, formType) {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  let updatedInputs = [...customeInputs];

  if (formType === "SINGUP") {
    updatedInputs = [
      ...updatedInputs,
      {
        id: 5,
        name: "passwordConfirm",
        type: "text",
        placeholder: "password Confirm",
        lable: "password Confirm",
        validation: {
          required: "Confirm Password is required.",
          validate: (value) =>
            value === watch("password") || "Password do not match.",
        },
      },
    ];
  } else if (formType === "RESETPASSWORD") {
    updatedInputs = [
      ...updatedInputs,
      {
        id: 5,
        name: "passwordConfirm",
        type: "text",
        placeholder: "Re-Enter New Password",
        // label: "Confirm Email",
        validation: {
          required: "Confirm Password is required.",
          validate: (value) =>
            value === watch("password") || "Password do not match.",
        },
      },
    ];
  }

  const renderInput = (input) => {
    let InputComponent, specificProps;
    switch (input.type) {
      case "text":
        InputComponent = InputElement;
        specificProps = {
          inputplaceholder: input.placeholder,
          filed_container: "filedContainer",
        };

        break;

      default:
        return null;
    }
    return (
      <Controller
        key={input.id}
        name={input.name}
        control={control}
        defaultValue=""
        rules={input.validation}
        render={({ field }) => (
          <>
            <InputComponent {...input} {...field} {...specificProps} />
          </>
        )}
      />
    );
  };
  return {
    handleSubmit,
    formState, // Ensure formState is included in the returned object
    control,
    watch,
    setValue,
    renderInput,
    updatedInputs,
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
