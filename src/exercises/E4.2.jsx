import React from "react";
export default function App42() {
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
      <CrateCard id='1' />
      <CrateCard id='2' />
      <CrateCard id='3' />
      <CrateCard id='4' />
      <CrateCard id='5' />
      <CrateCard id='6' />
    </div>
  );
}
function CrateCard(props) {
  //   styles = { display: "flex", justifyContent: "center" };
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
}
