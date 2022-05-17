import React from "react";

class App73 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, color: "black" };
  }
  add = () => {
    let count = this.state.count;
    if (count !== 10) {
      count = this.state.count + 1;
      this.setState({ count: count });
      if (count > 0) {
        this.setState({ color: "green" });
      }
    }

    if (count === 0) {
      this.setState({ color: "black" });
    }
  };
  minus = () => {
    let count = this.state.count;
    if (count !== -10) {
      count = this.state.count - 1;
      if (count < 0) {
        this.setState({ color: "red" });
      }
      this.setState({ count: count });
    }
    if (count === 0) {
      this.setState({ color: "black" });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.minus}>Decrease</button>
        <div style={{ color: `${this.state.color}`, fontSize: "60px" }}>
          {this.state.count}
        </div>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}
export default App73;
