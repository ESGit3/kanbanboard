import React from "react";
import "./Task.css";

const Task = (props) => {
    return (
        <div className={"container"}>
            {(props.id === 1) ? (
                <button className={"prev"} style={{visibility: "hidden"}}>prev</button>
            ) : (
                <button className={"prev"}>prev</button>
            )}
            <h3 className={"label"}>{props.task}</h3>
            {(props.id === 4) ? (
                <button className={"next"} style={{visibility: "hidden"}}>next</button>
            ) : (
                <button className={"next"}>next</button>
            )}
        </div>
    );
};

export default Task;

