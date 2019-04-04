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
        
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/york/create',
            data: {
                name: this.state.name, 
                sex: this.state.sex, 
                age: this.state.age, 
                description: this.state.description
            }
        }).then(res => {
            console.log(res.data)
        });
    }

    render() {
        let { name, sex, age, description } = this.state
        return <div>
            <Navbar></Navbar>
            <Header></Header>
            <div style={{marginTop:'20px'}}>
                <div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Puppy's Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Puppy's Name" name='name' value={name} onChange={this.onChange}/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Puppy's sex</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name='sex' value={sex} onChange={this.onChange}> 
                            <option selected>Sex</option>
                            <option value="F">Femail</option>
                            <option value="M">Male</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Puppy's age</label>
                        <input type="textarea" class="form-control" id="formGroupExampleInput2" placeholder="Puppy's age" name='age' value={age} onChange={this.onChange}/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Description</label>
                        <textarea class="form-control" id="validationTextarea" placeholder="Description" name='description' value={description} onChange={this.onChange}></textarea>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile" />
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                    <div class="form-group">
                        <input type="submit" value='Save' name='_save' class="btn btn-primary" onClick={this.onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CreateCard;