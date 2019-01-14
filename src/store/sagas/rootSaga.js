import { takeEvery } from 'redux-saga/effects'

import { getPopularMovieSaga, getGenreMovieSaga, getSearchMoviesSaga } from './sagas'
import * as actionTypes from '../actions/actionTypes'

export default function* rootSaga() {
	yield takeEvery(actionTypes.GET_LOAD_MOVIE, getPopularMovieSaga)
	yield takeEvery(actionTypes.GET_LOAD_MOVIE, getGenreMovieSaga)
	// yield takeEvery(actionTypes.GET_SEARCH_MOVIES, getSearchMoviesSaga)
}