"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createCommentAction } from "../../Actions/blogCommentAction";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function WriteComment(props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tag = searchParams;
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { blogId } = props;
  const [loading, setloading] = useState(false);
  const [clientComments, setclientComments] = useState([]);

  const handelCreateComment = async (data) => {
    try {
      setloading(true);
      const res = await createCommentAction(data);
      setclientComments([...clientComments, res.data.newComment.comment]);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [loading]);

  return (
    <div>
      {loading ? <p>loading....</p> : <p>ok</p>}
      <p>{blogId}</p>

      <form onSubmit={handleSubmit(handelCreateComment)}>
        <input
          type="hidden"
          name="blogId"
          value={blogId}
          {...register("blog")}
        />
        <input
          type="text"
          placeholder="Add a Cooment"
          {...register("comment", { required: true })}
        />

        <button> comment</button>
      </form>

      {/* <div>
        {clientComments.map((el, i) => {
          return (
            <div key={i}>
              <span>user pic</span>
              <span>{el}</span>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
