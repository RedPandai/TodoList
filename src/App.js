import React, { Component } from "react";
import Header from "./components/header";

import Footer from "./components/footer";
import List from "./components/list";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { name: "Coding", id: "001", done: true },
      { name: "CSS", id: "002", done: false },
      { name: "JS", id: "003", done: false },
    ],
  };

  addTodos = (todoObj) => {
    let newtodos = [todoObj, ...this.state.todos];
    this.setState({ todos: newtodos });
  };

  updateTodos = (id, checkState) => {
    let newtodos = this.state.todos.map((todo) => {
      if (id === todo.id) return { ...todo, done: checkState };
      else return todo;
    });
    this.setState({ todos: newtodos });
  };

  deleteTodos = (id) => {
    const newtodos = this.state.todos.filter((todoObj) => {
      return id !== todoObj.id;
    });
    this.setState({ todos: newtodos });
  };

  checkAlltodo = (done) => {
    const newtodos = this.state.todos.map((todoObj) => {
      return { ...todoObj, done: done };
    });
    this.setState({ todos: newtodos });
  };

  deleteAllchecked = () => {
    const newtodos = this.state.todos.filter(
      (todoObj) => todoObj.done === false
    );
    this.setState({ todos: newtodos });
  };
  render() {
    return (
      <div>
        <div className="app-wrap">
          <h1>To Do List</h1>
          <Header addTodos={this.addTodos} />
          <List
            todos={this.state.todos}
            updateTodos={this.updateTodos}
            deleteTodos={this.deleteTodos}
          />
          <Footer
            todos={this.state.todos}
            checkAlltodo={this.checkAlltodo}
            deleteAllchecked={this.deleteAllchecked}
          />
        </div>
      </div>
    );
  }
}

export default App;
