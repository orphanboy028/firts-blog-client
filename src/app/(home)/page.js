import BoxCard from "../../serverUtils/cards/boxCard/BoxCard";
import styles from "./homepage.module.css";
import SideBarList from "../../serverUtils/cards/sideBarList/SideBarList";
import TagBox from "../../serverUtils/tags/TagBox";
import { allBlogs } from "../../Actions/blogActions";

import { Suspense } from "react";
import LandScapeCard from "../../components/cards/landscape card/LandScapeCard";
import FeatureCard from "../../components/cards/feature card/FeatureCard";
import SideBanner from "../../components/sidebar/sidebanner/SideBanner";
import SideList from "../../components/sidebar/sidelist/SideList";

async function getData() {
  const res = await fetch(
    "http://localhost:8000/api/v1/first-blog/blog/all-blogs",
    { cache: "no-store" }
  );
  const data = await res.json(); // Parse JSON data from response
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.result;
}

function Loading() {
  return (
    <div style={{ backgroundColor: "red", width: "50%", height: "300px" }}>
      <h2>🌀 Loading...</h2>;
    </div>
  );
}

export default async function HomePage() {
  const data = await getData();

  const slicedData = data.slice(0, 6);
  return (
    <div className="childern_wrapper">
      <section>
        <div className="section_headingBox">
          <h2>Featured on Medium</h2>
        </div>

        <div className="warp_flexContainer">
          <Suspense fallback={<Loading />}>
            <FeatureCard cardData={slicedData} />
          </Suspense>
        </div>
      </section>
      <section className="section_wrapper">
        <TagBox />
      </section>
      <div className="two_columnContainer">
        <div className="left_Column_container">
          <div className={styles.cardSection}>
            <Suspense fallback={<Loading />}>
              <LandScapeCard cardData={data} />
            </Suspense>
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
