import React from "react";
import styles from "./tagbox.module.css";
import Link from "next/link";
import { allTags } from "../../Actions/tagAction";

async function getTags() {
  const res = await allTags();

  return await res.data.result;
}

export default async function TagBox() {
  const data = await getTags();

  return (
    <div className="warp_flexContainer20">
      {data &&
        data.map((el, i) => {
          return (
            <div className={styles.tag_container}>
              <Link href={`/tag/${el.tagSlug}`} className="small_boldLink">
                {el.tagName}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
