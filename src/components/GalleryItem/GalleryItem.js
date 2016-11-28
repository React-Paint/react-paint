import React, { Component } from 'react';
import './GalleryItem.css';

export default class GalleryItem extends Component {

  render() {
    const banana = this.props.URL;
    const style = {
      background: 'url(' + banana + ')',
      height: 200,
      width: 300,
    };
    return (
      <div className="drawing-card">
        <h4>{this.props.title}</h4>
        <p>
          {this.props.desc}
        </p>
        <div style={style}>
          <img className="renderz" src={this.props.canvas} alt={this.props.title} id={this.props.id} />
        </div>
        <div className="buttonz">
        <button onClick={this.props.editCanvas}>Edit</button>
        <button onClick={this.props.deleteCanvas}>Delete</button>
        </div>
      </div>
    );
  }
}
