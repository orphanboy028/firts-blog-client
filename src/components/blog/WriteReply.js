"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createReplyAction } from "../../Actions/blogCommentAction";

export default function WriteReply(props) {
  const { commentId } = props;
  const [loading, setloading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handelReply = async (data) => {
    try {
      setloading(true);
      const res = await createReplyAction(data);
      console.log(res);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>{commentId}</p>
      <form onSubmit={handleSubmit(handelReply)}>
        <input
          type="hidden"
          name="commentId"
          value={commentId}
          {...register("commentId")}
        />
        <input
          type="text"
          name="comment"
          placeholder="Reply On comment"
          {...register("comment", { required: true })}
        />

        <button> Reply</button>
      </form>
    </div>
  );
}
