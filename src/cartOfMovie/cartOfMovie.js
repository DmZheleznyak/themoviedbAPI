import React from 'react'

import Card from '../../node_modules/@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default function cartOfMovie( props ) {

	const popMovies = props.popMovies.map(popMovie => (
		<Card key={ popMovie.id } style={{ width: `32%` }} >
			<CardActionArea>
				<CardMedia
					style={{ height: `200px` }}
					image={ 'https://image.tmdb.org/t/p/w500' + popMovie.poster_path }  
					title="Contemplative Reptile"
					/>				
				<Typography gutterBottom variant="h4">{ popMovie.title }</Typography>
				<Typography component="p">{ popMovie.overview }</Typography>
				<CardActions>
					<Button size="small" color="primary">
						Share to Favourits
					</Button>
					<Button size="small" color="primary">
						Read More
					</Button>
				</CardActions>
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
