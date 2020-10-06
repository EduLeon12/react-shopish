import React from "react";
import { Link } from "react-router-dom";

export default function Filter({ onChange }) {
  return (
    <div className="container justify-start   mx-auto">
      <h3 className="text-sm text-black"> Filtrar por procesadores </h3>

      <Link to="/items?procesador=I7">
        <input
          className="px-4 rounded shadow bg-black mr-1 "
          onClick={() => onChange("I3")}
          type="button"
        ></input>
      </Link>
      <span className="text-xs text-black "> I3 </span>

      <Link to="/items?procesador=I5">
        <input
          className="px-4  rounded shadow bg-black mr-1 "
          onClick={() => onChange("I5")}
          type="button"
        ></input>
      </Link>
      <span
        className="text-xs text-black
      "
      >
        I5{" "}
      </span>

      <Link to="/items?procesador=I3">
        <input
          className="px-4  rounded shadow bg-black mr-1 "
          onClick={() => onChange("I7")}
          type="button"
        ></input>
      </Link>
      <span
        className="text-xs text-black
      "
      >
        I7{" "}
      </span>
    </div>
  );
}
