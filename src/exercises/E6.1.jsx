import React from "react";
export default class App61 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  crateCard = (props) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid",
          width: "300px",
        }}
      >
        <img src={`https://picsum.photos/300?random=${props.id}`} alt='' />
        <h3>Random title</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          exercitationem!
        </p>
      </div>
    );
  };
  render = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          border: "1px solid",
          flexWrap: "wrap",
        }}
      >
        <this.crateCard id='1' />
        <this.crateCard id='2' />
        <this.crateCard id='3' />
        <this.crateCard id='4' />
        <this.crateCard id='5' />
        <this.crateCard id='6' />
      </div>
    );
  };
}

// export default function App42() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "row",
//         border: "1px solid",
//         flexWrap: "wrap",
//       }}
//     >
//       <CrateCard id='1' />
//       <CrateCard id='2' />
//       <CrateCard id='3' />
//       <CrateCard id='4' />
//       <CrateCard id='5' />
//       <CrateCard id='6' />
//     </div>
//   );
// }
// function CrateCard(props) {
//   //   styles = { display: "flex", justifyContent: "center" };
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         border: "1px solid",
//         width: "300px",
//       }}
//     >
//       <img src={`https://picsum.photos/300?random=${props.id}`} alt='' />
//       <h3>Random title</h3>
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
//         exercitationem!
//       </p>
//     </div>
//   );
// }
