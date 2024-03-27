"use client";

import React, { forwardRef } from "react";
import styles from "./textarea.module.css";
function FormTextarea(props, ref) {
  const { ...inputProps } = props;
  return (
    <div>
      <div className={styles.lable_Box}>
        <label>lable</label>
      </div>
      <div className={styles.input_box}>
        <textarea ref={ref} {...inputProps} className={styles.inputStyle} />
      </div>
    </div>
  );
}

export default forwardRef(FormTextarea);
