import React from 'react'
import { connect } from 'react-redux'

import Card from '../../node_modules/@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import AddedFavoriteIcon from '@material-ui/icons/Favorite' 
import FavoriteIcon from '@material-ui/icons/FavoriteBorder'

import { AddFavouriteMovie, RemoveFavoriteMovie } from '../components/UI/ButtonsFavouriteMovies/ButtonsFavouriteMovies'
import { Link } from 'react-router-dom'
import { addFavouriteMovie, removeFavouriteMovie } from '../store/actions/actionCreators';

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
		<span key={ genre.id }>  { genre }  </span> 
	))

			
return <Card key={ popMovie.id } style={{ width: `30%`, marginBottom: '2%' }} >
			<CardMedia
				style={{ height: `200px` }}
				image={ 'https://image.tmdb.org/t/p/w500' + popMovie.poster_path }  
				title="Contemplative Reptile"	/>				
			<Typography gutterBottom variant="h4">{ popMovie.title }</Typography>
			<Typography gutterBottom variant="h6">  </Typography>
			<Typography><span style={{ fontWeight: 'bold' }}>Genres:</span> {listOfGenres} </Typography>
			<Typography variant="h4">Describe</Typography>
			<Typography component="p" style={{ width: `90%`, margin: '10px auto', textAlign: 'left'}}>{ popMovie.overview }</Typography>
			<div style={{ bottom: '0' }}>
				<CardActions>
					{ AddFavouriteMovie(props.favouriteMovies, popMovie, props.addFavouriteMovie) }
					{ RemoveFavoriteMovie(props.favouriteMovies, popMovie, props.removeFavouriteMovie) }
					<Link to={`/movie/${popMovie.id}`}>
						<Button size="small" color="primary">Read More</Button>
					</Link>
				</CardActions>
			</div>
		</Card>
	})
	
	return (
		<div style={{ width: `90%`, margin: '0 auto' }}>
			<ul style={{ display: `flex`, flexWrap: `wrap`, justifyContent: 'space-between' }}>
				{ popMovies }
			</ul>
		</div>
	)
}

const mapStateToProps = state => ({
	favouriteMovies: state.favouriteMovies
})

const mapDispatchToProps = dispatch => ({
	addFavouriteMovie: (movie) => dispatch( addFavouriteMovie(movie) ),
	removeFavouriteMovie: (movie) => dispatch( removeFavouriteMovie(movie) )
})

const CartOfMovie = connect(mapStateToProps, mapDispatchToProps)(cartOfMovie)

export default CartOfMovie