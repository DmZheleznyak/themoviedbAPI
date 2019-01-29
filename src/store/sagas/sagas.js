import { call, put } from 'redux-saga/effects'
import axios from 'axios'

import { getSearchMovies, getMoreSearchMovies } from '../actions/actionCreators'

const requestPopularMovie = () => 
	axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1')
	
const requestGenreMovie = () => 
	axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1&language=en-US')	
	
// const requestSearchMovies = searchField =>
// 	axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&query=${searchField}&page=1&include_adult=false`)	

export function* getPopularMovieSaga() {
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

export function* getGenreMovieSaga() {
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

export function* getSearchMoviesSaga(action) {
	try {
		const result = yield call( action.requestSearchMovies )
		yield put( getSearchMovies( result.data.results, result.data.page, result.data.total_pages ) )
	} catch(error) {
		console.log(error.message)
	}
}

export function* getMoreSearchMoviesSaga(action) {
	try {
		const result = yield call( action.requestMoreSearchMovies )
		yield put( getMoreSearchMovies( result.data.results, result.data.page, result.data.total_pages ) )
	} catch(error) {
		console.log(error.message)
	}
}