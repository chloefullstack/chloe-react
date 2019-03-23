import React, { Component } from 'react';

class SignForm extends Component {

    render() {
        let { userName, password, onValueChange } = this.props
        return <div>
            <div>
                User Name:
                <input placeholder='User Name' value={userName} name='userName' onChange={onValueChange}/>
            </div>
            <div>
                Password:
                <input placeholder='Password' value={password} name='password' onChange={onValueChange}/>
            </div>
            <div>
                Sign In
            </div>
        </div>
    }
}

export default SignForm; // Don’t forget to use export default!