import React, { Component} from "react";
class User extends Component{
    render(){
        return(
           <div>
               <h1>WELCOME AGAIN {this.props.name}</h1>
                    <button>LOG-IN</button>
           </div>
        );
    }
}
export default User;


