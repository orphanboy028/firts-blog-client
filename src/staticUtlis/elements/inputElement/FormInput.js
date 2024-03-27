"use client";

import React, { forwardRef } from "react";
import styles from "./forminput.module.css";

function FormInput(props, ref) {
  const { value, ...inputProps } = props;

  return (
    <div className={styles.filedContainer}>
      {/* <div className={styles.lable_Box}>lable</div> */}

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

export default forwardRef(FormInput);
