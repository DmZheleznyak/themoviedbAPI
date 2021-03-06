import { takeEvery } from 'redux-saga/effects'

import { 	
	getPopularMovieSaga, 
	getGenreMovieSaga, 
	getSearchMoviesSaga, 
	getMoreSearchMoviesSaga 
} from './sagas'

import * as actionTypes from '../actions/actionTypes'

export default function* rootSaga() {
	yield takeEvery(actionTypes.GET_LOAD_MOVIE, getPopularMovieSaga)
	yield takeEvery(actionTypes.GET_LOAD_MOVIE, getGenreMovieSaga)
	yield takeEvery(actionTypes.GET_LOAD_SEARCH_MOVIES, getSearchMoviesSaga)
	yield takeEvery(actionTypes.GET_LOAD_MORE_SEARCH_MOVIES, getMoreSearchMoviesSaga)
}