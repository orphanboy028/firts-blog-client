"use client";

import React, { useEffect, useState } from "react";
import UserDashBoardLayout from "../../DashBoardlayout";
import UserBlogCard from "../../../../../staticUtlis/blogCards/UserBlogCard";
import { userDraftBlogApi } from "../../../../../Actions/blogActions";

import { Suspense } from "react";
import CardSkeleton from "../../../../../staticUtlis/LoadingSkeleton/CardSkeleton";
import LandScapeCard from "../../../../../components/cards/landscape card/LandScapeCard";
import UserCard from "../../../../../components/cards/usercard/UserCard";

export default function DraftBlogs() {
  const [userBlogs, setuserBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handelBlog();
  }, []);

  const handelBlog = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 100000));

      const res = await userDraftBlogApi();
      console.log(res.data.result);
      setuserBlogs(res.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserDashBoardLayout>
      <div>
        {isLoading ? ( // Check loading state
          <CardSkeleton />
        ) : (
          <Suspense fallback={<h1>Loading feed...</h1>}>
            <UserCard cardData={userBlogs} />
          </Suspense>
        )}
      </div>
    </UserDashBoardLayout>
  );
}
