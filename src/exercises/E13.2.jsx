import React, { Component } from "react";

export default class App132 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John",
          birthday: "1-1-1995",
          favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
          },
        },
        {
          name: "Mark",
          birthday: "10-5-1980",
          favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
          },
        },
        {
          name: "Mary",
          birthday: "1-10-1977",
          favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
          },
        },
        {
          name: "Thomas",
          birthday: "1-10-1990",
          favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
          },
        },
        {
          name: "Johnny",
          birthday: "1-10-1992",
          favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
          },
        },
      ],
    };
  }
  retData = () => {
    console.log(this.state.data);
    return this.state.data;
  };
  retNames = () => {
    console.log(
      this.state.data.map((data) => {
        return data.name;
      })
    );
  };
  retYear = () => {
    console.log(
      this.state.data.filter((person) => {
        return person.birthday.slice(-4) >= 1990;
      })
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.retData}>Return Data</button>
        <button onClick={this.retNames}>Return Names</button>
        <button onClick={this.retYear}>Return Before 1990</button>
      </div>
    );
  }
}
