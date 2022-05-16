import React from "react";
export function App41() {
  return (
    <div>
      <ButtonCrt name='import' fontW='bold' />
      <ButtonCrt name='not import' />
    </div>
  );
}
function ButtonCrt(props) {
  return <button style={{ fontWeight: `${props.fontW}` }}>{props.name}</button>;
}

export default App41;
