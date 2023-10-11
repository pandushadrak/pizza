import React, { useRef } from "react";
function UseRef() {
  const inputRef = useRef(null);
  const onBtnClick = () => inputRef.current.focus();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={onBtnClick}>Focus on text input</button>
    </>
  );
}
export default UseRef;
