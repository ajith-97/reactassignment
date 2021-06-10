import React, { Component } from 'react';
import Content from '../../mock/AppMock';

class TodoInput extends Component {
    render() {
        return (
            
                <input value={this.props.content} type='text' placeholder={this.props.enter} onChange ={this.props.handleChange}> </input>
                
            
        );
    }
}
TodoInput.defaultProps = Content

export default TodoInput