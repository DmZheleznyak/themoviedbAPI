import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//https://codepen.io/BenSmith/pen/boapwY?editors=0010//
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import createSagaMiddleware, { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import axios from 'axios'

// API request
const requestPopularMovie = () => axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1')
	.then( response => response )

// write action
const getPopularMovie = () => ({ 
	type: 'GET_LOAD_MOVIE'
})

// SAGA
function* getPopularMovieSaga() {
	try {
		const result = yield call( requestPopularMovie )
		yield put({type: 'GET_POPULAR_MOVIE', popularMovie: result.data.results } )
	}	catch(error) {
		console.log(error.message)
	}
}

function* rootSaga() {
	yield takeEvery('GET_LOAD_MOVIE', getPopularMovieSaga)
}

// create reducer with combineReducers
const movieReducer = ( state = {}, action ) => {
	switch( action.type ) {
		case 'GET_LOAD_MOVIE':
			return {
				movie: console.log('action in GET_LOAD_MOVIE') 	
			}
		case 'GET_POPULAR_MOVIE':
			return {
				movie: console.log('action in GET_POPULAR_MOVIE'),
				popularMovie: action.popularMovie
			}	
		default:
			return state	
	}
}

const rootReducer = combineReducers({ movie: movieReducer })

// create middleware with redux-saga
const sagaMiddleware = createSagaMiddleware()

// create store 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(	
		applyMiddleware( sagaMiddleware )
	)	
)

sagaMiddleware.run( rootSaga )

// mapStateToProps, mapDispatchToProps
const mapDispatchToProps = ( dispatch ) => ({
	getPopularMovie: () => dispatch( getPopularMovie() )
})

// connect
const ConnectApp = connect( null, mapDispatchToProps )(App)

// render, provider
ReactDOM.render(

	<Provider store={ store }>
		<ConnectApp />
	</Provider>,

	document.getElementById('root')
);

serviceWorker.unregister();
