
/* import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import Student from "./App";

//ReactDOM.render(<App name= "Diksha Sharma"/>, document.getElementById("root"));
ReactDOM.render( <Student name= "Diksha Sharma"/> , document.getElementById("root"));

//let el = <h1>Hello World</h1>;
//ReactDOM.render(el, document.getElementById("root"));
*/




import ReactDOM from  "react-dom";
import App from "./App";
import Appp from "./Appp";
import Form from "./Form";
ReactDOM.render (<App />, document.getElementById("root"));
ReactDOM.render (<Appp  consumer = {false} />, document.getElementById("main"));
//ReactDOM.render(<Form />, document.getElementById("maiin"));