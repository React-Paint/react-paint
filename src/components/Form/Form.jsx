import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {

// for where users can enter url to change background images
// use on change so that real time updates to url can be seen in input box
// props passed from parents
    return (
      <div className="formzz">
        <input className="input" type="text" name="url" value={this.props.holderUrl} placeholder="Enter Background URL" onChange={this.props.updateUrl} />
        <button className="button" onClick={() => this.props.searchUrl()}>Update Now Background</button>
      </div>
    );
  }
}
