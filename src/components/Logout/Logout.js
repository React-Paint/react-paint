import React, { Component } from 'react';
import style from './Logout.css';

// create a React Component called _App_
class Logout extends Component {

  render() {
    return (
      <div>
        { this.props.displaylogout ? <div>
          <button onClick={this.props.logout}>Logout</button>
        </div> : null }
      </div>
    );
  }
}

export default Logout;
