import React, { Component } from 'react';
import SketchPicker from 'react-color';
import Form from './Form.jsx';
import DrawCanvas from './DrawCanvas';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      color: 'rgba(0,0,0,1)',
      url: "http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg",
      holderUrl: "",
      canvasContent: [],
      imgData: {},
      clear: false,
      line: 4,
    };
  }

  handleChangeComplete(draw) {
    this.setState({
      color: 'rgba(' + draw.rgb.r + ',' + draw.rgb.g + ',' + draw.rgb.b + ', ' + draw.rgb.a + ')',
    });
  }

  clickClear() {
    this.setState({
      clear: true,
    });
  }

  unClear() {
    this.setState({
      clear: false,
    });
  }

  updateUrl(e) {
    this.setState({
      holderUrl: e.target.value,
    });
  }

  lineChange(e) {
    this.setState({
      line: e.target.value,
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
          lineWidth={this.state.line}
          canvasStyle={{
            background: 'url('+banana+')',
            cursor: 'pointer',
          }}
          clear={this.state.clear}
          unclear={this.unClear.bind(this)}
          updateCanvasIDs={(imgData) => this.updateCanvasIDs(imgData)}
          // handleColorChange={() => this.handleColorChange()}
        />
        <input type="range" min="2" max="15" step=".5" onChange={this.lineChange.bind(this)} />
        <SketchPicker
          color={this.state.color}
          onChangeComplete={this.handleChangeComplete.bind(this)}
        />
        <button onClick={() => this.clickClear()}>clear</button>
      </div>
    );
  }
}
