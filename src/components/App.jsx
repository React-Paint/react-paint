import React, { Component } from 'react';
import DrawCanvas from './DrawCanvas';
import DrawableCanvas from 'react-drawable-canvas';
import './normalize.css';
import './App.css';

export default class App extends Component {

  // handlePrint() {
  //   console.log(this.state);
  // }

  render() {
    return (
      <div>
        <h1>Canvas Demo</h1>
        <DrawableCanvas />
        <DrawCanvas />
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
