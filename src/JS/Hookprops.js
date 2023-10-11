import React, { useState } from "react";
export const Hookprops = () => {
  const [userName, setUserName] = useState("hi");
  const handleUserNameChange = (newUserName) => {
    setUserName(newUserName);
  };
  return (
    <div>
      <Child userName={userName} />
      <GrandChild onUserNameChange={handleUserNameChange} />
    </div>
  );
};
export const Child = (props) => {
  const { userName } = props;
  return <h1>{userName}</h1>;
};

export const GrandChild = (props) => {
  const { onUserNameChange } = props;
  return (
    <div>
      <button onClick={() => onUserNameChange("Hey")}>click</button>
    </div>
  );
};

export default Hookprops;
