import React from "react";
import CommentCard from "./CommentCard";
import { Link } from "react-router-dom";

export default function Article({ news, id }) {
  if (news.id == id) {
    return (
      <div className="py-20 px-20 w-9/12 m-auto">
        <div className="flex items-end">
          <Link to={"/"}>
            <img src="/src/assets/back.svg" alt="back" className="h-5 inline" />
            <p className="pl-2 inline">Back</p>
          </Link>
        </div>
        <h1 className="py-10 text-left text-cyan-900 font-bold text-3xl">
          {news.title}
        </h1>

        <img className=" mb-10" src={news.imageUrl} alt={news.imageAlt} />
        <div>
          <p>{news.content}</p>
        </div>

        <div className="border-y-8">
          <h2 className="py-10 text-3xl">Comments</h2>
          <form className=" border-2 rounded max-w-sm">
            <input
              className=" p-1"
              type={"email"}
              id={"email"}
              value={"Email"}
            ></input>
          </form>
          <div className=" mx-8">
            {news.comments.map((comment) => (
              <CommentCard comment={comment} key={news.comments.email} />
            ))}
          </div>
        </div>
      </div>
    );
  } else if (id == null) {
    return <h1>404 Not Found</h1>;
  } else return null;
}
