"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { tagfillterBlogs } from "../../Actions/blogActions";
import BoxCard from "../../serverUtils/cards/boxCard/BoxCard";
import LandScapeCard from "../cards/landscape card/LandScapeCard";
import CardSkeleton from "../../staticUtlis/LoadingSkeleton/CardSkeleton";

let page = 2;

export default function LoadMore(props) {
  const { pageQuery, oldData } = props;
  const { ref, inView, entry } = useInView();
  const [data, setdata] = useState([]);

  console.log(oldData);
  useEffect(() => {
    if (inView) {
      handelFetchData(page);
      page++;
    }
  }, [inView]);

  const handelFetchData = async (pageNumber) => {
    try {
      const res = await tagfillterBlogs(pageQuery, pageNumber);
      console.log(res);
      const Newdata = res.data.result;
      setdata([oldData, ...Newdata]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <>
      <div className="flex_wrapper">
        <Suspense fallback={<h1>loading</h1>}>
          <LandScapeCard cardData={data} />
        </Suspense>
      </div>

      <div ref={ref}>
        <p>Load more ...</p>
      </div>
    </>
  );
}
