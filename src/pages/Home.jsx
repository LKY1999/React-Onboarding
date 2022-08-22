import React from "react";
import "../styles/Home.css";
import news from "../assets/data/news";
import NewsCard from "../assets/components/NewsCard";

function Home() {
  return (
    <>
      <div className="bg-Bgcolor">
        <div className="p-20">
          <h1 className="py-10 w-full text-center text-cyan-900 font-bold text-4xl">
            Latest News
          </h1>
          <p className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliq.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {news.map((news) => (
              <NewsCard news={news} key={news.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
