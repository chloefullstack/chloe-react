import React, { Component } from 'react';
import Header from './Header/Header'
import Navbar from './Navbar'

class About extends Component {
    
    render() {
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            About
        </div>
    }
}

export default About; // Don’t forget to use export default!