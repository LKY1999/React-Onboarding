import React from "react";

export default function CommentCard({ comment }) {
  return (
    <div className="border-b-2 py-8 last:border-b-0">
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">{comment.email}</h2>
        <p className="text-gray-600">{comment.content}</p>
      </div>
    </div>
  );
}
