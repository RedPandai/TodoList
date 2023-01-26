import React, { Component } from 'react';

class Footer extends Component {
    handleCheckAll = (e)=>{
        this.props.checkAlltodo(e.target.checked);
    }
    handleClickAll = ()=>{
        this.props.deleteAllchecked();
    }
    render() { 
        const {todos} = this.props;
        const doneCount = todos.reduce((pre,todo)=>{
            return pre + (todo.done ? 1 : 0);
        },0)
        return (        
        <footer className="todo-footer">
            <label className="todo-footer-label">
            <input className="checkbox" type="checkbox" onChange={this.handleCheckAll} checked={doneCount===todos.length && todos.length!==0 ? true:false}/>
            <span>Has Completed {doneCount} / {todos.length} </span>
            </label>
            <button onClick={this.handleClickAll} className="btn-footer">Delete Completed</button>
        </footer>);
    }
}
 
export default Footer;