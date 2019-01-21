import React from 'react'
import { connect } from 'react-redux'

import Card from '../../node_modules/@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import FavoriteIcon from '@material-ui/icons/FavoriteBorder'
// import AddedFavoriteIcon from '@material-ui/icons/Favorite' - change icon on this 
// if movie has added in list favorite movie

import { Link } from 'react-router-dom'

function cartOfMovie( props ) {
// creat showcart of the movie
// go to array  
	const popMovies = props.popMovies.map(popMovie => {
// get name (not id) of genres for each films ---------------
		const genreNames = []
		popMovie.genre_ids.map(genre_id => {
// take our movie's genres id 
// and equal with each id from all list genres			
			props.genreMovie.map(genre => {
					if (genre_id === genre.id) {
// find name genre, what we need  
// (not id, because after we render on start page)
// and give to genreNames array						
						return genreNames.push( genre.name ) 
					}
				})
		})
		const listOfGenres = genreNames.map(genre => (
			<Typography gutterBottom component="span"> { genre } </Typography>
		))
// ----------------------------------------------------------
			
return <Card key={ popMovie.id } style={{ width: `32%`, marginBottom: '10px' }} >
			<CardMedia
				style={{ height: `200px` }}
				image={ 'https://image.tmdb.org/t/p/w500' + popMovie.poster_path }  
				title="Contemplative Reptile"	/>				
			<Typography gutterBottom variant="h4">{ popMovie.title }</Typography>
			<Typography gutterBottom variant="h6"> Genres: </Typography>
			<Typography> {listOfGenres} </Typography>
			<Typography component="p">{ popMovie.overview }</Typography>
			<CardActions>
				<Button size="small" color="primary" >
					<FavoriteIcon style={{ color: "yellow" }} />Share to Favourits
				</Button>
				<Link to={`/movie/${popMovie.id}`}>
					<Button size="small" color="primary">Read More</Button>
				</Link>	
			</CardActions>
		</Card>
	})
	
	return (
		<div style={{ width: `100%`, margin: '0 auto' }}>
			<ul style={{ display: `flex`, flexWrap: `wrap`, justifyContent: 'space-between' }}>
				{ popMovies }
			</ul>
		</div>
	)
}

const CartOfMovie = connect()(cartOfMovie)

export default CartOfMovie