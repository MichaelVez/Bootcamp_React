import React from "react";

class App22 extends React.Component {
  state = {
    data: ["hello", "world"],
    number1: 5,
    number2: 6,
    string: "I love React!",
  };

  printHello = () => {
    const { data } = this.state;
    return data[0] + " " + data[1];
  };

  render() {
    return (
      <React.Fragment>
        <h1>{this.printHello()}</h1>
        <h2>
          {this.state.number1} + {this.state.number2} ={" "}
          {this.state.number1 + this.state.number2}
        </h2>
        <h3>the string length is - {this.state.string.length}</h3>
      </React.Fragment>
    );
  }
}

export default App22;
