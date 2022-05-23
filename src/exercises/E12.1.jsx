import React, { Component } from "react";
import "./E12.1.css";
export default class App121 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "קליק^",
      cat: [],
      input: "",
      total: 0,
      active: 0,
      myData: [],
    };
  }
  func = async () => {
    this.setState({ total: 0, active: 0, input: "" });
    let fetchRequest = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await fetchRequest.json();
    this.setState({ joke: data.value });

    let fetchRequestCat = await fetch(
      "https://api.chucknorris.io/jokes/categories"
    );
    let dataCat = await fetchRequestCat.json();

    let categories = dataCat.map((item, index) => {
      return (
        <div key={item} className={item} onClick={this.catClick}>
          {item}
        </div>
      );
    });
    this.setState({ cat: categories });
  };

  catClick = async (e) => {
    let fetchReq = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${e.target.classList[0]}`
    );
    let data = await fetchReq.json();
    this.setState({ joke: data.value });
  };
  handleChange = async (e) => {
    this.setState({ input: e.target.value });
    if (e.target.value.length > 3) {
      let fetchReq = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${this.state.input}`
      );
      let data = await fetchReq.json();
      this.setState({ myData: data });
      this.setState({ total: data.total });
      if (data.result.length > 0)
        this.setState({ joke: data.result[this.state.active].value });
    }
  };
  prevClick = () => {
    if (this.state.active !== 0) {
      this.setState((prevState) => ({ active: prevState.active - 1 }));
      this.setState({
        joke: this.state.myData.result[this.state.active].value,
      });
    }
  };
  nextClick = () => {
    if (this.state.active !== this.state.total) {
      this.setState((prevState) => ({ active: prevState.active + 1 }));
      this.setState({
        joke: this.state.myData.result[this.state.active].value,
      });
    }
  };
  render() {
    return (
      <div className='cont'>
        <h1>My Chuck Norris jokes API :D</h1>
        <button onClick={this.func}>Click</button>
        <div>
          Heres a Chuck Norris joke for ya-{" "}
          <div className='joke'> {this.state.joke}</div>
        </div>
        <div className='category'>
          <div>Select by category</div>
          {this.state.cat}
        </div>
        <div className='search'>
          <input
            placeholder='search'
            type='text'
            onChange={this.handleChange}
            value={this.state.input}
          />
          <div>found : {this.state.total}</div>
          <div>viewing joke #{this.state.active}</div>
          <span onClick={this.prevClick}>prev </span>
          <span onClick={this.nextClick}>next</span>
        </div>
      </div>
    );
  }
}
