import React, { Component } from 'react';
import Header from './Header/Header'
import Navbar from './Navbar'
import Carousel from './Carousel'


class Detail extends Component {
    
    render() {
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            <Carousel></Carousel>
            <h5>Temperament:</h5>
            <p style={{color:'blue'}}>Affectionate, Sprightly, Tomboyish</p>
            <ul><strong>Details:</strong>
                <li><strong>AKC Breed Popularity:</strong> Ranks 9 of 193</li>
                <li><strong>Height:</strong> 7-8 inches</li>
                <li><strong>Weight:</strong> 7 pounds</li>
                <li><strong>Life Expectancy:</strong> 11-15 years</li>
                <li><strong>Group:</strong> Toy Group</li>
            </ul>
            <small>
                    Reference <br></br>
                    Yorkshire Terrier From AMERICAN KENNEL CLUB Retrieved from <a href='https://www.akc.org/dog-breeds/yorkshire-terrier/'>https://www.akc.org/dog-breeds/yorkshire-terrier/</a>
                </small>
        </div>
    }
}

export default Detail;