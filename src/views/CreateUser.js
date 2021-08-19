import React, { Component } from 'react'

export default class CreateUser extends Component {
handleSubmit = (e) => {  // passes and an argument of the event
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
        myHeaders.append("Accept", "*/*")
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
        .then(data => console.log(data))
        .catch(err => console.error(err))

}
    render() {
        return (
            <div>
                Welcome new User, Create your account here!
                <form>
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
                            <input type='password' className='form-control' name="confirmpassword" placeholder='Confirm Password' />
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}