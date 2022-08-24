import React from "react";

export default function CommentCard({ comment }) {
  return (
    <div className="border-b py-4 last:border-b-0">
      <div className=" py-4">
        <h2 className="text-md font-bold text-gray-800 pb-2">
          {comment.email}
        </h2>
        <p className="text-gray-500 text-md">{comment.content}</p>
      </div>
    </div>
  );
}
