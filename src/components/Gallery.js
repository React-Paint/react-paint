import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import './App.css';

export default class Gallery extends Component {
  render() {
    console.log('rendering');
    const drawing = Object.keys(this.props.drawings)
      .map((canvID, ind) => (
        <GalleryItem
          key={ind}
          title={this.props.drawings[canvID].title}
          desc={this.props.drawings[canvID].description}
          canvas={this.props.drawings[canvID].drawing}
          id={`canvas${this.props.drawings[canvID].id}`}
          editCanvas={() => this.props.editCanvas(this.props.drawings[canvID].id)}
        />
    ));
    return (
      <div className="gallery-div">
        <h1>Gallery</h1>
        {drawing}
      </div>
    );
  }
}
