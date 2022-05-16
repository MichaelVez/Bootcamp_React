import React from "react";

class App71 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counterr: 0 };
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClick}>sClick</button>
        <div>{this.state.counterr}</div>
      </div>
    );
  }
  btnClick = () => {
    this.state.counterr++;
    return this.setState({ counterr: this.state.counterr });
  };
}
export default App71;
