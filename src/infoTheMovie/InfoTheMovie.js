import React, { Component } from "react";
import axios from 'axios'

import Card from '../../node_modules/@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class InfoTheMovie extends Component {
	state = {
		dataMovie: {}
	}
	componentDidMount() {

		const requestInfoMovie = () => 
			axios.get(`https://api.themoviedb.org/3${this.props.location.pathname}?api_key=e842780f24447ce021759d2711fd23ce&language=en-US`)
				.then( res => this.setState({ dataMovie: res.data }) )
		
		requestInfoMovie()		
	}

	render() {
		console.log(`state in render::`, this.state.dataMovie)
		return (
			<Card>
				<Typography variant='h2'>{ this.state.dataMovie.title }</Typography>
				<CardMedia 
					style={{ height: `350px` }}
					image={ 'https://image.tmdb.org/t/p/w500' + this.state.dataMovie.poster_path }
					title = 'mainImg' />
				<Typography component="p">
					Budget: { this.state.dataMovie.budget }$, Vote: { this.state.dataMovie.vote_average }
				</Typography>
				<p>Happy !</p>
				
			</Card>
		)
	}
}
	
export default InfoTheMovie