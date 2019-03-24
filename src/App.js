import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import './App.css';
import SignIn from './components/SignIn'
import About from './components/About'
import HomePage from './components/HomePage'


class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={HomePage} exact></Route>
                    <Route path='/signin' component={SignIn}></Route>
                    <Route path='/about' component={About}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
