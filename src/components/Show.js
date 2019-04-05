import React, { Component } from 'react';

import Header from './Header/Header';
import Navbar from './Navbar';
import '../App.css';

class Show extends Component {


    render() {
        let { data } = this.props
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            <a href='/show/createcard'>
                <button type="button" className="btn btn-primary" style={{margin:'20px'}} >Create Puppy Info Card</button>
            </a>
            <div className='card-section'>
                {data.map((item, index) => (
                    <div className="cards"  >
                        <img src={item.profile_image} style={{height:'300px',width:'auto', maxWidth:'287px',margin:'auto'}} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Puppy Name: {item.name}</h5>
                            <p>Sex: {item.sex}</p>
                            <p>Age: {item.age} </p>
                            <p className="card-text">Detail: {item.description}</p>
                            <a href="/puppydetail" className="btn btn-primary">More Information</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    }
}

export default Show;