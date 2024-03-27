"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../staticUtlis/elements/inputElement/FormInput";
import FormTextarea from "../staticUtlis/elements/textarea/FormTextarea";

export default function useCustomeForm(inputFileds, apiData) {
  const {
    handleSubmit,
    formState, // Include formState here
    control,
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    // Set default values for fields included in userProfileInputs
    if (apiData) {
      Object.entries(apiData)
        .filter(([name]) => inputFileds.some((input) => input.name === name))
        .forEach(([name, value]) => {
          setValue(name, value);
        });
    }
  }, [apiData, setValue]);

  const renderInput = (input) => {
    let InputComponent, specificProps;
    let defaultValues = apiData[input.name];
    switch (input.type) {
      case "text":
        InputComponent = FormInput;
        specificProps = {
          inputplaceholder: input.placeholder,
          defaultValue: defaultValues || "",
          value: watch(input.name),
          onChange: (e) => setValue(input.name, e.target.value),
        };

        break;

      case "textarea":
        InputComponent = FormTextarea;
        specificProps = {
          inputplaceholder: input.placeholder,
          defaultValue: defaultValues || "",
          value: watch(input.name),
          onChange: (e) => setValue(input.name, e.target.value),
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
        // defaultValue={apiData[input.name]}
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
    isValid: formState.isValid, // Access isValid from formState
    errors: formState.errors,
  };
}
