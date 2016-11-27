import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import './App.css';

// Now live refreshes and edit button works
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

/*
// This way can live update
const Gallery = props => {

  const generateGalleryList = drawings =>
    Object.keys(drawings)
      // .filter(canvID => props.filter(drawings[canvID]))
      .map((canvID, i) => (
        <GalleryItem
          key={i}
          title={drawings[canvID].title}
          desc={drawings[canvID].description}
          canvas={drawings[canvID].drawing}
          id={`canvas${canvID}`}
          editCanvas={() => props.editCanvas(canvID.id)}
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
