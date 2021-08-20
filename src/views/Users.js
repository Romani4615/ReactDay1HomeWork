import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserInfo from '../components/UserInfo'
export default class Users extends Component {
    constructor(props){
    super(props)
    this.state = {
        users: []
    }
}
componentDidMount(){
    fetch("http://127.0.0.1:5000/api/users") //takes response as res <<<<<GRABS ALL USERS
    .then(res => res.json()) //res(running json method) = parameter that we attatch to the json is. we call that res with our users JSONIFY
    .then(data => {
        console.log(data)
        this.setState({
        users: data.users  // indexing through flask object users=users
        })                      //promise based function, once promise 1 is done, passed in ad data, 2 .then is logged in as data      
    })
}
    render() {
        return (
            <div>
                <Link to='/create-user' className="btn btn-danger">Create User</Link>
                <div className="row">
                {this.state.users.map((u, i) => <UserInfo user={u} key={i} />)}  {/*mapping over same list of users, u through UserInfo, when rendered it will show x number of users}*/}
                {/* for each u in users returns user={u} */}
                </div>
            </div>
        )
    }
}
