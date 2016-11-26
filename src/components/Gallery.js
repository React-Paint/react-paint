import React, { Component } from 'react';
import './App.css';

export default class Gallery extends Component {
  componentDidMount() {
    console.log(this.props.drawings.length);
  }

  render() {
    return (
      <div>
        <h1>Gallery</h1>
      </div>
    );
  }
}
