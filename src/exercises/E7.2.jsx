import React from "react";

class App72 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: "none" };
  }
  handleClick = () => {
    // console.log(this.state.display);
    console.log(this.state);
    if (this.state.display === "none")
      return this.setState({ display: "block" });
    return this.setState({ display: "none" });
  };
  render() {
    return (
      <div style={{ width: "300px", height: "300px", border: "1px solid" }}>
        <button onClick={this.handleClick}>Click</button>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "yellow",
            display: `${this.state.display}`,
          }}
        ></div>
      </div>
    );
  }
}
export default App72;
