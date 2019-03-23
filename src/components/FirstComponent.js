import React, { Component } from 'react';

class FirstComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstComponentStateMessage: "this is from FirstComponent inner state"
        }
    }

    onClickFunc1 = (e) => {
        console.log(e.target);
        
    }

    render() {
        return <div>
            <h3 onClick={this.onClickFunc1}>this is first component</h3>
            <h5>{this.state.firstComponentStateMessage}</h5>
            <h5>{this.props.message}</h5>
            <h5>{this.props.stateMessage}</h5>
        </div>
    }
}

export default FirstComponent;