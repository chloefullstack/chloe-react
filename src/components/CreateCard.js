import React, { Component } from 'react';
import axios from "axios";


import 'antd/dist/antd.css'; 
import Header from './Header/Header';
import Navbar from './Navbar';


class CreateCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            sex: '',
            age: '',
            description: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async () => {

        // event.preventDefault(); //取消事件的默认动作
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";//是承载 xsrf token 的值的 HTTP 头的名称 "X-CSRFTOKEN" = default
        axios.defaults.xsrfCookieName = "csrftoken";//是用作 xsrf token 的值的cookie的名称; "csrftoken" = default
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`,
        }; //POST传参序列化
        
        // axios({
        //     method: 'POST',
        //     url: 'http://localhost:8000/york/create/',
        //     data: {
        //         name: this.state.name, 
        //         sex: this.state.sex, 
        //         age: this.state.age, 
        //         description: this.state.description
        //     }
        // }).then(res => {
        //     // this.props.push('/');
        //     console.log(res.data)
        // });
        let result = await axios({
            method: 'POST',
            url: 'http://localhost:8000/york/create/',
            data: {
                name: this.state.name, 
                sex: this.state.sex, 
                age: this.state.age, 
                description: this.state.description
            }
        })
        console.log(result);
        
    }

    render() {
        let { name, sex, age, description } = this.state
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            <div style={{marginTop:'20px'}}>
                <div className="form-group">
                    <label>Puppy's Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Puppy's Name" name='name' value={name} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label >Puppy's sex</label>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name='sex' value={sex} onChange={this.onChange}> 
                        <option defaultValue>Sex</option>
                        <option value="F">Femail</option>
                        <option value="M">Male</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Puppy's age</label>
                    <input type="textarea" className="form-control" id="formGroupExampleInput2" placeholder="Puppy's age" name='age' value={age} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" id="validationTextarea" placeholder="Description" name='description' value={description} onChange={this.onChange}></textarea>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" >Choose file</label>
                </div>
                <div className="form-group">
                    <input type="submit" value='Save' name='_save' className="btn btn-primary" onClick={this.onSubmit}/>
                </div>
            </div>
        </div>
    }
}

export default CreateCard;