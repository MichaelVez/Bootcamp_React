import React, { Component } from "react";
import MyCard from "./E13.1Card";

export default class E131 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      cards: [],
      input: "",
      myAvatarArr: [],
    };
  }
  fetchData = async () => {
    let req = await fetch("https://randomuser.me/api/?results=10");
    let data = await req.json();
    this.setState({ data: data.results });
    let myArr = this.state.data.map((dataa, i) => {
      return {
        nameFull: dataa.name.first + " " + dataa.name.last,
        img: dataa.picture.large,
      };
    });
    console.log(myArr);
    this.setState({ myAvatarArr: myArr });
    this.setState({
      cards: myArr.map((dataa, i) => {
        return (
          <div key={dataa.nameFull}>
            {dataa.nameFull}
            <img src={dataa.img} alt='' />
          </div>
        );
      }),
    });
  };
  handleChange = (e) => {
    this.setState({ input: e.target.value });
    // console.log(this.state.input);
    // this.updateAvatar();
    console.log(this.state.input);
    let filterArray = () => {
      return this.state.myAvatarArr.filter((avatar) => {
        return avatar.nameFull
          .toLowerCase()
          .includes(this.state.input.toLowerCase());
      });
    };
    console.log(filterArray());
    let res = (
      <div>
        {filterArray().map((filter) => {
          return <div>{filter}</div>;
        })}
      </div>
    );
    console.log(res);

    this.setState({ cards: res });
  };
  componentDidMount = () => {
    this.fetchData();
  };
  render() {
    return (
      <>
        <input
          onChange={this.handleChange}
          value={this.state.input}
          type='text'
        />
        <MyCard
          userInput={this.state.input}
          myAvatarArr={this.state.myAvatarArr}
        />
      </>
    );
  }
}
