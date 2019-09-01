import React from 'react';
import './App.css';
//************************//
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
//************************//
import Greeting from './components/Greeting';
import Home from './containers/Home';




class App extends React.Component {

  state = {
    currentUser: undefined
  }

  newUser = (user) => {
    console.log(user)
    this.setState({currentUser: user})
  }


  render(){


    return(
      <Router>
         <Route exact path="/" render={(props) => <Greeting {...props} newUser={this.newUser}/>}/>
         <Route exact path="/home" render={(props) => <Home {...props} user={this.state.currentUser}/>}/>
      </Router>
    )
  }
}

export default App;
