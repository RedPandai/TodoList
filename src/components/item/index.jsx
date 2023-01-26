import React, { Component } from 'react';

class Item extends Component {
    state={mouse:false}
    handleMouse = (flag)=>{
        return()=>{
            this.setState({mouse:flag});
        }
    }
    handleCheck=(id)=>{
        return(e)=>{
            const checkState = e.target.checked;
            this.props.updateTodos(id,checkState);}
    }
    //上面那种回调可以下面这种先写在onClick里面也可
    handleDelete=(id)=>{
        this.props.deleteTodos(id);
    }
    render() { 
        const {id,name,done} = this.props;
        return (            
        <li className="todo-item" onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label className="todo-item-label">
            <input className="checkbox" type="checkbox" onChange={this.handleCheck(id)} checked={done}/>
            <span>{name}</span>
            </label>
            <button className="btn-delete" onClick={()=>this.handleDelete(id)} style={{ display: this.state.mouse ? 'block':'none' }}>
            delete
            </button>
        </li>
        );
    }
}
 
export default Item;