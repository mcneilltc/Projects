import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../css/Note.css";



    class Note extends React.Component{
    constructor(){
        super();
    }
        componentWillMount(){  
        this.state = {
            title: this.props.title,
            body: this.props.body,
            editMode: false
        }
    }


    render(){
        return(
            <div className = "col-sm-4">
            <div className = "card card-view">
            <div className = "card body">
            <h5 classname = "card-title">{this.props.title}</h5>
            <p>{this.props.body}</p>
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
Note.propTypes ={
    title: propTypes.string
};

export default Note;