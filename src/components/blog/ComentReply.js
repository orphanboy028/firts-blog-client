"use client";
import React from "react";

export default function ComentReply(props) {
  const { replies } = props;
  return (
    <div>
      <p>Replies {replies.length}</p>
      <div>
        {replies.map((reply, index) => {
          return (
            <div key={index}>
              {" "}
              <p>{reply.comment}</p>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
