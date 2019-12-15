
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
//import Header from './components/header'
import Header2 from './components/header2'
import Nav from './components/Nav'


class App extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      name : 'shah',
      lname : 'khan'
   }
 }
 

  render() {

    var styles = {
       color :"red"
    }
    
    return ( 

    <div className="App" >

          <h1>header </h1>
    <p style = {styles}>hi hello {this.state.name}</p>
    <p>hi hello {this.state.lname}</p>
   

       <Nav/>

      </div>
     
    )
  }
}








export default App;


 


