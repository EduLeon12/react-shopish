import React from "react";
import "../tailwind.css";
import image from "../macbook.jpg";

export default function Intro() {
  return (
    <section className="container  flex-col mx-auto my-6 bg-gray-500 w-full h-64 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
      <div className=" flex-col text-center m-2 mt-12">
        <h1> Lorem ipsum</h1>
        <p className="text-sm">
          {" "}
          Lorem ipsum dolor sit amet, consectetur random link adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="flex-wrap mt-8">
        <button className="shadow bg-white text-base w-auto ml-auto mr-2 items-center text-center hover:bg-gray-300 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded">
          Shop Now
        </button>
        <button className="shadow bg-white text-base w-auto ml-2 mr-auto items-center text-center hover:bg-gray-300 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded">
          About us
        </button>
      </div>
    </section>
  );
}
