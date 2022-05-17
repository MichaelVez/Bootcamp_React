import React from "react";
class App83 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "yellow",
      radius: "0",
      counter: 0,
    };
  }
  componentDidMount() {
    setTimeout(this.myFunc, 1000);
  }
  myFunc = () => {
    let colorsArr = [
      "yellow",
      "red",
      "black",
      "green",
      "orange",
      "pink",
      "cyan",
      "purple",
    ];
    let random = Math.floor(Math.random() * colorsArr.length);
    this.setState({ color: colorsArr[random] });
    this.setState({ counter: this.state.counter++ });
    if (this.state.counter === 5) {
      this.myFunc2();
      // setTimeout(this.myFunc2, 5000);
    }
    if (this.state.counter === 10) {
      this.myFunc3();
      this.setState({ counter: 0 });
    }
    setTimeout(this.myFunc, 2000);
  };
  myFunc2 = () => {
    this.setState({ radius: "100%" });
  };
  myFunc3 = () => {
    this.setState({ radius: "0" });
  };
  render() {
    return (
      <div>
        <div
          id='box'
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: `${this.state.color}`,
            transition: "all 1s ease",
            borderRadius: `${this.state.radius}`,
          }}
        ></div>
        <p>color is {this.state.color}</p>
        <p>num {this.state.counter}</p>
      </div>
    );
  }
}
export default App83;
