import React, { useState } from "react";

const App182 = () => {
  const [data, setData] = useState([
    { name: "CSS", complete: true },
    { name: "JavaScript", complete: true },
    { name: "Learn React", complete: false },
    { name: "Learn mongoDB", complete: false },
    { name: "Learn Node JS", complete: false },
  ]);

  const handleClick = (index) => {
    const newTodo = data.map((todo, i) => {
      console.log(todo);
      if (i === index) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setData(newTodo);
  };

  let makeList = () => {
    return data.map((task, index) => {
      return (
        <div key={task.name}>
          task: {task.name}
          <button onClick={() => handleClick(index)}>
            {task.complete ? "V" : "X"}
          </button>
        </div>
      );
    });
  };
  return <div>{makeList()}</div>;
};
export default App182;
