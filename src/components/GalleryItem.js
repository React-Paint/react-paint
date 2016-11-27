import React, { Component } from 'react';
import './App.css';

export default class GalleryItem extends Component {

  render() {
    const banana = this.props.URL;
    const style = {
      background: 'url(' + banana + ')',
      height: 400,
      width: 600,
    };
    return (
      <div className="drawing-card">
        <h4>{this.props.title}</h4>
        <p>
          {this.props.desc}
        </p>
        <div style={style}>
          <img src={this.props.canvas} alt={this.props.title} id={this.props.id} />
        </div>
        <button onClick={this.props.editCanvas}>Edit</button>
      </div>
    );
  }
}
