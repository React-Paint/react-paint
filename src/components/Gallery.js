import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import './App.css';

export default class Gallery extends Component {
  generateGalleryList() {
    Object.keys(this.props.drawings).map((canv, ind) => {
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
  }
  render() {
    return (
      <div className="gallery-div">
        <h1>Gallery</h1>
        {this.generateGalleryList()}
      </div>
    );
  }
}


// const Gallery = props => {
//   const generateGalleryList = drawings =>
//     Object.keys(drawings)
//       .map((canvID, i) => (
//         <GalleryItem
//           key={i}
//           title={drawings[canvID].title}
//           desc={drawings[canvID].description}
//           canvas={drawings[canvID].drawing}
//           id={`canvas${canvID}`}
//           editCanvas={(canvID) => props.editCanvas(canvID.id)}
//         />
//     ));
//
//   return (
//     <div className="gallery-div">
//       <h1>Gallery</h1>
//       {generateGalleryList(props.drawings)}
//     </div>
//   );
// };
//
// export default Gallery;
