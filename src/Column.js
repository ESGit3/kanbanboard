import React from "react";
import Task from "./Task";

const Column = (props) => {
    const data = props.data;

    function todoPrompt() {
        const task = window.prompt();

        if (task !== null || task !== "") {
            props.add(props.index, task);
        }
    }

    return (
        <div>
            <h1>{data.name}</h1>
            {data.tasks.map((task, index) => {
                return(
                   <Task task={task} key={index} column={props.index} />
                );
            })}
            <button onClick={todoPrompt}>Add Task</button>
        </div>
    );
};

export default Column;