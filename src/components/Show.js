import React, { Component } from 'react';

import Header from './Header/Header';
import Navbar from './Navbar';
import ShowListView from '../containers/ShowListView';
import Item from 'antd/lib/list/Item';

class Show extends Component {


    render() {
        let { data } = this.props
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                {data.map(item => (
                    <div className="card" style={{width: '18rem'}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Puppy Name: {item.name}</h5>
                            <p>Sex: {item.sex}</p>
                            <p>Age: {item.age} </p>
                            <p className="card-text">Detail: {item.description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    }
}

export default Show;