 //More on render methode & Class - Function component

/*import React , { Component, Fragment } from "react";

class App extends Component {
    render(){
        return <Fragment>

          <h1>This is component</h1>;
          <h3>Hello, {this.props.name}</h3>;
          
         
        </Fragment>
    }
}
export default App;*/


/* mport { render } from "react-dom";
function Student (props)
{
    render()
    {
    return <React.Fragment> 
             <h1>Hi this is me, {props.name}</h1>;
             <p>This is Function Component made by {props.name}</p>;
             </React.Fragment>
     }
}
export default Student;*/

//JSX in React JS 

/*import React from "react";
function show(n){
    return n;
}
const el = <h1>Hello {show("Diksha")}</h1>;

export default el; */

//import React from "react";
//const el = <h1>
//</h1>/export default el;

import React , { Component } from "react";
import Student from "./Student";
import Child from "./Child";
import "./App.css"
import proptypes from "prop-types";

class App extends Component {
   
    render(){
    
        return <div className= "bg">
          
          <Child />
          <Student />
         
          <h1 style ={ {backgroundColor: "pink"}}>Conclusion</h1>

          <p> Everyone should leran JavaScript and React JS it is very good!
          </p>
          <img src={process.env.PUBLIC_URL + "/p.jpg"} 
          alt= "Network"/>
           
          <h4 style={{textAlignLast:"right"}}>Article By:-Diksha Sharma</h4>

        
    </ div>  
    }
}
App.defaultProps = {
    name: proptypes.number
}
export default App;


