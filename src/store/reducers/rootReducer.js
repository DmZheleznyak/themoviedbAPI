// import {  } from '../actions/actionCreators'

const initialState = {
	movie: 1012,
	popularMovieList: [],
	genreMovie: [],
	infoMovie: {},
	requestSearchMovie: null,
	searchField: '',
	searchMovies: [],
	currentPage: null,
	totalPages: null,
	autentification: false,
	favouriteMovies: []
}

const movieReducer = ( state = initialState, action ) => {
	switch( action.type ) {
		case 'GET_LOAD_MOVIE':
			return {
				...state,
				movie: 777 	
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
		case 'GET_LOAD_SEARCH_MOVIES':
			return {
				...state,
				requestSearchMovie: action.requestSearchMovie,
				searchField: action.searchField
			}
		case 'GET_SEARCH_MOVIES':
			return {
				...state,
				searchMovies: action.data,
				currentPage: action.currentPage + 1,
				totalPages: action.totalPages
			}
		case 'ADD_FAVOURITE_MOVIE':
		const favouriteMovies = state.favouriteMovies.some( movie => movie.id === action.movie.id )
			? state.favouriteMovies 
			: [...state.favouriteMovies, action.movie]
			return {
				...state,
				favouriteMovies
			}
		case 'REMOVE_FAVOURITE_MOVIE':
			return {
				...state,
				favouriteMovies: state.favouriteMovies.filter( movie => movie.id !== action.movie.id )
			}			
		default:
			return state	
	}
}

// const rootReducer = combineReducers({ movie: movieReducer })
export const rootReducer = movieReducer
