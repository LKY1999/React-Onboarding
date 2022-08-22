import React from "react";

export default function NewsCard({ news }) {
  return (
    <div className="rounded-lg bg-white shadow-lg overflow-hidden">
      <div>
        <img className="" src={news.imageUrl} alt={news.imageAlt} />
        <div>
          <h4>News</h4>
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">{news.title}</h2>

        <p className="text-gray-600">{news.description}</p>
        <div className="mt-4">
          <a href="./">Read more</a>
        </div>
      </div>
    </div>
  );
}