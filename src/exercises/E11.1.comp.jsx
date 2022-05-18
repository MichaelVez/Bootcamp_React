import React from "react";
const color = ["blue", "red", "yellow"];
// let color = [];
export default function MyButtons(props) {
  return color.map((item, index) => {
    return (
      <button
        key={index}
        // onClick={this.handleClick}
        onClick={() => {
          props.handleClick({ item });
        }}
        style={{ backgroundColor: `${item}` }}
      >
        {item}
      </button>
    );
  });
}

//  {
//    items.map((item, index) => {
//      return <li key={index}>{item}</li>;
//    });
//  }
