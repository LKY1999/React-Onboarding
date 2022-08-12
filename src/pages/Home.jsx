import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className=" bg">
        <h1 className="py-20 w-full text-center text-cyan-900 font-bold text-4xl">
          Latest News
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliq.
        </p>
        <div className="box">
          <img></img>
          <h2>Lorem ipsum dolor sit met</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt…</p>
          <a href="./Inner">Read more</a>
          {/* <Link to={"./Inner"}>Read more</Link> */}
        </div>
      </div>
    </>
  );
}

export default Home;
