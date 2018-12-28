import React, { Component } from 'react';
import './App.css';

import Header from './header/Header'
import CartOfMovie from './cartOfMovie/cartOfMovie.js'

import { BrowserRouter, Route } from 'react-router-dom'

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
	
  // render() {
  //   return (
  //     <div className="App">
	// 			<Header>search field want to be here</Header>
	// 			<CartOfMovie 
	// 				popMovies={this.props.popularMovieList}
	// 				genreMovie={this.props.genreMovie} /> 									
  //     </div>
  //   );
	// }

	render() {
		const ListPopMovies = () => (
			<CartOfMovie 
				popMovies={this.props.popularMovieList}
				genreMovie={this.props.genreMovie} />
		)
		const pagent = () => {
			console.log('in App id', this.props.popularMovieList.id)
			return (<p>IRON MAIDEN</p>)
		}
    return (
			<BrowserRouter>
				<div className="App">
					<Route path='/' component={Header} />
					<Route exact path='/' component={ListPopMovies} />
					<Route path="/page" component={pagent} />							
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c