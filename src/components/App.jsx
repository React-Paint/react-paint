import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Form from './Form.jsx';
import Search from './Search.jsx';
import Database from './Database.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      poster: '',
      nameForm: '',
      playing: [],
    };
  }

  getMovie() {
    fetch(`/api`)
    .then(r => r.json())
    .then((data) => {
      this.setState ({
        playing:data
      })
    })
  }

  addMovie(data) {
  fetch('/api/save', {
    method: 'POST',
  })
  .then(r => r.json())
    .then((data) => {
      this.setState ({
        playing:playing.push(data)
      })
    })
  }

  handleDelete(id) {
   fetch(`/api/delete/${id}`, {
     method: 'delete'
   })
   .then(() => {
     let playing = this.state.playing.filter((mov) => {
       return mov.id !=id;
     });
    this.setState({
      playing: playing
    })
   })
   .catch(err => console.log(err));
 }

  getMovieByName(e) {
    e.preventDefault();
  fetch(`http://www.omdbapi.com/?t=${this.state.nameForm}`)
  .then(r => r.json())
  .then((data) => {
    this.setState({
        title: data.Title,
        poster: data.Poster,
      });
  })
  .catch()
}

  updateNameform(e) {
    this.setState({
      nameForm: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Movie Part 3!!!</h1>
          <img src="http://www.pridelines.org/sites/pridelines/files/Movie%20night.jpg" />
        </header>
        <Form
          name={this.state.nameForm}
          updateNameform={this.updateNameform.bind(this)}
          getMovieByName={this.getMovieByName.bind(this)}
        />
        <Search
          title={this.state.title}
          poster={this.state.poster}
          addMovie={this.addMovie.bind(this)}
        />
        <Database
          getMovie={this.getMovie.bind(this)}
          playing={this.state.playing}
          handleDelete={this.handleDelete.bind(this)}
        />
        <footer>
          <h3>CREATED BY MATT</h3>
        </footer>
      </div>
    );
  }
}

export default App;
