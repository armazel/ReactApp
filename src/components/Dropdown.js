import React, { Component } from 'react';

class DropDown extends Component{

    constructor(props){
        super(props);
        this.state = {isOpened:false}
    }

    toggleState(){
        this.setState({isOpened: !this.state.isOpened}) //setState - типо мутации стейта, изменение свойства стейта
    }

    render(){
        let dropdownText;
        if(this.state.isOpened){
          dropdownText = <div>Here is what is shown in dropdown</div>;
        }
        return <div onClick={this.toggleState.bind(this)}>It's dropdown{dropdownText}</div>
    }
}

export default DropDown;