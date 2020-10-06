import React from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function Filter({ onChange }) {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const history = useHistory();
  const handleChange = (value) => {
    search.set("procesador", value);
    history.push({
      pathname: location.pathname,
      search: `?${search}`,
    });
  };

  return (
    <div className="container justify-start   mx-auto">
      <h3 className="text-sm text-black"> Filtrar por procesadores </h3>

      <input
        className="px-4 rounded shadow bg-black mr-1 "
        onClick={() => handleChange("I3")}
        type="button"
      ></input>

      <span className="text-xs text-black "> I3 </span>

      <input
        className="px-4  rounded shadow bg-black mr-1 "
        onClick={() => handleChange("I5")}
        type="button"
      ></input>

      <span
        className="text-xs text-black
      "
      >
        I5{" "}
      </span>

      <input
        className="px-4  rounded shadow bg-black mr-1 "
        onClick={() => handleChange("I7")}
        type="button"
      ></input>

      <span
        className="text-xs text-black
      "
      >
        I7{" "}
      </span>
    </div>
  );
}
