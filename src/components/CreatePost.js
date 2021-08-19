import React, { Component } from 'react'


export default class CreatePost extends Component {
// constructor(props) {
//     super(props);
// }
// handleSubmit(e) {
//     e.preventDefault();
//     console.log(e)
//     const title = e.target.title.value;
//     const body = e.target.body.value;
//     console.log(title, body)



postSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    const title = e.target.title.value;
    const body = e.target.body.value;
    const user_id = e.target.user_id.value;
    console.log(title, body)


let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "*/*")
const requestPost = JSON.stringify({
    "title": title,
    "body": body,
    "user_id": user_id
})
fetch("http://localhost:5000/api/create-post", {
    method: 'POST',
    headers: myHeaders,
    body: requestPost
}).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

}
render() {
        return (
           <div>    
                <div className='form-group'>
                    <form>
                        <fieldset>
                            <label htmlFor='title'>Drop a Line</label>
                            <input type='text' className='form-control' name="title" placeholder='Title' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor='body'>What's Your Deepest Darkest Secret tho???</label>
                            <input type='text' className='form-control' name="body" placeholder='Body' />
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                
                </form>
            </div>
            </div>
        )
}
}