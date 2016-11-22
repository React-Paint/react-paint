import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="four columns">
            <input className="u-full-width" type="text" name="name" value={this.props.name} placeholder="name" onChange={this.props.updateNameform} />
          </div>
          <div className="three columns">
            <button type="submit" className="button-primary" name="button" onClick={this.props.getMovieByName}>SEARCH!</button>
          </div>
        </div>
      </form>
    );
  }
}
