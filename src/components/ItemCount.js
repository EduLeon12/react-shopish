import React from "react";

function ItemCount({ initial, min, max, onAdd }) {
  const [count, setCount] = React.useState(initial);

  const decrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  return (
    <div className="mx-auto items-center">
      <div>
        <button className="m-1" onClick={decrement}>
          -
        </button>{" "}
        <span>{count}</span>{" "}
        <button className="m-1" onClick={increment}>
          +
        </button>
      </div>
      <button
        className=" shadow bg-gray-600 text-base w-auto ml-auto mr-auto items-center text-center hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
        onClick={() => onAdd(count)}
      >
        Add
        <span className="mx-2">{count}</span>
        to Cart
      </button>
    </div>
  );
}

export default ItemCount;
