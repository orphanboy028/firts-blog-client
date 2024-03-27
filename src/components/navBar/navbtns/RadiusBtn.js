import React from "react";
import styles from "./radiusbtn.module.css";
import Link from "next/link";

export default function RadiusBtn(props) {
  const { btnText, btnStyle, pageLink } = props;
  return (
    <div className={styles.btn_Wrapper}>
      <Link href={`/${pageLink}`} className={styles[btnStyle]}>
        {btnText}
      </Link>
    </div>
  );
}
