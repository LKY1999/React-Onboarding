import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
  return (
    <div className="rounded-lg bg-white shadow-md overflow-hidden">
      <div className="relative">
        <img className="" src={news.imageUrl} alt={news.imageAlt} />
        <div className="border-2 rounded-full h-6 w-20 text-center bg-indigo-800/70 border-transparent text-white absolute bottom-5 right-8">
          <h4 className="text-xs font-bold flex flex-row items-center justify-center">
            News
          </h4>
        </div>
      </div>
      <div className="px-6 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{news.title}</h2>

        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {news.content}
        </p>
        <div className="mt-4">
          <Link
            className="font-semibold text-sm text-indigo-800"
            to={`/articles/${news.id}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
