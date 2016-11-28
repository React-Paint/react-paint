import React, { Component } from 'react';

export default class Publish extends Component {
  render() {
    return (
      <div className="publish-div">
        <input type="text" value={this.props.title} onChange={this.props.handleTitleChange}/>
        <textarea value={this.props.description} onChange={this.props.handleDescriptionChange}>
          Enter a description
        </textarea>
        <button onClick={() => this.props.publishDrawing()}>Publish</button>
      </div>
    );
  }
}
