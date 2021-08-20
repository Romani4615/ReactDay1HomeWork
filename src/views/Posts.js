import React, { Component } from 'react'
import DisplayPosts from './DisplayPosts'
import moment from 'moment';

import { Link } from 'react-router-dom';
export default class Posts extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            posts: []
        }
    }
componentDidMount(){
fetch("http://localhost:5000/api/posts")
    .then(res => res.json()) //run json on promise
    .then(data => {
        console.log(data)
        this.setState({
        posts: data.posts //data is just a list here(check flask) no more indexing
        })
    })
    .catch(err => console.error(err))
}

render() {
    let posts = this.props.posts
    if (posts){
        posts.sort((a,b) =>  moment(a.date_created) < moment(b.date_created) ? 1: -1)
    }
    //LINK === SET A LINK TO ANOTHER PAGE
        return (
            <>
            <Link to="/create-post" className="btn btn-secondary mb-2">Create a Post</Link>  
            <div>
                <ul className="row">
                    {this.state.posts.map((i, p) => <DisplayPosts post={i} key={p}/>)}
               </ul>
            </div>

            </>
        )
    }
}
