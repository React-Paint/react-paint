import React, { Component } from 'react';
import Form from './Form.jsx';
import DrawCanvas from './DrawCanvas';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      color: 'black',
      url: "http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg",
      holderUrl: "",
      canvasContent: [],
      imgData: {},
    };
  }

  handleColorChange() {
    this.setState({
      color: 'blue',
    });
  }

  updateUrl(e) {
    this.setState({
      holderUrl: e.target.value,
    });
  }

    searchUrl() {
      this.setState({
        url: this.state.holderUrl,
      });
}
  updateCanvasIDs(imgData) {
    this.setState({
      imgData
    });
    console.log(imgData.data);
  }

  render() {
    const banana = this.state.url;
// Banana is attributed to trevor!!!!! the "this" in this.state.url was not recognized in background
    return (
      <div>
        <h1>Canvas Demo</h1>
        <Form
          updateUrl={(e) => this.updateUrl(e)}
          searchUrl={this.searchUrl.bind(this)}
          holderUrl={this.state.holderUrl}
        />
        <DrawCanvas
          brushColor={this.state.color}
          lineWidth={4}
          canvasStyle={{
            background: 'url('+banana+')',
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
