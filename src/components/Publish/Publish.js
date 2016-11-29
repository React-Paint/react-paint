import React, { Component } from 'react';
import './Publish.css';

export default class Publish extends Component {
  render() {

// button on click saves data to table and puts it into the gallery. also put name description and username
// text is on change so that updates can be seen in real time in text boxes and not submitted till publish button is hit
// props passed through parent
    return (
      <div className="publish-div">
        <input type="text" className="reSize" placeholder="Picture Title" value={this.props.title} onChange={this.props.handleTitleChange}/>
        <textarea className="reSized" placeholder="Picture Description" value={this.props.description} onChange={this.props.handleDescriptionChange}>
          Enter a description
        </textarea>
        <button onClick={() => this.props.publishDrawing()}>Publish</button>
      </div>
    );
  }
}
