import React, { Component } from 'react';
import './App.css';

import Header from './header/Header'
import CartOfMovie from './cartOfMovie/cartOfMovie.js'

class App extends Component {
	state = {
		popMoviesList: []
	}

	componentDidMount() {
	  this.props.getPopularMovie()
	}

	// componentDidUpdate(prevProps) {
	// 	if ( this.props !== prevProps ) {
	// 		this.setState({popMoviesList: this.props.popularMovieList})
	// 	} 
	// }
	
  render() {
    return (
      <div className="App">
				<Header>search field want to be here</Header>
				<CartOfMovie 
					popMovies={this.props.popularMovieList}
					genreMovie={this.props.genreMovie} /> 									
      </div>
    );
  }
}

export default App;
// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c