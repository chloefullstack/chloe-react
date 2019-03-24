import React, { Component } from 'react';

import Header from './Header/Header'
import Navbar from './Navbar'



class HomePage extends Component {
    
    render() {

        return (
            <div >
                <Navbar></Navbar>
                <Header></Header>
            </div>
        );
    }
}

export default HomePage;