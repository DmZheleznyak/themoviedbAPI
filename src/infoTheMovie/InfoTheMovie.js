import React, { Component } from "react";
import axios from 'axios'

import call from 'redux-saga'
import put from 'redux-saga'

import Card from '../../node_modules/@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

class InfoTheMovie extends Component {
	componentDidMount() {
		const requestInfoMovie = () => 
			axios.get(`https://api.themoviedb.org/3${this.props.location.pathname}?api_key=e842780f24447ce021759d2711fd23ce&language=en-US`)

		console.log( requestInfoMovie )

		function* getInfoMovieSaga() {
			try {
				const result = yield call( requestInfoMovie )
				yield put({
					type: 'GET_INFO_MOVIE',
					infoMovie: result
				})
			} catch(error) {
				console.log(error.message)
			}
		}		
		// this.props.getInfoMovie()
	}

	render() {

		return (
			<Card>
				<CardMedia 
					// image={ 'https://image.tmdb.org/t/p/w500' + this.state.infoMovie.backdrop_path }
					// title='backdrop_path'
					/>
					<p>Happy !</p>
			</Card>
		)
	}
}
	
export default InfoTheMovie