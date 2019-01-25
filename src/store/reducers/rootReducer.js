// import {  } from '../actions/actionCreators'

const initialState = {
	movie: 1012,
	popularMovieList: [],
	genreMovie: [],
	infoMovie: {},
	requestSearchMovie: null,
	searchMovies: [],
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
				requestSearchMovie: action.requestSearchMovie
			}
		case 'GET_SEARCH_MOVIES':
			return {
				...state,
				searchMovies: action.data
			}
		case 'ADD_FAVOURITE_MOVIE':
			const returnAddFavouriteMovies = state.favouriteMovies
			const setForCheck = new Set(returnAddFavouriteMovies)

			if( !setForCheck.has(action.id) ) setForCheck.add(action.id)

			return {
				...state,
				favouriteMovies: [...setForCheck]
			}
		case 'REMOVE_FAVOURITE_MOVIE':
			const returnRemoveFavouriteMovies = state.favouriteMovies
			const setForDelete = new Set( returnRemoveFavouriteMovies )

			if ( setForDelete.has(action.id) ) setForDelete.delete(action.id)
			
			return {
				...state,
				favouriteMovies: [...setForDelete]
			}			
		default:
			return state	
	}
}

// const rootReducer = combineReducers({ movie: movieReducer })
export const rootReducer = movieReducer
