import React, { Component } from 'react';

class MovieItems extends Component {
 render(){
   return (
     <div className="movie-item">
       <h4>{this.props.title}</h4>
       <div className="movie-poster">
         <img src={this.props.poster} alt={this.props.id} />
       </div>
      <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
   </div>
   );
 }
}

export default MovieItems;
