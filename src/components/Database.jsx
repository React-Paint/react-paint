import React, { Component } from 'react';
import DatabaseItem from './DatabaseItem.jsx'

export default class DataBase extends Component {

 renderAllMovies(){
   return this.props.playing.map((play, i) =>
     <DatabaseItem
       handleDelete={this.props.handleDelete}
       title={play.title}
       poster={play.poster}
       id={play.id}
       key={i}
     />
   )
 }

 componentWillMount() {
   this.props.getMovie();
 }

 render(){
   return(
     <div className="now-playing">
       {this.renderAllMovies()}
     </div>
   );
 }
}




