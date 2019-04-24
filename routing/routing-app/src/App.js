import React from 'react';
//import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation"


// const NewRoute= () => {
//   return(<div>
//     New Route
//   </div>);
// }

class App extends React.Component{
 render(){
   return(
     <BrowserRouter>
     <Navigation>
     <Switch>
     <Route path ="/" component={Home} exact/>
     <Route path ="/about" component={About}/>
     <Route path ="/contact" component={Contact}/>
     <Route component={Error} />
     </Switch>
     </Navigation>
     </BrowserRouter>
   )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
