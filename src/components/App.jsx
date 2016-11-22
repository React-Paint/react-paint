import React, { Component } from 'react';
// import CanvasHelper from '../helpers/CanvasHelper';
import './normalize.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Set up React</h1>
        <canvas className="cvs" />
        <button className="publish">Publish</button>
      </div>
    );
  }
}
