import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import uuid from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id:uuid.v4(),
        title: "Pick up mail",
        completed: true
      },
      {
        id:uuid.v4(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  };

  // toggle Completed
  toggleComplete = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        console.log(todo);
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    console.log(title);
    const newTodo = {
      id:uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}
          >
            {" "}
          </Todos>
        </div>
      </div>
    );
  }
}

export default App;
