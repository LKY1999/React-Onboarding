import React from "react";
import "../styles/Home.css";

function Inner() {
  return (
    <>
      <div className="py-20 px-20">
        <div className="flex items-center">
          <img src="src/assets/back.svg" alt="back" className="h-5  "></img>
          <p className="pl-2">back</p>
        </div>
        <h1 className="py-10 text-left text-cyan-900 font-bold text-3xl">
          Lorem ipsum dolor sit met
        </h1>
        <div className="box"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun ut labore et dolore magna aliqua. Placerat
          vestibulum lectus mauris ultrices eros. Non pulvinar neque laoreet
          suspendisse interdum. Nibh praesent tristique magna sit amet purus
          gravida. Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
          Eget lorem dolor sed viverra ipsum nunc. Eu ultrices vitae auctor eu
          augue ut. Odio facilisis mauris sit amet massa. Pulvinar sapien et
          ligula ullamcorper malesuada proin libero. Amet mattis vulputate enim
          nulla aliquet. Adipiscing elit ut aliquam purus sit amet luctus.
          Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.
          Interdum varius sit amet mattis vulputate enim. Proin nibh nisl
          condimentum id.
        </p>
        <br />
        <p>
          Ut venenatis tellus in metus. Tellus pellentesque eu tincidunt tortor
          aliquam. At in tellus integer feugiat. Commodo viverra maecenas
          accumsan lacus. Tellus id interdum velit laoreet id donec ultrices
          tincidunt. In arcu cursus euismod quis viverra nibh cras pulvinar
          mattis. In hendrerit gravida rutrum quisque non tellus. Iaculis at
          erat pellentesque adipiscing commodo. Accumsan sit amet nulla facilisi
          morbi tempus iaculis. Pharetra et ultrices neque ornare. Massa tempor
          nec feugiat nisl pretium fusce. Sit amet dictum sit amet justo donec.
          Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
          Platea dictumst vestibulum rhoncus est pellentesque elit. Dolor sit
          amet consectetur adipiscing. Ipsum.
        </p>

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
        <div className="py-5 px-5">
          <h3>Example@email.com</h3>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun ut labore et dolore magna aliqua. Placerat
            vestibulum lectus mauris ultrices eros. Non pulvinar neque laoreet
            suspendisse interdum. Nibh praesent tristique magna sit amet purus
            gravida. Eu tincidunt tortor
          </p>
        </div>
      </div>
    </>
  );
}

export default Inner;
