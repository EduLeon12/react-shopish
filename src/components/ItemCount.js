import React from "react";

function ItemCount({ initial, min, max, onAdd }) {
  const [count, setCount] = React.useState(initial);

  const decrement = () => {
    if (count !== min) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count !== max) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={decrement}>-</button> <span>{count}</span>{" "}
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Add to Cart</button>
    </div>
  );
}

export default ItemCount;
