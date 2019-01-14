import { call, put } from 'redux-saga/effects'
import axios from 'axios'

const requestPopularMovie = () => 
	axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1')
	
const requestGenreMovie = () => 
	axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1&language=en-US')	
	
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