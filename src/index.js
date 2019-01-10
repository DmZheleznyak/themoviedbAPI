import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//https://codepen.io/BenSmith/pen/boapwY?editors=0010//
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// API request
const requestPopularMovie = () => 
	axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1')
	
const requestGenreMovie = () => 
	axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1&language=en-US')	
	

// write action
const getPopularMovie = () => ({ 
	type: 'GET_LOAD_MOVIE'
})

const getInfoMovie = () => ({
	type: 'GET_LOAD_INFO_MOVIE'
})

// SAGA
function* getPopularMovieSaga() {
	try {
		const result = yield call( requestPopularMovie )
		yield put({
			type: 'GET_POPULAR_MOVIE', 
			popularMovieList: result.data.results 
		})
	}	catch(error) {
		console.log(error.message)
	}
}
function* getGenreMovieSaga() {
	try {
		const result = yield call( requestGenreMovie )
		yield put({
			type: 'GET_GENRE_LIST',
			genreMovie: result.data.genres
		})
	} catch(error) {
		console.log( error.message )
	}
}

function* rootSaga() {
	yield takeEvery('GET_LOAD_MOVIE', getPopularMovieSaga)
	yield takeEvery('GET_LOAD_MOVIE', getGenreMovieSaga)
}

// initialState
const initialState = {
	movie: 1012,
	popularMovieList: [],
	genreMovie: [],
	infoMovie: {}
}

// create reducer with combineReducers
const movieReducer = ( state = initialState, action ) => {
	switch( action.type ) {
		case 'GET_LOAD_MOVIE':
			return {
				...state,
				movie: 123 	
			}
		case 'GET_POPULAR_MOVIE':
			return {
				...state,
				popularMovieList: action.popularMovieList
			}
		case 'GET_GENRE_LIST':
			return {
				...state,
				genreMovie: action.genreMovie
			}	
		default:
			return state	
	}
}

// const rootReducer = combineReducers({ movie: movieReducer })
const rootReducer = movieReducer

// create middleware with redux-saga
const sagaMiddleware = createSagaMiddleware()

// create store 
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
	rootReducer,
	compose(	applyMiddleware( sagaMiddleware ), reduxDevTools	)	
)

sagaMiddleware.run( rootSaga )

// mapStateToProps, mapDispatchToProps
const mapStateToProps = state => ({ 
	popularMovieList: state.popularMovieList,
	genreMovie: state.genreMovie 
})

const mapDispatchToProps = dispatch => ({
	getPopularMovie: () => dispatch( getPopularMovie() ),
	getInfoMovie: () => dispatch( getInfoMovie() )
})

// connect
const ConnectApp = connect( mapStateToProps, mapDispatchToProps )(App)

// render, provider
ReactDOM.render(

	<Provider store={ store }>
			<ConnectApp />
	</Provider>,

	document.getElementById('root')
);

serviceWorker.unregister();
