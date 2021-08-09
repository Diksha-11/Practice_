import React, { Component } from "react";
import Guest from "./guest";
import User from "./user"
class Appp extends Component{
    render(){
              const isRegistered = this.props.consumer;
              if(isRegistered){
                  return <User name = "diksharma_07"/>;
              }
              return <Guest />;
   }
}
export default Appp;
