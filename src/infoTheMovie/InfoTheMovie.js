import React, { Component } from "react";
import axios from 'axios'

import Card from '../../node_modules/@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class InfoTheMovie extends Component {
	state = {
		dataMovie: {},
		recomendationMovies: []
	}

	componentDidMount() {
		const getInfoMovie = () => 
			axios.get(`https://api.themoviedb.org/3${this.props.location.pathname}?api_key=e842780f24447ce021759d2711fd23ce&language=en-US`)
				.then( res => this.setState({ dataMovie: res.data }) )
				.catch(err => console.log( err.message ))	
		getInfoMovie()
		
		const getRecommendation = () =>
			axios.get(`https://api.themoviedb.org/3${this.props.location.pathname}/recommendations?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&page=1`)
				.then( res => {	this.setState({ recomendationMovies: res.data.results }) })
				.catch(err => console.log( err.message ))
		getRecommendation()
	}

	render() {
		const Genres = this.state.dataMovie.genres === undefined ? null :  this.state.dataMovie.genres.map( genre => (
			<span key={ genre.id } > { genre.name } </span>
		) )

		const recomendationMovies = []
		for (let i = 0; i < 3; i++) {
			if ( this.state.recomendationMovies[i] !== undefined  ) {
				recomendationMovies.push( this.state.recomendationMovies[i].title )
			}
		}
		const showRecomendationMovies = recomendationMovies.map( movie => (
			<span> { movie } <br/></span>
		))

// will show data like:
// data-mounth-year : 22 january 2017
		// const releaseDate = Date.parse(this.state.dataMovie.release_date)
		// console.log(releaseDate)

		return (
			<Card>
				<Typography variant='h2'>{ this.state.dataMovie.title }</Typography>
				<CardMedia 
					style={{ margin: '0 auto', height: `350px`, width: '400px' }}
					image={ 'https://image.tmdb.org/t/p/w500' + this.state.dataMovie.backdrop_path }
					title = 'mainImg' />
				<Typography component="p">
					Budget: { this.state.dataMovie.budget }$, Vote: { this.state.dataMovie.vote_average }
				</Typography>
				<Typography>
					<span style={{ fontWeight: 'bold' }} >Genres:</span> { Genres }
				</Typography>
				<Typography component="p">
					{ this.state.dataMovie.overview }
					<Typography component="p">
						Release Date: { this.state.dataMovie.release_date }
					</Typography>		
				</Typography>
				<Typography component="p">
					<span style={{ fontWeight: 'bold' }} >Recommendations:</span>
					{ showRecomendationMovies }
				</Typography>
				<p> Enjoy your watch !</p>			
			</Card>
		)
	}
}
	
export default InfoTheMovie