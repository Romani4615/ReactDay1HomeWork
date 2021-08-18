import React, { Component } from 'react'

export default class CreatePosts extends Component {
    render() {
        console.log(this.props.post)
        const p = this.props.post
        return (
            <div>
                <div className="card">
                    <form>

                    </form>
                        <label>Caption</label>
                    <input><h5>{p.title}</h5></input>
                        <label>What's on your noggin?</label>
                    <input><p>{p.body}</p></input>
                    <button className="btn btn-primary">Post dat ishh</button>
                    <div className="hidden">{p.user_id}</div>
                </div>
            </div>
        )
    }
}
