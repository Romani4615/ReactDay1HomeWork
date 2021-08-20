import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class SingleUser extends Component {
    constructor(props){
    super(props)
    this.state = {
        user: {},
        redirect: ''   //single user, empty object
        }
    }
    componentDidMount(){
    const userId = this.props.match.params.id   //index to where the user id is
    fetch(`http://127.0.0.1:5000/api/users/${userId}`) //getting the user ID hitting the api again with ID
    .then(res => res.json()) //res(running json method) = parameter that we attatch to the json is. we call that res with our users JSONIFY
    .then(data => {
            console.log(data)
            this.setState({
            user: data // indexing through flask object users=users
            })                      //promise based function, once promise 1 is done, passed in ad data, 2 .then is logged in as data      
        })
    }
    deleteUser = () => {
        const user = this.state.user
        fetch(`http://localhost:5000/api/users/delete/${user.id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        this.state({redirect: '/users'})
    }

    render() {
        const user = this.state.user  //WE DISPLAY THE USER!
        console.log(this.props.match.params.id) // RENDER METHOD!! allows us to find the ID for each user with the params.id
        return (
            this.state.redirect ?
             <Redirect to={this.state.redirect}  /> :
            <>
            <div className="card">
                <div className="card-header">
                    {user.username}
                </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username: {user.username}</li>
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">ID: {user.id}</li>
                    </ul>
                    
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Delete User
                </button>


            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">Delete {user.username}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        Are you sure you want to Delete {user.username}?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" onClick={this.deleteUser} data-bs-dismiss="modal">bye boii</button>
                </div>
                </div>
            </div>
            </div>
            </div>
            </>
        )
    }
}
