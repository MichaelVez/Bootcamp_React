import React, { useState } from "react";

const App184 = () => {
  const data = ["one", "two", "three", "four", "five"];
  const [newData, setNewData] = useState(data);

  const [checked, setCheck] = useState(
    data.map((dat) => {
      return false;
    })
  );
  let MapData = (array) => {
    return array.map((dat, i) => {
      return (
        <div key={dat}>
          <input
            type='checkbox'
            id={dat}
            checked={checked[i]}
            name='name'
            onChange={() => {
              func(i);
            }}
          />
          <label htmlFor={dat}>{dat}</label>
        </div>
      );
    });
  };
  const func = (i) => {
    const update = checked.map((item, index) => {
      return index === i ? !item : item;
    });
    setCheck(update);
  };
  const handleDelete = () => {
    console.log(checked);
    let updateArr = newData.map((item, i) => {
      if (checked[i]) {
        return;
      }
      return item;
    });
    console.log(updateArr);
    let newArr = [];
    for (let i = 0; i < updateArr.length; i++) {
      if (updateArr[i] !== undefined) newArr.push(updateArr[i]);
    }
    setNewData(newArr);
  };
  const reset = () => {
    setNewData(data);
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={reset}>Reset</button>
      {MapData(newData)}
    </div>
  );
};
export default App184;
