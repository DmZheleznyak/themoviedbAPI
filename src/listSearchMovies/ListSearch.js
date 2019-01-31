import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Card from '../../node_modules/@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'
import { addFavouriteMovie, removeFavouriteMovie } from '../store/actions/actionCreators'

import { AddFavouriteMovie, RemoveFavoriteMovie } from '../components/UI/ButtonsFavouriteMovies/ButtonsFavouriteMovies'
import { getLoadMoreSearchMovies } from '../store/actions/actionCreators'

function ListSearch(props) {

  const ListSearchMovies = props.searchMovies.map( movie =>
    <Card key={ movie.id } 
          style={{
            display: `flex`,
            width: "90%",
            margin: "0 auto",
            marginTop: "14px"
          }}>
      <CardMedia
				style={{ width: "150px", height: `150px` }}
				image={ 'https://image.tmdb.org/t/p/w500' + movie.poster_path }  
				title="Contemplative Reptile"	/>
      <div>
        <Typography variant="h4"> {movie.title} </Typography>
        <Typography component="p"> {movie.overview} </Typography>    
      </div>
      <div>
        <Typography component="p">
            Release date - { movie.release_date }
        </Typography>
        <Typography component="p" >
          Vote average - { movie.vote_average }  
        </Typography>
      </div>
      { AddFavouriteMovie(props.favouriteMovies, movie, props.addFavouriteMovie) }
      { RemoveFavoriteMovie(props.favouriteMovies, movie, props.removeFavouriteMovie) }
      <Link to={`/movie/${movie.id}`} onClick={()=> console.log('AU')}>
        <Button size="small" color="primary">Read More</Button>
      </Link>	
    </Card> )

  const getMoreMovies = () => {
    const requestMoreSearchMovies = () =>
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&query=${props.searchField}&page=${props.currentPage}&include_adult=false`)  
    props.getLoadMoreSearchMovies( requestMoreSearchMovies )
  }

  return (
    <div>
      { ListSearchMovies }
      { (props.currentPage < props.totalPages) ?
        <Button 
          color="primary" 
          style={{ margin: "30px auto" }}
          onClick={ getMoreMovies } >I haven't choiced, pleace more movies</Button> :
        <Typography variant="h4" style={{ margin: "30px auto" }}> This is the End ! </Typography>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  searchMovies: state.searchMovies,
  searchField: state.searchField,
  currentPage: state.currentPage,
  totalPages: state.totalPages,
  favouriteMovies: state.favouriteMovies
})

const mapDispatchToProps = dispatch => ({
  getLoadMoreSearchMovies: requestMoreSearchMovies => dispatch( getLoadMoreSearchMovies( requestMoreSearchMovies ) ),
  addFavouriteMovie: (movie) => dispatch( addFavouriteMovie(movie) ),
	removeFavouriteMovie: (movie) => dispatch( removeFavouriteMovie(movie) )
})

export default connect( mapStateToProps, mapDispatchToProps )( ListSearch )