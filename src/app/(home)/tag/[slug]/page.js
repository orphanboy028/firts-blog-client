import React from "react";
import styles from "./tagPage.module.css";
import TagBox from "../../../../serverUtils/tags/TagBox";
import { blogByTag } from "../../../../Actions/blogActions";
import BoxCard from "../../../../serverUtils/cards/boxCard/BoxCard";
import LandScapeCard from "../../../../components/cards/landscape card/LandScapeCard";
import SideBanner from "../../../../components/sidebar/sidebanner/SideBanner";
import SideList from "../../../../components/sidebar/sidelist/SideList";

async function getData(tagquery) {
  const res = await blogByTag(tagquery);

  return await res.data.result;
}
export default async function TagBlogsPage(pathname) {
  const slug = pathname.params.slug;
  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content_side}>
          <div className="flex_wrapper">
            <TagBox />
          </div>
          <div className={styles.page_TitleBox}>
            <div className={styles.page_titleWrapper}>
              <h2>Programing</h2>
            </div>
          </div>
          <div>
            <LandScapeCard cardData={data} />
          </div>
        </div>
        <div className={styles.right_Column_container}>
          <section className="sideBarnner_section">
            <SideBanner />
          </section>
          <section className="quickLink_section">
            <SideList />
          </section>
        </div>
      </div>
    </div>
  );
}
