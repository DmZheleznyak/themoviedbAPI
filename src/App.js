import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';

import Header from './header/Header'
import CartOfMovie from './cartOfMovie/cartOfMovie'
import InfoTheMovie from './infoTheMovie/InfoTheMovie'
import ListSearch from './listSearchMovies/ListSearch'
import Autentification from './components/Autentification/Autentification'
import ListFavouriteMovies from './components/ListFavouriteMovies/ListFavouriteMovies'

import { getPopularMovie, getInfoMovie } from './store/actions/actionCreators'

class App extends Component {
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
			<BrowserRouter basename="/redux-saga.movieAPI">
				<div className="App">
					<Route path='/' component={Header} />
					<Route exact path='/' component={ListPopMovies} />
					<Route path='/search' component={ListSearch} />
					<Route path="/movie" component={InfoTheMovie} />
					<Route path='/autentification' component={Autentification} />
					<Route path='/favouriteMovies' component={ListFavouriteMovies} />							
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