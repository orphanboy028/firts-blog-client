"use client";
import React, { useContext, useState } from "react";
import styles from "./css/model.module.css";
import { AppContext } from "../../contextApi/adminsContext/AppContextApi";

export default function Model(props) {
  const { modelBox, setmodelBox, modelPassData, setmodelPassData } =
    useContext(AppContext);
  const { yesAction } = props;

  const modelAction = modelBox
    ? styles.modelContainerOpen
    : styles.modelContainerClose;

  const handelModelClose = () => {
    setmodelBox(false);
  };

  const handelModelYesAction = () => {
    yesAction(modelPassData);
  };

  return (
    <div className={modelAction}>
      <div className={styles.model_Box}>
        <p>Pass Value</p>
        <p>{modelPassData}</p>
        <div>
          <button onClick={handelModelClose}>No</button>
          <button onClick={() => handelModelYesAction()}> Yes</button>
        </div>
      </div>
    </div>
  );
}
