import React from "react";

class App73 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, color: "black" };
  }
  add = () => {
    if (this.state.count !== 10) {
      if (this.state.count >= 0) {
        this.setState({ color: "green" });
      }
      this.state.count++;
      this.setState({ count: this.state.count });
    }
    if (this.state.count === 0) {
      this.setState({ color: "black" });
    }
  };
  minus = () => {
    if (this.state.count !== -10) {
      if (this.state.count <= 0) {
        this.setState({ color: "red" });
      }
      this.state.count--;
      this.setState({ count: this.state.count });
    }
    if (this.state.count === 0) {
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
