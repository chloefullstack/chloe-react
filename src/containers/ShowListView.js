import React, { Component } from 'react';
import axios from "axios";
import Show from '../components/Show'

class ShowListView extends Component {
    state = {
        puppyinfo: []
    };

    fetchArticles = () => {
        axios.get("http://127.0.0.1:8000/api").then(res => {
        this.setState({
            puppyinfo: res.data
        });
        console.log(res.data)
        });
    }

    componentDidMount() {
        this.fetchArticles();
    } // when the component is rendered, then it must get the data and then update the state



    render() {
        return (
        <div>
            <Show data={this.state.puppyinfo}></Show>
        </div>
        );
    }
    }

export default ShowListView;