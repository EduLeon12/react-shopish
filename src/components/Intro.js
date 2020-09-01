import React from "react";
import "../tailwind.css";

export default function Intro() {
  return (
    <section className="bg-gray-300 flex-col mx-auto mb-6 w-full h-64 ">
      <div className=" flex-col text-center m-2 mt-12 ">
        <h1 className="text-black "> Lorem ipsum</h1>
        <p className="text-sm  text-black ">
          Lorem ipsum dolor sit amet, consectetur random link adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex-wrap mt-8 ">
        <button className="shadow bg-white text-base w-auto ml-auto mr-2 items-center text-center hover:bg-gray-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded  ">
          Shop Now
        </button>
        <button className="shadow bg-white text-base w-auto ml-2 mr-auto items-center text-center hover:bg-gray-500 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded  ">
          About us
        </button>
      </div>
    </section>
  );
}
