import React from "react";
import { Link } from "react-router-dom";

export default function Sections() {
  return (
    <div className="container flex flex-wrap justify-center mx-auto">
      <Link to="/items">
        <div className="h-40 w-40 bg-white text-black text-center rounded m-3">
          ItemList
        </div>
      </Link>
      <Link to="/contactform">
        <div className="h-40 w-40 bg-white text-black rounded text-center m-3">
          Contactanos
        </div>
      </Link>
      <Link to="/about">
        <div className="h-40 w-40 bg-white text-black rounded text-center  m-3">
          About
        </div>
      </Link>
    </div>
  );
}
