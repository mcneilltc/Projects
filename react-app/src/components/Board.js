import React, {Component} from 'react'; 
import "../css/Board.css";
import Note from './Note.js'
import PropTypes from 'prop-types';

class Board extends Component{
    constructor(){
        super();
    }
render (){
    return(
        <div>
            <div className = "div-board">
            <div className ="row" />
            <Note title ="Class Notes" body = "Use constructors when extending another class"/>
            <Note title= "My address" body = "Nunya"/>
            <Note title = "React Notes" body = "Everything in React is component"/>
            </div>
            <div>
                <button className = "btn btn-success add-button"> Add </button>
            </div>
        </div>

    );
}
}

Note.propTypes ={
    title: PropTypes.string
};
export default Board;