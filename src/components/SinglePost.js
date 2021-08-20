import React, { Component } from 'react'
export default class SinglePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: {}  //single post, empty object
        }
    }
    componentDidMount(){
    const postId = this.props.match.params.id   //index to where the user id is
    fetch(`http://127.0.0.1:5000/api/posts/${postId}`) //getting the user ID hitting the api again with ID
    .then(res => res.json()) //res(running json method) = parameter that we attatch to the json is. we call that res with our users JSONIFY
    .then(data => {
            console.log(data)
            this.setState({
            post: data // indexing through flask object users=users
            })                      //promise based function, once promise 1 is done, passed in ad data, 2 .then is logged in as data      
        })
        .catch(err => console.log(err))
    }
    deletePost = () => {
        const post = this.state.post
        fetch(`http://127.0.0.1:5000/api/posts/${post.id}`,{
        method: 'Delete'
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log('error', err))
    }

    render() {
        const post = this.state.post
        console.log(this.props.match.params)
        return (
            <>
            <div className="card">
                    ‹‹‹‹‹‹Page for lonely Post!››››››
                    {/* AARON, ASK BRIAN HOW TO IMPORT USERNAME HERE */}
                    <div className="card-header">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Title: {post.title}</li>
                            <li className="list-group-item">Body: {post.body}</li>
                            <li className="list-group-item">ID: {post.id}</li>
                        </ul>
                    </div>
            
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Delete User
                </button>


            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">Delete {post.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        Are you sure you want to Delete {post.username}?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" onClick={this.deletePost}>Delete the Post</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        
            </>
        )
    }
}
