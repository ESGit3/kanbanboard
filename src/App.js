import React from "react";
import './App.css';
import Column from "./Column";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: {
        person1: {
          name: "Winnie",
          tasks: ["foo", "bar"],
          id: 1
        },
        person2: {
          name: "Bob",
          tasks: ["foo", "bar"],
          id: 2
        },
        person3: {
          name: "Thomas",
          tasks: ["foo", "bar"],
          id: 3
        },
        person4: {
          name: "George",
          tasks: ["foo", "bar"],
          id: 4
        }
      }
    }
  }

  addTodo(id, val) {
    const tempPerson = Object.entries(this.state.people).find(person => person[1].id === id);
    tempPerson[1].tasks.push(val);
    console.log(tempPerson[1].tasks);
    this.setState({});
  }

  render() {
    return (
        <div>
          {Object.entries(this.state.people).map((person) => {
            return (
                <Column content={person} addTodo={this.addTodo.bind(this)}/>
            );
          })}
          {
            console.log(Object.entries(this.state.people).find(person => person[1].id === 2))
          }
        </div>
    );
  }
}

export default App;
