import React from "react";
import CommentCard from "./CommentCard";
import { Link } from "react-router-dom";

export default function Article({ news, id }) {
  if (news.id == id) {
    return (
      <div className="bg-stone-100">
        <div className="w-5/6 md:w-10/12 xl:w-7/12 m-auto pb-20">
          <Link to={"/"} className="flex items-center pt-6 md:pt-16">
            <img src="/src/assets/back.svg" alt="back" className="w-2" />
            <p className="pl-2  font-semibold text-lg ">Back</p>
          </Link>
          <h1 className="mb-5 md:mb-10 mt-4 text-left text-indigo-800 font-bold text-2xl md:text-4xl">
            {news.title}
          </h1>

          <img
            className=" w-full md:w-10/12 xl:w-9/12 my-3 md:my-10 mx-auto"
            src={news.imageUrl}
            alt={news.imageAlt}
          />
          <div>
            <p className="my-8 md:my-20 whitespace-pre-wrap">{news.content}</p>
          </div>

          <div className="border-y border-black">
            <h2 className="mt-10 pb-6 text-3xl text-indigo-800 font-bold">
              Comments ({news.comments.length})
            </h2>
            <form>
              <input
                className=" p-1 pl-4 border-2 rounded-md max-w-sm border-indigo-800 w-full md:w-1/2"
                type={"email"}
                id={"email"}
                placeholder={"Email"}
              ></input>
            </form>
            <div className=" mb-5 pl-8">
              {news.comments.map((comment) => (
                <CommentCard comment={comment} key={news.comments.email} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (id == null) {
    return <h1>404 Not Found</h1>;
  } else return null;
}
