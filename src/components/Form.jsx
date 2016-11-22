import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <input className="input" type="text" name="url" value='' placeholder="Enter Background URL" onChange={this.props.updateUrl} />
        <button>Search</button>
      </div>
    );
  }
}
