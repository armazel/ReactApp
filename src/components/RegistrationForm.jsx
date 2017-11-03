import React, { Component } from 'react';
import '../style/RegistrationForm.scss'

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            testInput:''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.email){
            console.log('form submitted and email value is', this.state.email);
            console.log('submit', this.testInput.value);
        }else{
            console.log('form empty');
        }

    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <input
                    type="text"
                    ref={(input) => this.testInput = input}
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    className="emailField"
                />
                <button className="submitBtn">Save</button>
            </form>
        );
    }

}

export default RegistrationForm;
