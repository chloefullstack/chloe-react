import React, { Component } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar';
import one from './Detail/image/one.jpg';


class HomePage extends Component {
    
    render() {

        return (
            <div >
                <Navbar></Navbar>
                <Header></Header>
                <img height={300} src={one}/>
                <p>
                The Yorkshire Terrier is a small dog breed of terrier type, developed during the 19th century in Yorkshire, England.[3] Ideally its maximum size is 7 pounds (3.2 kg).[4] A popular companion dog, the Yorkshire Terrier has also been part of the development of other breeds, such as the Australian Silky Terrier. It has a grey, black and tan coat, and the breed's nickname is Yorkie.
                </p>
                <small>
                    Reference <br></br>
                    Yorkshire Terrier From Wikipedia, the free encyclopedia. Retrieved from <a href='https://en.wikipedia.org/wiki/Yorkshire_Terrier'>https://en.wikipedia.org/wiki/Yorkshire_Terrier</a>
                </small>
            </div>
        );
    }
}

export default HomePage;