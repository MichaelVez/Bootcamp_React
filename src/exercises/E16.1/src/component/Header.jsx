import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </div>
    );
  }
}
