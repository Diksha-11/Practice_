/*import React from "react";
const Child = (props) => {
    return <h3 style ={ {backgroundColor: "pink"}} >Hi, This is Child  {props.name} </h3>
};
export default Child;*/

import React, {Component, Fragment} from "react";

class Child extends Component {
    render(){
        return <Fragment>

          <h1 style ={ {backgroundColor: "pink"}}>All About JavaScript</h1>

          <p>JavaScript (/ˈdʒɑːvəˌskrɪpt/),[8] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[9] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

          Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[10] Over 97% of websites use it client-side for web page behavior,[11] often incorporating third-party libraries.[12] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.

          As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

         The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

        JavaScript engines were originally used only in web browsers, but now for backends also.
          </p>

    </ Fragment>  
    }
}
export default Child;