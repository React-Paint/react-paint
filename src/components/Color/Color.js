import React, { Component } from 'react';
import SketchPicker from 'react-color';
import './Color.css';

export default class Color extends Component {
  render() {
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

// use inline styling by creating const and using them in return
// have turrinary to make color wheel appear and hide
// props passed from parent and are used here
    return (
      <div>
          <button onClick={this.props.handleClick}>Pick Color</button>
          { this.props.displayColorPicker ? <div style={popover}>
            <div style={cover} onClick={this.props.handleClose} />
            <SketchPicker
              color={this.props.color}
              onChangeComplete={this.props.handleChangeComplete}
            />
          </div> : null }
        </div>
    );
  }
}
