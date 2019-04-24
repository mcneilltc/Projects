import React from 'react';
import './App.css';
import UserForm from "./components/UserForm"

// (e) creates an event object that gets passed to the event handlers
class App extends React.Component {
  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    console.log(user);
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1 className ="App-title" >HTTP Requests in React</h1>
      <UserForm getUser= {this.getUser}/>
      </header>
     
       
      
    </div>

  );
}}

export default App;
