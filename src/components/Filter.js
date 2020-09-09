import React from "react";

export default function Filter({ onChange }) {
  return (
    <div>
      <button
        className="px-4 py-2 rounded shadow bg-black mr-2 "
        onClick={() => onChange("I5")}
      >
        {" "}
        I5{" "}
      </button>
      <button
        className="px-4 py-2 rounded shadow bg-black "
        onClick={() => onChange("I7")}
      >
        {" "}
        I7{" "}
      </button>
    </div>
  );
}
