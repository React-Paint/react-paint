import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import './App.css';

export default class Gallery extends Component {
  render() {
    const drawing = this.props.drawings.map((canv, ind) => {
      return (
        <GalleryItem
          key={ind}
          title={canv.title}
          desc={canv.description}
          canvas={canv.drawing}
        />
      )
    });
    return (
      <div className="gallery-div">
        <h1>Gallery</h1>
        {drawing}
      </div>
    );
  }
}
