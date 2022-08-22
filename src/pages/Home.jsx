import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import news from "../assets/data/news";
import NewsCard from "../assets/components/NewsCard";

function Home() {
  return (
    <>
      <div className="bg-Bgcolor">
        <div className="p-20">
          <h1 className="py-20 w-full text-center text-cyan-900 font-bold text-4xl">
            Latest News
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliq.
          </p>

          {news.map((news) => (
            <NewsCard news={news} key={news.city} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
