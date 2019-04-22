import React, {Component} from 'react'; 
import "../css/Board.css";
import Note from './Note.js'
import PropTypes from 'prop-types';

class Board extends Component{
    constructor(){
        super();
        this.state = {
            notes: [
                {
                    title:"Class Notes", 
                    body: "Use constructors when extending another class"
                },
                {
                    title: "React Notes",
                    body: "Everything in React is component"
                },
                {
                    title: "My address",
                     body: "Nunya"
                }
            ]
        }
    }
render (){
    return(
        <div>
            <div className = "div-board">
            <div className ="row" />
            {
                this.state.notes.map(note => {
                    return <Note title= {note.title} body =
                    {note.body} />
                })
            }
            </div>
            <div>
                <button className = "btn btn-success add-button"> Add </button>
            </div>
        </div>

    );
}
}
addNote() {
    this.state.notes.push(
        {
        title: "New title",
        body: "new note body"
    }
    );
    this.setState(
        {
            notes: this.state.notes
        }
    );
}
// Note.propTypes ={
//     title: PropTypes.string
// };
export default Board;