import React, { Component } from 'react'
export default class CreatePost extends Component {

handlePostSubmit = (e) => {
    e.preventDefault();
    console.log(e)       
    const title = e.target.title.value;  //event.target(entire form//post submit).name(inhtml).value is the value of the input
    const body = e.target.body.value;
    // const user_id = e.target.user_id.value;
    console.log(title, body)
//YOU CREATE THE FUNCTION AND THEN THE HTML THEN THE GUTS!!!
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json"); //will give us python dict
// myHeaders.append("Accept", "*/*")
    
    const raw = JSON.stringify({  //converts js value to JSon string object
    "title": title,
    "body": body,
    // "user_id": user_id

});
    
const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw   //actual data
    
  };
// sending our fetch with the following: for us it's json coming in
fetch("http://localhost:5000/api/create-post", requestOptions)  //make this call with these settings
.then(response => response.json())  //send something back to me, so i cant turn into JS object
.then(data => console.log(data))   // sending back the data
.catch(error => console.log('error', error))
    console.log(title, body, "this is a test of the new react form to create")

}
// FORM EVENTS == ON SUBMIT//event handlers same as submit event
render() {
        return (
           <>
               <h4>Create a Post!</h4>
        <form onSubmit={this.handlePostSubmit}>
            <div className='form-group'>
            <fieldset>
                <label htmlFor='title'>Drop a Line</label>
                <input type='text' className='form-control' name="title" placeholder='Title'/>
            </fieldset>
            <fieldset>
                <label htmlFor='body'>What's Your Deepest Darkest Secret tho???</label>
                <input type='text' className='form-control' name="body" placeholder='Body'/>
            </fieldset>
            <button type='submit' className='btn btn-outline-secondary mt-3'>Create post</button>
           </div>
       </form>
            </>
        )
}
}
// handlePostSubmit = (synthEvent) => {
    //     synthEvent.preventDefault()
    //     console.log("post submitted")
    //     console.log(synthEvent)
    //     console.log(synthEvent.target)
    //     console.log(synthEvent.target.title)
    //     console.log(synthEvent.target.title.value)
    // }
  
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    
    // var raw = JSON.stringify({
    //   "title": "Hey This is a test",
    //   "body": "What up party people"
    // });
    
    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };
    
    // fetch("http://localhost:5000/api/create-post", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
