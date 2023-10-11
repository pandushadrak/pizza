import React, { createContext } from "react";
const NameContext = createContext("");
function Context() {
  return (
    <NameContext.Provider value="Shadrak">
      <Body />
    </NameContext.Provider>
  );
}
function Body() {
  return <Greeting />;
}
function Greeting() {
  return (
    <NameContext.Consumer>
      {(name) => <h1>Welcome, {name}</h1>}
    </NameContext.Consumer>
  );
}
export default Context;
