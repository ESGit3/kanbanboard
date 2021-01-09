import React, { useState } from "react";
import "./App.css";
import Column from "./Column";

const people = [
  {
    name: "Winnie",
    tasks: ["hello", "world"],
  },
  {
    name: "Bob",
    tasks: ["goodbye", "world"],
  },
  {
    name: "Thomas",
    tasks: ["today", "tomorrow"],
  },
  {
    name: "George",
    tasks: ["yesterday", "lol"],
  },
];

function App() {
  const [kanban, setKanban] = useState(people);

  function addTodo(id, val) {
    const temp = [...kanban];
    temp[id].tasks.push(val);
    setKanban(temp);
  }

  function removeTodo(col, id) {
    const temp = [...kanban];
    temp[col].tasks.splice(id, 1);
    setKanban(temp);
  }

  return (
    <>
      {kanban.map((person, index) => {
        return (
            <Column data={person} index={index} add={addTodo} remove={removeTodo}/>
        );
      })}
    </>
  );
}

export default App;
