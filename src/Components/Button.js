import React, {Component } from "react";

export default class Button extends Component{
   
render(){

    

    let {buttonName,arrow,onClick,disabled} = this.props;
    return(
    <div>
        <button type="button" className="btn btn-secondary mb-3 " onClick={onClick} disabled = {disabled} > {buttonName} <b>{arrow}</b> </button>
     </div>
    )
}
}
