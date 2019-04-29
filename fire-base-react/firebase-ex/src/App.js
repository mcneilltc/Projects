import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import Button from "react-bootstrap/Button"

var config = {
  apiKey: "AIzaSyDVg1O5-tIFoPH0AdNT-om8fVozTIEsZDw",
  authDomain: "newproject-cfdea.firebaseapp.com",
  databaseURL: "https://newproject-cfdea.firebaseio.com",
  projectId: "newproject-cfdea",
  storageBucket: "newproject-cfdea.appspot.com",
  messagingSenderId: "535223093873"
};
firebase.initializeApp(config);


const database = firebase.database();
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      image:logo,
      speed: 2000
    };
  }



componentDidMount() {// we are making sure that the comp did work when mounted
  const imageRef = database.ref("image/");
  const speedRef = database.ref("speed/");
  imageRef.on("value", snapshot => {
    snapshot.val() == null
      ? this.setState({ image: logo })
      : this.setState({ image: snapshot.val() });
  });
  speedRef.on("value", snapshot => {
    this.setState({
      speed: snapshot.val()
    });
  });
}

writeData = e => {// writes the data to the database
  e.preventDefault();
  const image = e.target.elements.imageForm.value;//the event listener is targeting the image element and the value is the url entered
  const speed = e.target.elements.speed.value;// the even listener is targeting the speed element and the value that is entered or changed 

  database.ref("image/").set(image, function(error) {
    if (error) {
      alert("That didn't work, please try again.");
    } else {
      console.log("Successful submit!");
    }
  });
  database.ref("speed/").set(speed, function(error) {
    if (error) {
      alert("That didn't work, please try again.");
    } else {
      console.log("Successful submit!");
    }
  });
};

resetImage = e => {
  e.preventDefault();
  database.ref("image/").set(null, function(error) {
    if (error) {
      alert("That didn't work, please try again.");
    } else {
      console.log("Successful submit!");
    }
  });
};
changeSpeed = e => {
  const speed = e.target.value;
  e.preventDefault();
  database.ref("speed/").set(speed, function(error) {
    if (error) {
      alert("That didn't work, please try again.");
    } else {
      console.log("Successful submit!");
    }
  });
};

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={this.state.image}
          alt="logo"
          style={{
            animation: `App-logo-spin infinite ${this.state.speed}ms linear`,//image spins
            height: "40vmin",
            pointerEvents: "none"
          }}
        />
        <br />
        <br />
        <br />
        <div className="col-lg-4">
          Paste an image here to change the spinning image:
          <form
            id="form"
            className="my-2 my-lg-0"
            onSubmit={this.writeData.bind(this)}
          >
            <input
              className="form-control mr-sm-4"
              type="text"
              name="imageForm"
            />
            <br />
            <Button
              className="btn btn-lg"
              variant="primary"
              type="submit"
              form="form"
            >
              Get Weird
            </Button>
            <Button
              className="btn btn-lg"
              variant="primary"
              form="form"
              onClick={this.resetImage.bind(this)}
            >
              Reset Image
            </Button>
            <br />
            <br />
            Set Speed:
            <input
              type="range"
              min="0"
              max="5000"
              defaultValue="2000"
              className="slider"
              name="speed"
              onChange={this.changeSpeed.bind(this)}
            />
          </form>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
