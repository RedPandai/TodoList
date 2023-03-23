import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import ProtoTypes from 'prop-types';
class Header extends Component {
    static ProtoTypes = {
        addTodos:ProtoTypes.func.isRequired
    }
    
    handleKeyUp = (e)=>{
        if(e.target.value.trim()==='') {
            alert('Input cannot be Blank')
        }
        if(e.keyCode !==13) return;
        const todoObj = {name:e.target.value, id:nanoid(), done:false};
        this.props.addTodos(todoObj);
        //在这里传入参数给parent
        e.target.value='';
    }
    render() { 
        return (        
        <header className="header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="Input todos here and press enter" />
        </header>);
    }
}
 
export default Header;