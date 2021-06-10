import React, { Component } from 'react';
import Content from '../mock/AppMock';
import TodoButton from '../component/common/TodoButton';



class Modal extends Component {
    
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            title: props.title,
           key: props.key,
        }
    }
 UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
           });
    }
titleHandler(e) {
        this.setState({ title: e.target.value });
    }
handleSave() {
        console.log(this.state);
        const item = {
            "key": this.state.key,
            "name": this.state.title
        };
        console.log('newitem' , item);
        this.props.saveModalDetails(item)
    }
    render() {
 console.log('Modal', this.props,this.state);
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            
                         </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            </div>
                        <div className="modal-footer">
                            <TodoButton type="button" className="btn btn-secondary" data-dismiss="modal">{this.props.popup_close}</TodoButton>
                            <TodoButton type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>{this.props.popup_save}</TodoButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Modal.defaultProps = Content
export default Modal;
