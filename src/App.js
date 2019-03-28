import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import 'antd/dist/antd.css'; 

import './App.css';
import SignIn from './components/SignIn'
import About from './components/About'
import Detail from './components/Detail/Detail'
import HomePage from './components/HomePage'
import Error from './components/Error'
import LoginForm from './components/LoginForm'
import ShowListView from './containers/ShowListView'
import PuppyDetail from './components/PuppyDetail'


class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={HomePage} exact></Route>
                    <Route path='/signin' component={SignIn}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/detail' component={Detail}></Route>
                    <Route path='/login' component={LoginForm}></Route>
                    <Route path='/show' component={ShowListView}></Route>
                    <Route path='/puppydetail' component={PuppyDetail}></Route>

                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
            
        )
    }
}

export default App;
