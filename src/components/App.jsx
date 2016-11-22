import React, { Component } from 'react';
// import DrawableCanvas from 'react-drawable-canvas';
import DrawCanvas from './DrawCanvas';
import './normalize.css';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Canvas Demo</h1>
        <DrawCanvas
          brushColor={'#000000'}
          lineWidth={4}
          canvasStyle={{
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
          }}
          clear={false}
        />
        <button> See State </button>
      </div>
    );
  }
}


{/* // brushColor={'#000000'}
// lineWidth={4}
// canvasStyle={{
//   backgroundColor: '#FFFFFF',
//   cursor: 'pointer'
// }}
// clear={false} */}
