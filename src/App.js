import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignForm from './components/SignForm'
import Header from './components/Header/Header'

import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }
    
    onValueChange = (e) => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
            // userName: e.target.value
        })
    }
    
    render() {
        let { userName, password } = this.state
        return (
            <div className="App">
                <Header></Header>
                <SignForm
                    userName={userName} password={password}
                    onValueChange={this.onValueChange}
                ></SignForm>
            </div>
        );
    }
}

export default App;
