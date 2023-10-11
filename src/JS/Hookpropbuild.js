import React, { useState } from "react";
export const Hookpropbuild = () => {
  const [userName, setUserName] = useState("hi");
  const handleUserNameChange = (newUserName) => {
    setUserName(newUserName);
  };
  return (
    <div>
      {userName}
      <Child setUserName={handleUserNameChange} />
    </div>
  );
};
export const Child = ({ setUserName }) => {
  return <GrandChild setUserName={setUserName} />;
};

export const GrandChild = ({ setUserName }) => {
  return (
    <div>
      <button onClick={() => setUserName("Hey")}>click</button>
    </div>
  );
};
export default Hookpropbuild;
