import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <div>
        <input className="input" type="text" name="url" value={this.props.holderUrl} placeholder="Enter Background URL" onChange={this.props.updateUrl} />
        <button className="button" onClick={() => this.props.searchUrl()}>Update Now Background</button>
      </div>
    );
  }
}
