import React, { Component } from 'react';
import './App.css';

export default class GalleryItem extends Component {

  render() {
    return (
      <div className="drawing-card">
        <h4>{this.props.title}</h4>
        <p>
          {this.props.desc}
        </p>
        <img src={this.props.canvas} alt={this.props.title} id={this.props.id}/>
        <button onClick={this.props.editCanvas}>Edit</button>
      </div>
    );
  }
}
