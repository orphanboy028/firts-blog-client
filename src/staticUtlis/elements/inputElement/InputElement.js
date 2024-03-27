"use client";

import React, { forwardRef } from "react";
import styles from "./inputelement.module.css";

function InputElement(props, ref) {
  const { lable, filed_container, ...inputProps } = props;

  return (
    <div className={styles[filed_container]}>
      <div className={styles.lable_Box}>{lable}</div>
      <div className={styles.input_box}>
        <input
          ref={ref}
          {...inputProps}
          className={styles.inputStyle}
          suppressHydrationWarning={true}
        />
      </div>
    </div>
  );
}

export default forwardRef(InputElement);
