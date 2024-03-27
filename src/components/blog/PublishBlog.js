"use client";

import React, { useState } from "react";
import styles from "./publishblog.module.css";
import SubmitBtn from "../../staticUtlis/elements/buttons/SubmitBtn";
import Image from "next/image";
import dummyImage from "../../../public/website-static-img/sie-banner.png";
import AddBlogTag from "./AddBlogTag";

export default function PublishBlog() {
  const [loadingBtn, setloadingBtn] = useState(false);
  return (
    <div className={styles.main_container}>
      <div className={styles.top_btnBar}>
        <SubmitBtn
          btnText="Publish"
          disabled={false}
          btnSize="inline_btn"
          loading={loadingBtn}
        />
      </div>
      <div className={styles.container_wrapper}>
        <div className={styles.left_wrapper}>
          <div className={styles.title_Box}>
            <h4>
              The Brain Science Behind Aging and Forgetting Behind Aging and
              Forgetting
            </h4>
          </div>
          <div className={styles.imageBox}>
            <Image
              src={dummyImage}
              alt="blog-thumblin"
              className={styles.imageStyle}
            />
          </div>
        </div>
        <div className={styles.right_wrapper}>
          <AddBlogTag />
        </div>
      </div>
    </div>
  );
}
