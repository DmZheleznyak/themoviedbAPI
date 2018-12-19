import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//https://codepen.io/BenSmith/pen/boapwY?editors=0010//
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

// write action
const getPopularMovie = () => ({ // CHAPTER I
	type: 'GET_POPULAR_MOVIE'
})

// create reducer with combineReducers
const movieReducer = ( state = {}, action ) => {
	switch('console') {
		case 'console':
			return {
				movie: console.log(state) 	//не разобрался откуда здесь магия
			}
		default:
			return state	
	}
}

const rootReducer = combineReducers({ movie: movieReducer })

// create middleware with redux-saga
const sagaMiddleware = createSagaMiddleware()

// create store 
const store = createStore(
	rootReducer,
	applyMiddleware( sagaMiddleware )
)

// render, provider
ReactDOM.render(

	<Provider store={ store }>
		<App />
	</Provider>,

	document.getElementById('root')
);

serviceWorker.unregister();
