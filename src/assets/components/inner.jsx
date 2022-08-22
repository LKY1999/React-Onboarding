import React from "react";
import news from "../data/news";
import CommentCard from "./CommentCard";

export default function innerPage({ news }) {
  return (
    <div className="py-20 px-20 rounded-lg bg-white shadow-lg overflow-hidden">
      <div className="flex items-center">
        <img src="src/assets/back.svg" alt="back" className="h-5  "></img>
        <p className="pl-2">back</p>
      </div>
      <h1 className="py-10 text-left text-cyan-900 font-bold text-3xl">
        {news.title}
      </h1>

      <img className="" src={news.imageUrl} alt={news.imageAlt} />
      <div>
        <p>{news.content}</p>
      </div>

      <div>
        <h2 className="py-10 text-3xl">Comments</h2>
        <form className=" border-2 rounded max-w-sm">
          <input
            className=" p-1"
            type={"email"}
            id={"email"}
            value={"Email"}
          ></input>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {news.map((news) => (
          <CommentCard news={news} key={news.title} />
        ))}
      </div>
    </div>
  );
}
