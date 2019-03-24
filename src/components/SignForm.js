import React, { Component } from 'react';

class SignForm extends Component {
    onClickSignIn(e) {
        console.log(e.target);
        e.target.style.background='red'
        
    }
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
            <small><a href='#'>Forget password</a></small>
            <div>
                <button onClick={this.onClickSignIn}>Sign In</button>
            </div>
        </div>
    }
}

export default SignForm; // Don’t forget to use export default!