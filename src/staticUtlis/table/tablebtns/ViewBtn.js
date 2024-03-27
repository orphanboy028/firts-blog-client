"use client";
import React from "react";
import Link from "next/link";

export default function ViewBtn(props) {
  const { viewBtnText, btnAction, passValue } = props;

  return (
    <div>
      <button onClick={() => btnAction(passValue)}>{viewBtnText}</button>
    </div>
  );
}
