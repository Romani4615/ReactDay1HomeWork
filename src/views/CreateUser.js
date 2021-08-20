import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {  
            Redirect: null  //undefined -- test case put 1 to see if it redirects, 1 is true
        }
    }
handleSubmit = (e) => {  // passes and an argument of the event //GRABBING DATA FROM FORM E = FORM
    e.preventDefault();
    console.log(e)
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    
    console.log(username, email, password, confirmPassword);
    if (password !== confirmPassword){
        console.log("passwords dont match")
        return
    }   //new ==== new object
    let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
    const requestBody = JSON.stringify({    //build request body
        "username": username,
        "email": email,
        "password": password
    })

    fetch("http://localhost:5000/api/create-user", {
        method: 'POST',
        headers: myHeaders,
        body: requestBody
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                redirect: `/users/${data.id}` //data has property of id
            })
        })
        .catch(err => console.error(err))
}
    render() {

        return (
            this.state.redirect ?
             <Redirect to={this.state.redirect}  /> :
        
            <div>
                Welcome new User, Create your account here!
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' name="username" placeholder='Username' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='form-control' name="email" placeholder='Email' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name="password" placeholder='Password' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input type='password' className='form-control' name="confirmPassword" placeholder='Confirm Password' />
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

// 