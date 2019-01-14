// import {  } from '../actions/actionCreators'

const initialState = {
	movie: 1012,
	popularMovieList: [],
	genreMovie: [],
	infoMovie: {}
}

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
export const rootReducer = movieReducer
