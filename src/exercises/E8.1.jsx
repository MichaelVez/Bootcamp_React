import React from "react";
class App81 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "green", massage: "" };
  }
  componentDidMount = () => {
    setTimeout(this.myFunc, 1000);
  };
  componentDidUpdate() {
    if (this.state.massage === "")
      this.setState({
        massage: `updated color is ${this.state.favoriteColor}`,
      });
  }

  myFunc = () => {
    this.setState({ favoriteColor: "yellow" });
  };
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id='hey'>{this.state.massage}</div>
      </div>
    );
  }
}
export default App81;
