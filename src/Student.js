/*import React, { Component, Fragment } from "react";
const Student = (props) => {
    return (
        <h3 style ={ {backgroundColor: "pink"}} >Hi, This is Student. {props.name}</h3>);
       
};
export default Student;*/


import React, {Component, Fragment} from "react";


class Student extends Component {
    render(){
        return <Fragment>

          <h1 style ={ {backgroundColor: "pink"}}>React JS</h1>

          <p>React (also known as React.js or ReactJS) is an open-source front-end JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
          </p>
          <p>Components React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props":[8]

</p>

    </ Fragment>  
    }
}

export default Student;