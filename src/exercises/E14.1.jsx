import React, { Component } from "react";

export default class App141 extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <form action='#'>
          <label htmlFor='name'>Full name:</label>
          <input ref={this.inputRef} type='text' id='name' />
          <label htmlFor='adress'>Adress:</label>
          <input type='text' id='adress' />
          <label htmlFor='terms'>Agree to Terms:</label>
          <input type='checkbox' id='terms' />
        </form>
        pp141
      </div>
    );
  }
}
