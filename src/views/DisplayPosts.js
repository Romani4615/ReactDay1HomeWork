import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
export default class DisplayPosts extends Component {
    render() {
        console.log(this.props.post)
        const post = this.props.post
        return (
            <div className="row">
                <li className="list-group-item">
                        <h5>{post.title}</h5>
                    <div className="card">
                        <p>{post.user.username}</p> 
                        <p>{moment(post.date_created).fromNow()}</p>
                        <Link to={`/posts/${post.id}`} className="btn btn-secondary mx-1 mt-5">Post Info</Link>
                  
                    </div>
                        <div className="hidden">{post.user.user_id}</div>
                        
                </li>
            </div>
        )
    }
}
