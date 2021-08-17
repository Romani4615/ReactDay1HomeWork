import React, { Component } from 'react'
import { Switch, Route } from 'react-router';
import Kekambas from './views/Kekambas';

import Navbar from './components/Navbar'
import About from './views/About';
import Home from "./views/Home"


export default class App extends Component {
  constructor(props){        // FIRST TO RUN
    super(props);
    console.log('component constructing...')
    this.state = {
      myName: "Aaron",
      racers: []
    }
  }
  updateName= () =>{                  //updating the name via prompt
    const newName = prompt("What's ur name?")
    this.setState({
       myName: newName 
      })
  }


//aarow functs have diff functionality
componentDidMount(){              // THIRD TO RUN, MOUNTING HAPPENS HERE
  console.log("component Mounting...")
  fetch(`http://ergast.com/api/f1/2020/1/driverStandings.json`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      
    })
  })


}

  render() {                // SECOND TO RUN, NEEDS TO RENDER FIRST, MOUNTING TO THE DOM ..PROPS line 38
    console.log("component Rendering...")
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName}/>
        <div className="container">
          <Switch>
            <Route exact path="/">
            <Home myName={myName} updateName={this.updateName} allRacers={this.state.racers}/> 
            </Route>
            <Route exact path="/About">
            <About />
          </Route>
            <Route exact path="/Students">
            <Kekambas /> 
          </Route>
          </Switch>
          <h1>Single Page Test</h1>
        </div>
      </div>
   )
  }
}





// this.setState(
  //   {
  //     myName: "Michael Jordan"
  //   }
  // )