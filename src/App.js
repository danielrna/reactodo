import React, { Component } from 'react';
import { Todo } from './components/Todo';
import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Button, Divider, Typography } from 'antd'
const { Text } = Typography;
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
    this.state.todos.filter(it => it === todo)[0].completed = !todo.completed
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
          <h1>CSS3 To-Do List</h1>
        </header>
        <Row>
          <Col span={6} />
          <Col span={5} offset={1} >
            <input
              type="text"
              className="todo-input"
              onChange={(e) => this.setState({ text: e.target.value })}
              value={this.state.text}
            />
          </Col>
          
          <Col>

            <Button
              className="btn"
              disabled={this.state.text == ""}
              onClick={() => this.addTodo()}
            >
              Ajouter une tâche
            </Button>
          </Col>
        </Row>

        <br></br>
        <Divider />
        <Row>
          <Col span={8}>
          </Col>
          <Col span={8}>
            {this.renderTodos()}
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div>
    );
  }
}