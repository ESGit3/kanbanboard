import React from "react";
import Task from "./Task";

const Column = (props) => {
    const data = props.content[1];

    function todoPrompt() {
        const task = prompt();

        if (task !== null || task !== "") {
            props.addTodo(data.id, task);
        }
    }

    return (
        <div>
            <h1>{data.name}</h1>
            {data.tasks.map(task => {
                return(
                   <Task task={task} id={data.id}/>
                );
            })}
            <button onClick={todoPrompt}>Add Task</button>
        </div>
    );
};

export default Column;