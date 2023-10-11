import React, { useCallback, useState, usememo } from "react";
function UseMemo() {
  const [color, setColor] = useState("#fff");
  const [letter, setLetter] = useState("a");

  const handleColorChange = useCallback(() => setColor(randomColor()), []);
  const handleLetterChange = useCallback(() => setLetter(randomLetter()), []);
  const randomColor = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };
  const randomLetter = () => {
    const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * Letters.length);
    return Letters.charAt(randomIndex);
  };
  return (
    <div>
      <button onClick={handleColorChange}>Change Color</button>
      <button onClick={handleLetterChange}>Change Letter</button>
      <hr />
      <h1 style={{ color }}>{letter}</h1>
    </div>
  );
}
export default UseMemo;
