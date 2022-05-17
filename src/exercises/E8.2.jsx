import React from "react";
import "./E8.2.css";
class App82 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transfrom: "translateX(-305px)" };
  }
  componentDidMount() {
    setTimeout(this.transformFunc, 1000);
  }
  transformFunc = () => {
    this.setState({ transfrom: "" });
    console.log("here");
  };
  render = () => {
    return (
      <div className='cont'>
        <div
          style={{ transform: `${this.state.transfrom}` }}
          className='box box1'
        ></div>
        <div
          style={{ transform: `${this.state.transfrom}` }}
          className='box box2'
        ></div>
        <div
          style={{ transform: `${this.state.transfrom}` }}
          className='box box3'
        ></div>
      </div>
    );
  };
}
export default App82;
