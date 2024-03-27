"use client";

import React from "react";
import BtnLoading from "../../loading/BtnLoading";

export default function SubmitBtn(props) {
  const { btnText, disabled = false, btnSize, loading } = props;

  const btnClasses = ` ${btnSize} ${disabled ? "disabledBtn" : ""}`;

  return (
    <button type="submit" disabled={disabled} className={btnClasses}>
      {loading ? <BtnLoading /> : btnText}
    </button>
  );
}
