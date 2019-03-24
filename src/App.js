import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import SignIn from './components/SignIn'
import About from './components/About'
import HomePage from './components/HomePage'
import Error from './components/Error'

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={HomePage} exact></Route>
                    <Route path='/signin' component={SignIn}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
