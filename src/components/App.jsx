import React, { Component } from 'react';
// import DrawableCanvas from 'react-drawable-canvas';
import DrawCanvas from './DrawCanvas';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      color: 'black',
      canvasContent: [],
      imgData: {},
    };
  }

  updateCanvasIDs(imgData) {
    this.setState({
      imgData
    });
    console.log(imgData.data);
  }

  handleColorChange() {
    this.setState({
      color: 'blue',
    })
  }


  render() {
    return (
      <div>
        <h1>Canvas Demo</h1>
        <DrawCanvas
          brushColor={this.state.color}
          lineWidth={4}
          canvasStyle={{
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
          }}
          clear={false}
          updateCanvasIDs={(imgData) => this.updateCanvasIDs(imgData)}
          // handleColorChange={() => this.handleColorChange()}
        />
      </div>
    );
  }
}
