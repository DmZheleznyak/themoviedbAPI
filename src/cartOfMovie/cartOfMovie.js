import React from 'react'

import Card from '../../node_modules/@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'

export default function cartOfMovie( props ) {

	const popMovies = props.popMovies.map(popMovie => (
		<Card style={{ width: `31%` }} >
			<CardActionArea>
				<CardMedia
					style={{ height: `200px` }}
					image={ 'https://image.tmdb.org/t/p/w500' + popMovie.poster_path }  
					title="Contemplative Reptile"
					/>				
				<Typography gutterBottom variant="h4">{ popMovie.title }</Typography>
				<Typography component="p">{ popMovie.overview }</Typography>
			</CardActionArea>

		</Card>
	))
	
	return (
		<div style={{ width: `96%`, margin: '0 auto' }}>
			<ul style={{ display: `flex`, flexWrap: `wrap`, justifyContent: 'space-between' }}>
				{ popMovies }
			</ul>
		</div>
	)
}
