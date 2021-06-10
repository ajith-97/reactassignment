import React, { Component } from 'react'
import ListItems from './ListItems';
import './App.css';
import Content from '../mock/AppMock';
import TodoInput from "../component/common/TodoInput";
import TodoButton from "../component/common/TodoButton";
import "bootstrap/dist/css/bootstrap.min.css";


class Add extends Component {
  
   state = {
        content: '',
        data: [],
        count:0
      }
      handleChange = (e) => {
      this.setState
          ({
          content: e.target.value
        })
      }
      handleSubmit = (e) => {
      e.preventDefault();
      this.props.addtodo(this.state);
      const obj ={
        "name": this.state.content,
        "key": this.state.count
      };
      
      data.push(obj);
        
this.setState({
          data, count: this.state.count+1, content:""
        })
      }
    render() {
        return (
            <div className="addtodo">
            <form onSubmit={this.handleSubmit}>
              
              <TodoInput handleChange ={this.handleChange} type="text" placeholder={this.props.enter} content={this.state.content} />
              <TodoButton className="btn btn-primary"  
             type="submit" name={this.props.add_button}></TodoButton>

           </form>
            <div>
            <ListItems data={this.state.data}/>
              </div>
          </div>
          
        )
    }
}
  Add.defaultProps = Content
export default Add;