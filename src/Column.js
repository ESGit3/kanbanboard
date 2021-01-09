import React from "react";
import "./Task.css";
const Column = (props) => {
  const data = props.data;

  function todoPrompt() {
    const task = window.prompt();

    if (task !== null || task !== "") {
      props.add(props.index, task);
    }
  }

  function moveTask(currColumn, nextColumn, currIndex, val) {
    props.add(nextColumn, val);
    props.remove(currColumn, currIndex);
  }

  return (
    <div>
      <h1>{data.name}</h1>
      {data.tasks.map((task, index) => {
        return (
          <div className={"container"}>
            {props.index === 0 ? (
              <button className={"prev"} style={{ visibility: "hidden" }}>
                prev
              </button>
            ) : (
              <button className={"prev"} onClick={() => {moveTask(props.index, props.index - 1, index, task )}}>prev</button>
            )}
            <h3 className={"label"}>{task}</h3>
            {props.index === 3 ? (
              <button className={"next"} style={{ visibility: "hidden" }}>
                next
              </button>
            ) : (
              <button className={"next"} onClick={() => {moveTask(props.index, props.index + 1, index, task )}}>next</button>
            )}
          </div>
        );
      })}
      <button onClick={todoPrompt}>Add Task</button>
    </div>
  );
};

export default Column;
