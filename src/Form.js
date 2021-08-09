import React , { Component } from "react";
export default class Form extends Component {
    state = {
        name: " ",
        password: " ",
        Address: " ",
        phone_no :" "
    };
    handleChange = e =>{
 this.setState( {[e.target.id]: e.target.value});
    };
    handleFrom = e =>{
        console.log(e.target[1].name);
        e.preventDefault();
    }
    render(){
        return (
        <div>
            <form onClick = {this.handleFrom}>
                <h1>PLEASE Fill The From</h1>
                <label>
                    name: 
                    <input type = "text"
                    id = "name" 
                    value ={this.state.value}
                    onChange= {this.handleChange} />
                </label><br /><br />

                <label>
                    password: 
                    <input text = "text"
                    id = "password"
                    value ={this.state.value}
                    onChange= {this.handleChange} /> 
                </label><br /><br />
                
                <label>
                    Address:  
                    <input type = "text" 
                    id = "Address"
                    value ={this.state.value}
                    onChange= {this.handleChange} />
                </label><br /><br />


                <label>
                    phone no.: 
                    <input text = "text"
                    id = "phone_no"
                    value ={this.state.value}
                    onChange= {this.handleChange} /> 
                                </label><br /><br />

                </form>
          </div>
        );
    }
}