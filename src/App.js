import React, { Component } from 'react';
import './App.css';

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
		console.log(`PROPS IN RENDER`, this.props )
    return (
      <div className="App">
				<header>search field want to be here</header>
				<CartOfMovie popMovies={this.props.popularMovieList} /> 									
      </div>
    );
  }
}

export default App;
