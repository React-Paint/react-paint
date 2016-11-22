import React, { Component } from 'react';
// import DrawableCanvas from 'react-drawable-canvas';
import DrawCanvas from './DrawCanvas';
import './normalize.css';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      color: 'blue',
    };
  }

  handleColorChange(){
    this.setState({
      color: 'black',
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
        />
        <button onClick={() => this.handleColorChange()}> Color Blue </button>
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
