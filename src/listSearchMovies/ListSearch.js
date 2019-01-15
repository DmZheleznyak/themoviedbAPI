import React from 'react'
import { connect } from 'react-redux'

import Card from '../../node_modules/@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

function ListSearch(props) {
  console.log(props.searchMovies)
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
      <Link to={`/movie/${movie.id}`} onClick={()=> console.log('AU')}>
        <Button size="small" color="primary">Read More</Button>
      </Link>	

    </Card> )
  return (
    <div>
      { ListSearchMovies }
    </div>
  )
}

const mapStateToProps = state => ({
  searchMovies: state.searchMovies
})

export default connect( mapStateToProps )( ListSearch )