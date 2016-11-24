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
      back: [],
      clear: false,
      line: 4,
      displayColorPicker: false,
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
    // const goback = this.state.back.splice();
    // goback.push([imgData.data]);
    this.setState({
      imgData,
      // back: goback,
    });
    // console.log(imgData.data);
    // console.log(this.state.back);
  }

  handleClick() {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  }

  handleClose() {
    this.setState({ displayColorPicker: false });
  }

  render() {
    const banana = this.state.url;
// Banana is attributed to trevor!!!!! the "this" in this.state.url was not recognized in background
    const popover = {
      position: 'absolute',
      zIndex: '2',
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
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
        <div>
          <button onClick={this.handleClick.bind(this)}>Pick Color</button>
          { this.state.displayColorPicker ? <div style={popover}>
            <div style={cover} onClick={this.handleClose.bind(this)} />
            <SketchPicker
              color={this.state.color}
              onChangeComplete={this.handleChangeComplete.bind(this)}
            />
          </div> : null }
        </div>
        <button onClick={() => this.clickClear()}>clear</button>
      </div>
    );
  }
}
     //   <SketchPicker
     //     color={this.state.color}
      //    onChangeComplete={this.handleChangeComplete.bind(this)}
     //   />
