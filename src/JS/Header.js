import React from "react";

const Header = (props) => {
  console.log(props);
  console.log(props.title);
  return (
    <div>
      <h1 style={{ backgroundColor: "blue" }}>Form</h1>
    </div>
  );
};
export default Header;
