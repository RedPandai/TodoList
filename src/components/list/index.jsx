import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import Item from '../item';
class List extends Component { 
    static ProtoTypes = {
        addTodos:ProtoTypes.func.isRequired,
        todos:ProtoTypes.array.isRequired
    }


    render() { 
        const {todos} = this.props;
        return (        
            <div className="todo-container">
                <ul className="todo-main">
                    {
                    todos.map(todo => {return <Item key={todo.id} {...todo} updateTodos={this.props.updateTodos} deleteTodos={this.props.deleteTodos}/>
                    })}
                </ul>
            </div>
        );
    }
}
 
export default List;