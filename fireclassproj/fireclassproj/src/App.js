import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: "default value"
    };
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {this.state.text}</h1>
          <form onSubmit = "">
          <input type= "text" name = "inputText" />
          <input type ="submit" name = "submitButton" value  = "ok"/>
          </form>
       
      </header>
    </div>
  );
}
}

export default App;
