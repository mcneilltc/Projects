import React, {Component} from 'react'; 
import "../css/Board.css";
import Note from './Note.js'
import PropTypes from 'prop-types';

class Board extends Component{
    constructor(){
        
        addNote(){
            this.state.notes.push(
                {
               id: Date.now()
            }
            );
            this.setState(
                {
                    notes: this.state.notes
                }
            );
        }

        deleteNote(id){
            let newNoteArr = this.state.notes;
            newNoteArr.map((note, index)=>{
                if (id === note.id){
                    newNoteArr.splice(index, 1);
                }
            });
            this.setState(
                {notes: newNoteArr}
            );
        }
    }
render (){
    return(
        <div>
            <div className = "div-board">
            <div className ="row" />
            {
                this.state.notes.map(note => {
                    return <Note key ={note.id} title= {note.id} deleteHandler ={this.deleteNote.bind(this)}/>
                })
            }
            </div>
            <div>
                <button className = "btn btn-success add-button" onClick = {this.addNote.bind(this)}> Add </button>
            </div>
        </div>

    );
}
}


// Note.propTypes ={
//     title: PropTypes.string
// };
export default Board;

//this is just a test message to see if this has worked
