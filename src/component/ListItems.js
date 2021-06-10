import { data, map } from 'jquery';
import React, { Component } from 'react';
import Modal from './Modal.js';
import Content from '../mock/AppMock';
import TodoButton from '../component/common';

class ListItems extends Component {
  
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
     
      data: props.data,
      requiredItem: 0,
      msg: []
    }
  }
  replaceModalItem(item) {
    this.setState({
      requiredItem: item, key: item.key
    });
  }
saveModalDetails(item) {
    const newdata = [];
    
    map(this.state.data, (obj) => {
      if(this.state.key == obj.key)
      {
        newdata.push(item);
      } 
      else{
        newdata.push(obj);
      }
    });
this.setState({ data: newdata });
  }
deleteItem(item) 
    {
      const newdata = [];
      const data=this.state.data;
      map(this.state.data, (obj) => {
      if(item.key != obj.key)
        {
         newdata.push(obj);
        } 
        });
    this.setState({ data: newdata });
       }
render() 
  {  
    console.log(this.props);  
    console.log('state' , this.state);  
    const msg = this.state.data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
           <td>
           <div data-toggle="modal" data-target="#exampleModal">
             <TodoButton className="btn btn-primary" name={this.props.edit_button} onClick={() => this.editItem(item)}/>
           </div>
           <TodoButton className="btn btn-danger" name={this.props.delete_button} onClick={() => this.deleteItem(item)}/>
         </td>
        </tr>
      )
    });
     return (
      <div>
        <div style={{ textAlign: "center" }}>
          <br/><br/>
        </div>
        <table className="table table-striped">
        <tbody>
        {msg}
        </tbody>
        </table>
        <Modal
          title={this.state.requiredItem.name}
         key={this.state.requiredItem.key}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}
 ListItems.defaultProps = Content
export default ListItems;