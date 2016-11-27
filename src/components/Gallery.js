import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import './App.css';

const Gallery = props => {
  const generateGalleryList = drawings =>
    Object.keys(drawings)
      .map((canvID, i) => (
        <GalleryItem
          key={i}
          title={drawings[canvID].title}
          desc={drawings[canvID].description}
          canvas={drawings[canvID].drawing}
          URL={drawings[canvID].url}
          id={`canvas${canvID}`}
          editCanvas={() => this.props.editCanvas(canvID)}
        />
    ));

  return (
    <div className="gallery-div">
      <h1>Gallery</h1>
      {generateGalleryList(props.drawings)}
    </div>
  );
};

export default Gallery;
