import React, { Component } from 'react';

class SignForm extends Component {
    onClickSignIn(e) {
        console.log(e.target);
        e.target.style.background='red'
        
    }
    render() {
        let { userName, password, onValueChange } = this.props
        return <div style={{width:'600px', margin:'auto' ,display:'flex', justifyContent:'center'}}>
            <form>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">User Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder='User Name' value={userName} name='userName' onChange={onValueChange}/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder='Password' value={password} name='password' onChange={onValueChange}/>
                </div>
                </div>
                <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                </div>
                <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                    Check me out
                    </label>
                </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onClickSignIn}>Sign in</button>
            </form>
        </div>
    }
}

export default SignForm; // Don’t forget to use export default!