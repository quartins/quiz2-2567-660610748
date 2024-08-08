"use client";

import React from "react";

import { CommentProps} from "@/libs/types";
import { ReplyProps } from "@/libs/types";
import Reply from "./Reply";

export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}:CommentProps){
  return (
    <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              {username}
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>{commentText}</span>

            {likeNum > 0 && (<div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
            </div>)
            }
          </div>

          {replies && replies.map((reply) => (
          <Reply
          userImagePath={reply.userImagePath}
          username={reply.username}
          replyText={reply.replyText}
          likeNum={reply.likeNum}
        />
      ))}   
        </div>
  );
}
