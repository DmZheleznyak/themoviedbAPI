import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Header from './header/Header'
import CartOfMovie from './cartOfMovie/cartOfMovie'
import InfoTheMovie from './infoTheMovie/InfoTheMovie'
// https://github.com/rajdee/redux-in-russian/blob/master/docs/advanced/UsageWithReactRouter.md

class App extends Component {
	state = {
		popMoviesList: []
	}

	componentDidMount() {
	  this.props.getPopularMovie()
	}

	render() {
		const ListPopMovies = () => (
			<CartOfMovie 
				popMovies={this.props.popularMovieList}
				genreMovie={this.props.genreMovie} />
		)

		const InfoMovie = () => (
			<InfoTheMovie 
				getInfoMovie={this.props.getInfoMovie} />
		)

    return (
			<BrowserRouter>
				<div className="App">
					<Route path='/' component={Header} />
					<Route exact path='/' component={ListPopMovies} />
					<Route path="/movie" component={InfoMovie} />							
				</div>
			</BrowserRouter>
    );
  }
}

export default App;
// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c