import React, { Component } from 'react';
import SignForm from './SignForm'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
    }

    onValueChange = (e) => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
            // userName: e.target.value
        })
    }

    render() {
        let { userName, password } = this.state
        return <div>
            <SignForm
                userName={userName} password={password}
                onValueChange={this.onValueChange}>
            </SignForm>
        </div>
    }
}

export default SignIn; // Don’t forget to use export default!