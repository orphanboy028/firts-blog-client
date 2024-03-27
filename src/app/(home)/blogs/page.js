import React, { Suspense } from "react";
import styles from "./blogpage.module.css";
import Tab from "../../../components/Tab/Tab";
import BoxCard from "../../../serverUtils/cards/boxCard/BoxCard";
import SideBanner from "../../../serverUtils/sideBanner/SideBanner";
import SideBarList from "../../../serverUtils/cards/sideBarList/SideBarList";
import { tagfillterBlogs } from "../../../Actions/blogActions";
import LoadMore from "../../../components/loading/LoadMore";
import banner from "../../../../public/website-static-img/lanscape-banner.png";
import Image from "next/image";
import LandScapeCard from "../../../components/cards/landscape card/LandScapeCard";
import sideBanner from "../../../../public/website-static-img/sie-banner.png";
import Link from "next/link";
import CardSkeleton from "../../../staticUtlis/LoadingSkeleton/CardSkeleton";
import Loading from "./loading";

async function getData(tagquery, page) {
  const res = await tagfillterBlogs(tagquery, page);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await res.data.result;
}
export default async function BlogPage(pathname) {
  const page = 1;
  const tagquery = pathname?.searchParams?.tag;
  const data = await getData(tagquery, page);

  return (
    <div className="childern_wrapper">
      <section className={styles.banner_container}>
        <div className={styles.banner_wrapper}>
          <Image
            src={banner}
            alt="banner"
            className={styles.bannerImage_style}
          />
        </div>
      </section>

      <div className={styles.Fixedtwo_columnContainer}>
        <div className={styles.left_Column_container}>
          <section className={styles.Navigationtab_section}>
            <Tab />
          </section>
          <section className={styles.cardSection}>
            <Suspense fallback={<Loading />}>
              <LandScapeCard cardData={data} />
            </Suspense>
            {data.length > 1 && (
              <LoadMore pageQuery={tagquery} oldData={data} />
            )}
          </section>
        </div>
        <div className={styles.right_Column_container}>
          <section className="sideBarnner_section">
            <div className="sideBanner_Container">
              <Image
                src={sideBanner}
                alt="side banner"
                width={500}
                height={500}
                className="sideBannerImage"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
