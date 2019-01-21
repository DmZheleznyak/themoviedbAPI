// import {  } from '../actions/actionCreators'

const initialState = {
	movie: 1012,
	popularMovieList: [],
	genreMovie: [],
	infoMovie: {},
	requestSearchMovie: null,
	searchMovies: [],
	autentification: false,
	favouriteMovies: localStorage.favouriteMovies ? localStorage.favouriteMovies : []
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
		case 'ADD_FAVORITE_MOVIE':
		console.log(`localStorage `, localStorage)
		console.log(`typeof localStorage `,typeof localStorage)
		localStorage.setItem('favouriteMovies', action.id)
		console.log(`favourite:`, state.favouriteMovies)
		console.log(`typeof favourite:`, typeof state.favouriteMovies)	
			return {
				...state,
				...state.favouriteMovies.push( action.id )
			}			
		default:
			return state	
	}
}

// const rootReducer = combineReducers({ movie: movieReducer })
export const rootReducer = movieReducer
