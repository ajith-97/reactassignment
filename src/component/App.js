import React, { Component } from 'react';
import './App.css';
import Add from '../src/component/Add';
import Content from './mock/AppMock'
  class App extends Component {
   
  state = {
    todos: [],
    
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,                                   
      })
  }  
   render(){
      return(<div className="container">
        <h1>{this.props.heading}</h1>
        <h2 className="text-center">ToDoApp  </h2>
      <div>
    <Add addtodo={this.addtodo} /></div>
     </div>
    );
      }
  }

    App.defaultProps = Content
  export default App;