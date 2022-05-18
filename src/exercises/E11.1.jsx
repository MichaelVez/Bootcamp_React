import React from "react";
import MyButtons from "./E11.1.comp";

export default class App111 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  handleClick = (e) => {
    console.log(e);
    this.setState({ color: e.item });
  };
  render() {
    return (
      <div className='cont'>
        <MyButtons handleClick={this.handleClick} />
        <h1>Color: {this.state.color}</h1>
      </div>
    );
  }
}
