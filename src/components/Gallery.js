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
          id={`canvas${canv.id}`}
          editCanvas={() => this.props.editCanvas(canv.id)}
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

/*
const Gallery = props => {
  const generateGalleryList = drawings =>
    Object.keys(drawings)
      .map((canvID, i) => (
        <GalleryItem
          key={i}
          title={drawings[canvID].title}
          desc={drawings[canvID].description}
          canvas={drawings[canvID].drawing}
          id={`canvas${canvID}`}
          editCanvas={(canvID) => props.editCanvas(canvID.id)}
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
*/
