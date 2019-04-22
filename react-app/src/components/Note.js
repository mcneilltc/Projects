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

handleEdit(){
    this. setState({
        editMode: true
    });
}
handleSave(){
    this.setState({
        title: this.refs.titleContent.value,
        body: this.refs.bodyContent.value,
        editMode: false

    });
}
    render(){
let titleElement, bodyElement, buttonArea;
if (this.state.editMode){
    titleElement = <textarea ref = "titleContent" className = "title-textarea" defaultValue= {this.state.area}></textarea>;
bodyElement = <textarea ref = "bodyContent" className = "body-textarea" defaultValue = {this.state.body}></textarea>;
buttonArea = <div><button className = "btn btn-info" onClick = {this.handleEdit.bind(this)}> Edit </button> </div>;
} else {
    titleElement = <h5>{this.state.title}</h5>;
    bodyElement = <p>{this.handleEdit.state.body}</p>;
    buttonArea = <div><button className = "btn btn-warning" onClick = {this.handleEdit.bind(this)}>Edit </button><button className = "btn btn-danger">Delete</button> </div>
};

        return(
            <div className = "col-sm-4">
            <div className = "card card-view">
            <div className = "card body">
           {titleElement}
           {bodyElement}
           {buttonArea}
            </div>
            </div>
            </div>

            
        );
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