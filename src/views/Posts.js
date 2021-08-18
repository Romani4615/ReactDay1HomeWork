import React, { Component } from 'react'
import CreatePosts from '../components/CreatePosts'
export default class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
componentDidMount(){
    fetch("http://127.0.0.1:5000/api/posts")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        this.setState({
            posts: data
        })
    })
}

    render() {
        return (
            <div>
            <div className="row">
                <form>
                            
                <div className="col-md-4">
                <label>This is the Posts page</label>
                    {this.state.posts.map((i) => <CreatePosts post={i}/>)}
                
               </div>
            </form>
               </div>
            </div>
        )
    }
}
