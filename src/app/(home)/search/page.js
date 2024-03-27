import React from "react";
import styles from "./search.module.css";

import TagBox from "../../../serverUtils/tags/TagBox";
import BoxCard from "../../../serverUtils/cards/boxCard/BoxCard";
import LandScapeCard from "../../../components/cards/landscape card/LandScapeCard";
import SideBanner from "../../../components/sidebar/sidebanner/SideBanner";
import SideList from "../../../components/sidebar/sidelist/SideList";
import { searchQueryBlogs } from "../../../Actions/blogActions";

async function getData(query, page) {
  const res = await searchQueryBlogs(query, page);
  return await res.data.result;
}

export default async function page(pathname) {
  const page = 1;
  const searchQuery = pathname?.searchParams?.q;
  console.log(searchQuery);
  const data = await getData(searchQuery, page);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content_side}>
          <div className="flex_wrapper">
            <TagBox />
          </div>
          <div className={styles.page_TitleBox}>
            <div className={styles.page_titleWrapper}>
              <h2>Results for {searchQuery}</h2>
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
