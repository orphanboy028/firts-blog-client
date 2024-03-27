"use client";

import React from "react";
import WriteComment from "./WriteComment";
import ComentReply from "./ComentReply";
import WriteReply from "./WriteReply";

export default function BlogComments(props) {
  const { comments } = props;

  console.log("blog comment");
  console.log(comments);

  return (
    <div>
      <div>
        {comments.map((el, i) => {
          return (
            <div key={i}>
              <div>
                <span>User Image</span>
                <span>{el.commentBy.name}</span>
              </div>
              <p>{el.comment}</p>
              <div> replyBtn </div>
              <WriteReply commentId={el._id} />
              <ComentReply replies={el.replies} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
