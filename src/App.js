import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown'
import Header from './components/Header'

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
            </div>
        );
    }
}

export default App;
