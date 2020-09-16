import React from "react";

export default function Filter({ onChange }) {
  return (
    <div className="  flex-start flex-col flex-start">
      <h3 className="text-sm text-black"> Filters </h3>
      <div className="flex flex-wrap w-full ">
        <input
          className="px-4 rounded shadow bg-black mr-1 "
          onClick={() => onChange("I3")}
          type="checkbox"
        ></input>
        <span className="text-xs text-black "> I3 </span>
      </div>
      <div className="flex flex-wrap w-full">
        <input
          className="px-4  rounded shadow bg-black mr-1 "
          onClick={() => onChange("I5")}
          type="checkbox"
        ></input>
        <span
          className="text-xs text-black
      "
        >
          I5{" "}
        </span>
      </div>
      <div className="flex flex-wrap w-full">
        <input
          className="px-4  rounded shadow bg-black mr-1 "
          onClick={() => onChange("I7")}
          type="checkbox"
        ></input>
        <span
          className="text-xs text-black
      "
        >
          I7{" "}
        </span>
      </div>
    </div>
  );
}
