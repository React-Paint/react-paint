import React, { Component } from 'react';

export default class Search extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <img src={this.props.poster}/>
        <button onClick={this.props.addMovie}>SAVE</button>
      </div>
    );
  }
}

