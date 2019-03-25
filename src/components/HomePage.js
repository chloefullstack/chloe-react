import React, { Component } from 'react';
import Header from './Header/Header'
import Navbar from './Navbar'
import one from '../image/one.jpg';


class HomePage extends Component {
    
    render() {

        return (
            <div >
                <Navbar></Navbar>
                <Header></Header>
                <img
                    height={300} 
                    src={one}/>
            </div>
        );
    }
}

export default HomePage;