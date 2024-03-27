import React from "react";
import styles from "./write.module.css";
import CreateBlog from "../../../components/blog/CreateBlog";

export default function WritePage() {
  return (
    <div className={styles.main_container}>
      <CreateBlog />
    </div>
  );
}
