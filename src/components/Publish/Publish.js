import React, { Component } from 'react';
import './Publish.css';

export default class Publish extends Component {
  render() {
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
