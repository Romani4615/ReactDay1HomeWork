import React, {Component} from 'react';
import Students from '../components/Students';



export default class Kekambas extends Component {
    constructor(props){
        super(props);
        console.log("component constructing")
        this.state = {
        students: []
        }
    }
componentDidMount() {
    fetch(`https://kekambas-bs.herokuapp.com/kekambas`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
      this.setState({
        students: data
      })
    })
  }
render() {
    return (
<div>

    <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
    <tbody>
        {this.state.students.map((student, index)=>(<Students student={student} key={index}/>))}
    </tbody>
    </table>
</div>)}
}