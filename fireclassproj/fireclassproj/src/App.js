import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB3p59VxfpUoKLb-k4uSvtgLAhTQmkX0Qw",
  authDomain: "newclassproj.firebaseapp.com",
  databaseURL: "https://newclassproj.firebaseio.com",
  projectId: "newclassproj",
  storageBucket: "newclassproj.appspot.com",
  messagingSenderId: "227842363966"
};
firebase.initializeApp(config);

const database= firebase.database();


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: "default value"
    };
  }

componentDidMount(){
  const textRef = database.ref("text/")//textRef lookin for the text reference not just the text componenetDidmount used to get the data
//textRef.on("value")// add value here to pull everytime some value is entered
textRef.on("value", snapshot => {
  this.setState({
    text: snapshot.val()
  })
})
}

writeData = e => {
  e.preventDefault();
  const textValue= e.target.elements.inputText.value;// this is standard
  database.ref("text/").set(textValue, function(error){
    error ? alert("error") : console.log("it works")}) //.set changes the data that was previously stored, .push add new data
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {this.state.text}</h1>
          <form onSubmit = {this.writeData.bind(this)}>
          <input type= "text" name = "inputText" />
          <input type ="submit" name = "submitButton" value  = "ok"/>
          </form>
       
      </header>
    </div>
  );
}
}

export default App;
