import React, { Component } from 'react';
 import Content from '../../mock/AppMock';

 export class TodoButton extends Component {
    
    render() {
        return (
            <div>
                <button className="btn btn-primary"  onClick={this.props.onClick}>{this.props.name}</button>
            </div>
        );
    }
}
      TodoButton.defaultProps = Content
export default TodoButton; 