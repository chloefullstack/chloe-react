import React, { Component } from 'react';
import axios from "axios";

import 'antd/dist/antd.css'; 
import Header from './Header/Header';
import Navbar from './Navbar';


class PuppyDetail extends Component {
    state = {
        puppyinfo: {}
    };

    fetchPuppy = (id) => {
        axios.get('http://127.0.0.1:8000/'+id).then(res => {
        this.setState({
            puppyinfo: res.data
        });
        console.log(res.data)
        });
    }

    componentDidMount() {
        this.fetchPuppy();
    }
    render() {
        let  item  = this.state.puppyinfo
        return (
            <div>
            <Navbar></Navbar>
            <Header></Header>
            {item.name}
            </div>
            
        )
    }
}

export default PuppyDetail;