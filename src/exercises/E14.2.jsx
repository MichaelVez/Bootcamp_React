import React, { Component } from "react";

export default class App142 extends Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
  }
  func = () => {
    let myText = this.textRef.current.value;
    navigator.clipboard.writeText(myText);

    alert("coppied");
    let myTextBox = this.textRef.current;
    //focus after alert
    myTextBox.focus();
  };
  render() {
    return (
      <div>
        <textarea
          ref={this.textRef}
          name='texts'
          id=''
          cols='30'
          rows='10'
        ></textarea>
        <button onClick={this.func}>Copy</button>
      </div>
    );
  }
}
