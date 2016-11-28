import React, { Component } from 'react';
import style from './LogInForm.css';

// create a React Component called _App_
class LogInForm extends Component {

  render(){
    return (
      <div id={style['form-container']}>
        <input
          type="text"
          placeholder="email"
          value={this.props.logInUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.logInPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleFormSubmit}>
          Log In!
        </button>
      </div>
    );
  }
}

export default LogInForm;
