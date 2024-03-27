"use client";
import React, { useContext } from "react";
import { AppContext } from "../../../contextApi/adminsContext/AppContextApi";

export default function DeleteBtn(props) {
  const { viewBtnText, btnAction, passValue } = props;
  const { handelOpenModel } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => handelOpenModel(passValue)}>{viewBtnText}</button>
    </div>
  );
}
