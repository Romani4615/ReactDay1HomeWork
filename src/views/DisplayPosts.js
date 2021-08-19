import React, { Component } from 'react'
import moment from 'moment'
export default class DisplayPosts extends Component {
    render() {
        console.log(this.props.post)
        const p = this.props.post
        return (
            <div className="row">
                <li className="list-group-item">
                        <h5>{p.title}</h5>
                    <div className="card">
                        <p>{p.user.username}</p> 
                        <p>{moment(p.date_created).fromNow()}</p>
                    </div>
                        <div className="hidden">{p.user_id}</div>
                </li>
            </div>
        )
    }
}
