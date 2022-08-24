import React from "react";
import "../../styles/Home.css";
import NewsCard from "./NewsCard";
import news from "../data/news";

function News() {
  return (
    <>
      <div className=" bg-stone-100">
        <div>
          <div className=" bg-indigo-800">
            <div className="flex flex-row justify-between items-center w-9/12 m-auto ">
              <div>
                <h1 className="inline text-white">
                  We are now hosting events with Zoom Webinars!
                  <a className=" pl-3 underline decoration-solid font-bold">
                    Find out more
                  </a>
                </h1>
              </div>
              <div>
                {/* <object
                  data="/src/assets/xmark.svg"
                  width="3"
                  height="3"
                  className="h-3"
                ></object> */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className=" h-4 m-3 fill-white"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
                {/* <img
                  src="/src/assets/xmark.svg"
                  alt="close"
                  className="w-3 m-4"
                /> */}
              </div>
            </div>
          </div>
          <div className=" w-5/6 md:w-10/12 xl:w-7/12 m-auto">
            <h1 className="my-6 text-center text-indigo-800 font-bold text-4xl">
              Latest News
            </h1>
            <p className="text-center mb-10 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliq.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-20">
              {news.map((news) => (
                <NewsCard news={news} key={news.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
