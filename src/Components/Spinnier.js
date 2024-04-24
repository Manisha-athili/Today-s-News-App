import React, { Component } from 'react';
import Spinnier1 from './Spinner-2.gif';

export class Spinnier extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Spinnier1}  alt='loading' ></img>
      </div>
    )
  }
}

export default Spinnier
