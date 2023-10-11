import React from "react";
import "./Form.css";

function a() {
  var x = document.getElementById("a").value;
  var y = document.getElementById("b").value;
  var z = /^[2][1][Aa][8][1][Aa][6][1][0-9][0-9]+$/;

  if (z.test(x) == z.test(y))
    document.getElementById("c").innerHTML = "Sucessfully Logined";
  else
    document.getElementById("c").innerHTML = "Invalid Username (or) Password";
}
function Form() {
  return (
    <div className="ll">
      <div className="a">
        <center>
          <h2>HEY...! LOGIN</h2>
        </center>
        <label className="b">Username:</label>
        <input className="box" id="a" type="text" placeholder="Enter name" />
        <label className="b">Password:</label>
        <input
          className="box"
          id="b"
          type="password"
          placeholder="Enter Password"
        />
        <p></p>
        <button className="box" type="submit">
          <i class="A" onClick={a}>
            Login
          </i>
        </button>
        <p id="c" className="B"></p>
      </div>
    </div>
  );
}
export default Form;
