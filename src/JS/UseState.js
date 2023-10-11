import React, { useState } from "react";
function UseState() {
  const { count, setcount } = useState(0);
  function handlesum1() {
    setcount(count + 1);
  }
  function handlesum2() {
    setcount(count - 1);
  }
  return (
    <div>
      <span>{count}</span>
      <button onclick={handlesum2}>Decrement</button>
      <button onclick={handlesum1}>Increment</button>
    </div>
  );
}
export default UseState;
