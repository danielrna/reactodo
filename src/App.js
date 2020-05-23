import React, { Component } from 'react';
import { Button } from './components/Button';
import { Todo } from './components/Todo';
import './App.css';

export default class App extends Component {
  state = {
    text: "",
    todos: []
  }

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return <Todo
        key={todo.id}
        todo={todo}
        checkboxAction={() => this.completeTodo(todo)}
        buttonAction={() => this.deleteTodo(todo)}
      />
    })
  }

  completeTodo = (todo) => {
    this.state.todos.filter(it => it == todo)[0].completed = !todo.completed
    this.setState({
      todos: this.state.todos
    })
  }

  addTodo = () => {
    this.state.todos.push({
      id: Date.now(),
      text: this.state.text,
      completed: false
    })
    this.setState({
      text: "",
      todos: this.state.todos
    })
  }

  deleteTodo = (item) => {
    let todos = this.state.todos.filter(it => it !== item)
    this.setState({ todos })
  }

  render() {
    return (
      <div className="App">
        <header>
          <span role="img" aria-label="">🧠</span>
          <h1>Reactodo</h1>
          <span role="img" aria-label="">🤖</span>
        </header>
        <div className="container">
          <div className="form-group">
            <input
              type="text"
              className="todo-input"
              onChange={(e) => this.setState({ text: e.target.value })}
              value={this.state.text}
            />
            <Button
              className="btn"
              action={() => this.addTodo()}
            >
              Ajouter une tâche
            </Button>
          </div>

          {this.renderTodos()}
        </div>
      </div>
    );
  }
}