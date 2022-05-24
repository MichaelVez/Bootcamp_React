import React, { Component } from "react";
import { Link } from "react-router-dom";
import myData from "../store.js";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { itemData: "" };
  }

  componentDidMount() {
    let itemData = myData[this.props.match.params.id - 1];
    this.setState({ itemData });
    console.log(this.props);
  }
  render() {
    return (
      <div>
        ID{this.props.match.params.id}
        <div>Price {this.state.itemData.title}</div>
        <img src={this.state.itemData.imageUrl} alt='' />
        <div>Price {this.state.itemData.price}</div>
        <div>max-Size {this.state.itemData.size}</div>
        <Link to='/products'>Back</Link>
      </div>
    );
  }
}
