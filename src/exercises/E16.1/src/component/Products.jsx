import React, { Component } from "react";
import myData from "../store.js";
import { Link } from "react-router-dom";
import "./Products.css";
export default class products extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  mapItem = () => {
    return this.state.data.map((el) => {
      return (
        <span className='product' key={el.title}>
          {el.title}
          <img src={el.imageUrl} alt='' />
          <Link to={`/product/${el.id}`}>More info</Link>
        </span>
      );
    });
  };

  componentDidMount = () => {
    this.setState({ data: myData });
  };
  componentDidUpdate() {}
  render() {
    return <div className='products'>{this.mapItem()}</div>;
  }
}
