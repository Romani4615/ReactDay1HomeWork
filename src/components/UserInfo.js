import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserInfo extends Component {
    render() {
        console.log(this.props.user)
        const user = this.props.user
        return (
            <div>
            <div className="col-sm-4 col-md-4 col-">
                <div className="card my-3">
                    
                  <h5 className="card-title text-center">{user.username}</h5>
                  <div className="d-flex flex-row justify-content-center">
                  <a href={`mailTo:${user.email}`} className="btn btn-primary mx-1 mt-5">Email</a>
                  <Link to={`/users/${user.id}`} className="btn btn-secondary mx-1 mt-5">Account Info</Link>
                  </div>
              </div>
            </div>
            </div>
        )
    }
}
