import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import Header from './header/Header'
import CartOfMovie from './cartOfMovie/cartOfMovie'
import InfoTheMovie from './infoTheMovie/InfoTheMovie'
import ListSearch from './listSearchMovies/ListSearch'
// https://github.com/rajdee/redux-in-russian/blob/master/docs/advanced/UsageWithReactRouter.md

import { getPopularMovie, getInfoMovie } from './store/actions/actionCreators'

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

    return (
			<BrowserRouter>
				<div className="App">
					<Route path='/' component={Header} />
					<Route exact path='/' component={ListPopMovies} />
					<Route path='/search' component={ListSearch} />
					<Route path="/movie" component={InfoTheMovie} />							
				</div>
			</BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({ 
	popularMovieList: state.popularMovieList,
	genreMovie: state.genreMovie 
})

const mapDispatchToProps = dispatch => ({
	getPopularMovie: () => dispatch( getPopularMovie() ),
	getInfoMovie: () => dispatch( getInfoMovie() ),
})


export default connect( mapStateToProps, mapDispatchToProps )(App);
// https://medium.freecodecamp.org/meet-your-material-ui-your-new-favorite-user-interface-library-6349a1c88a8c