import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown'
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];



class App extends Component {
    render(){
        return (
            <div>
                <Dropdown/>
                <Header items={menu}/>
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;
