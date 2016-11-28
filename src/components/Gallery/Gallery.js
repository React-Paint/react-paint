import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';

export default class Gallery extends Component {
  render() {
    const drawing = Object.keys(this.props.drawings)
      .map((canvID, ind) => (
        <GalleryItem
          key={ind}
          title={this.props.drawings[canvID].title}
          desc={this.props.drawings[canvID].description}
          username={this.props.drawings[canvID].username}
          canvas={this.props.drawings[canvID].drawing}
          URL={this.props.drawings[canvID].url}
          id={`canvas${this.props.drawings[canvID].id}`}
          editCanvas={() => this.props.editCanvas(this.props.drawings[canvID].id)}
          deleteCanvas={() => this.props.deleteCanvas(this.props.drawings[canvID].id)}
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
