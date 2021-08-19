export default class ShowCreate extends Component {
    render() {
        return (
            
            <div> 
                <h1>Write a post</h1>
                <form action="/action_page.php">
              <label for="fname">Title name:</label><br/>
              <input type="text" id="fname" name="fname" placeholder="My title"/><br/>
              <label for="lname">write your post:</label><br/>
            <input type="text" style={{width: '500px', height: '250px'}} id="lname" name="lname" placeholder="Write your post here"/><br></br>
            <input type="submit" value="Submit" />
            </form> 
            </div>
        )}
}