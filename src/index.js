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
	

// write action
const getPopularMovie = () => ({ 
	type: 'GET_LOAD_MOVIE'
})


// SAGA
function* getPopularMovieSaga() {
	try {
		const result = yield call( requestPopularMovie )
		console.log( result )
		yield put({type: 'GET_POPULAR_MOVIE', popularMovieList: result.data.results })
	}	catch(error) {
		console.log(error.message)
	}
}

function* rootSaga() {
	yield takeEvery('GET_LOAD_MOVIE', getPopularMovieSaga)
}

// initialState
const initialState = {
	movie: null,
	popularMovieList: null
}

// create reducer with combineReducers
const movieReducer = ( state = initialState, action ) => {
	switch( action.type ) {
		case 'GET_LOAD_MOVIE':
		console.log('action in GET_LOAD_MOVIE')
			return {
				movie: 123 	
			}
		case 'GET_POPULAR_MOVIE':
		console.log('action in GET_POPULAR_MOVIE')
		console.log('action.popularMovieList -', action.popularMovieList)	
			return {
				...state,
				popularMovieList: action.popularMovieList
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
const mapStateToProps = state => ({ popularMovieList: state.popularMovieList })

const mapDispatchToProps = dispatch => ({
	getPopularMovie: () => dispatch( getPopularMovie() )
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
