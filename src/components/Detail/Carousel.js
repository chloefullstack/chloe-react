import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import one from './image/one.jpg';
import two from './image/two.jpg';
import york from './image/york.jpg';
import './detail.scss'


class Carousel extends Component {
    
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide carousel-bg" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src={one} className="d-block" alt="one"/>
                    </div>
                    <div className="carousel-item">
                        <img src={two} className="d-block" alt="two"/>
                    </div>
                    <div className="carousel-item">
                        <img src={york} className="d-block" alt="york"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
        
    }
}

export default Carousel;