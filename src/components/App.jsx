import React, { Component } from 'react';
import Form from './Form.jsx';
import DrawCanvas from './DrawCanvas';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      color: 'black',
      url: "http://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"
    };
  }

  handleColorChange() {
    this.setState({
      color: 'blue',
    });
  }

  updateUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }

  render() {
    const banana = this.state.url;
// Banana is attributed to trevor!!!!! the "this" in this.state.url was not recognized in background
    return (
      <div>
        <h1>Canvas Demo</h1>
        <Form
          updateUrl={(e) => this.updateUrl(e)}
        />
        <DrawCanvas
          brushColor={this.state.color}
          lineWidth={4}
          canvasStyle={{
            background: 'url('+banana+')',
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
