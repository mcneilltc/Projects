import React, {Component} from 'react';
import "../css/Note.css";

class Note extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className = "col-sm-4">
            <div className = "card card-view">
            <div className = "card body">
            <h5 classname = "card-title">Note Title</h5>
            <p>This is a note I made up</p>
            <button className= " btn btn-warning"> add button</button>
            <button className = "btn btn-danger"> delete button</button>
            </div>
            </div>
            </div>

            
        )
    }
}
Note.defaultProps={
    title: "a cool title",
    body: "a cool body",
}

export default Note;