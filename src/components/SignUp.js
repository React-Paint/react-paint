import React, { Component } from 'react';
import style from './SignUp.css';

// create a React Component called _App_
class SignUp extends Component {

  render(){
    return (
      <div id={style['form-container']}>
        <input
          type="text"
          placeholder="email"
          value={this.props.signUpUsername}
          onChange={this.props.updateFormUsername}
        />
        <input
          type="password"
          placeholder="password"
          value={this.props.signUpPassword}
          onChange={this.props.updateFormPassword}
        />
        <button onClick={this.props.handleFormSubmit}>
          SignUp!
        </button>
      </div>
    );
  }
}

export default SignUp;
