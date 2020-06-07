import React from 'react'
import { connect } from 'react-redux'

import Card from '../../../node_modules/@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'
import { addFavouriteMovie, removeFavouriteMovie } from '../../store/actions/actionCreators'
import { RemoveFavoriteMovie } from '../UI/ButtonsFavouriteMovies/ButtonsFavouriteMovies'

function ListFavouriteMovies(props) {

  const styleCard = () => {
		if (window.matchMedia("(max-width: 900px)").matches) {
			return {
        display: `flex`,
        width: "92%",
        margin: "0 auto",
        marginTop: "14px",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }
		} else {
			return {
        display: `flex`,
        width: "92%",
        margin: "0 auto",
        marginTop: "14px",
        alignItems: 'center',
        justifyContent: 'space-between'
      }
		}		
  }
  
  const styleDateAverage = () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      return {
        width: "80%"
      }
    } else {
      return {
        width: "20%"
      }
    }
  }

  const FavouriteMovies = props.favouriteMovies.map( movie =>
    <Card key={ movie.id } 
          style={ styleCard() }>

      <CardMedia
				style={{ width: "200px", height: `200px` }}
				image={ 'https://image.tmdb.org/t/p/w500' + movie.poster_path }  
				title="Contemplative Reptile"	/>
      <div>
        <Typography variant="h4"> {movie.title} </Typography>
        <Typography component="p" style={{ width: '75%', margin: '0 auto', paddingTop: '2%', paddingBottom: '2%', textAlign: 'left' }}>
          {(movie.overview.lenght < 300) ? movie.overview : movie.overview.slice(0, 300) + `...`} 
        </Typography>    
      </div>
      <div style={ styleDateAverage() }>
        <Typography component="p">
            Release date - { movie.release_date }
        </Typography>
        <Typography component="p" >
          Vote average - { movie.vote_average }  
        </Typography>
      </div>
      { RemoveFavoriteMovie(props.favouriteMovies, movie, props.removeFavouriteMovie) }
      <Link to={`/movie/${movie.id}`}>
        <Button size="small" color="primary">Read More</Button>
      </Link>
    </Card> )


  return (
    <div>
      <Typography variant="h3">My favourite movies</Typography>
      { FavouriteMovies }
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

export default connect( mapStateToProps, mapDispatchToProps )( ListFavouriteMovies )