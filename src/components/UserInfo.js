import React, { Component } from 'react'

export default class UserInfo extends Component {
    render() {
        console.log(this.props.user)
        const user = this.props.user
        return (
            <div>
            <div className="col-sm-4 col-md-4 col-">
                <div className="card my-3">
                    
                  <h5 className="card-title text-center">{user.username}</h5>
                  <a href={`mailTo:${user.email}`} className="btn btn-primary mx-5 mb-5">Email</a>
              </div>
            </div>
            </div>
        )
    }
}
