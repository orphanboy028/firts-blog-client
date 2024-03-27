import React from "react";
import styles from "./singlepage.module.css";
import Image from "next/image";
import SideBanner from "../../../../serverUtils/sideBanner/SideBanner";
import SideBarList from "../../../../serverUtils/cards/sideBarList/SideBarList";
import { singleBlogs } from "../../../../Actions/blogActions";
import BlogComments from "../../../../components/blog/BlogComments";
import WriteComment from "../../../../components/blog/WriteComment";

async function getData(slug) {
  const res = await singleBlogs(slug);

  return await res.data.result;
}

export default async function SinglePageBlog(pathname) {
  const slug = pathname.params?.slug;

  const data = await getData(slug);
  console.log(data);
  return (
    <div className={styles.main_container}>
      <div className={styles.wraaper}>
        <div className={styles.content_warpper}>
          {data.title && (
            <div className={styles.blog_titleBox}>
              <h1>{data.title}</h1>
            </div>
          )}

          {data.BlogThumblin.url && (
            <div className={styles.thumblin_box}>
              <Image
                src={`/blog-thumblin/${data.BlogThumblin.url}`}
                alt="blog-thumblin"
                width={500}
                height={500}
                className={styles.thumblin_imageStyle}
              />
            </div>
          )}

          <div className={styles.metaDescreption_box}>
            <p>
              {" "}
              Python interviews require that you not only understand the
              fundamental concepts of this popular programming language, but
              that you also showcase your practical skills through coding
              challenges presented to you during the interview.{" "}
            </p>
          </div>
          <div
            className={styles.content_box}
            dangerouslySetInnerHTML={{ __html: data?.descreption }}
          />

          <div>
            <WriteComment blogId={data._id} />
          </div>
          <div>
            <BlogComments comments={data.comments} />
          </div>
        </div>
        <div className="right_sideColumn_wrapper">
          <div className="section_gap">
            <SideBanner />
          </div>
          <div>
            <SideBarList listTitle="Featire post" />
          </div>
        </div>
      </div>
    </div>
  );
}
