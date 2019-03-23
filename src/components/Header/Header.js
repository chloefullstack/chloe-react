import React, { Component } from 'react';
import './Header.scss'
class Header extends Component {

    render() {
        return <div className='header-wrapper'>
            this is the wrapper text
            <h1>This is a header.</h1>
        </div>
    }
}

export default Header; // Don’t forget to use export default!