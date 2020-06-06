import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import SearchIcon from '@material-ui/icons/Search';

import { getLoadSearchMovies } from '../store/actions/actionCreators';

class Header extends Component {
	state = {
		searchField: ''
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	onSearchFieldChange( event ) {
		this.setState({ searchField: event.target.value })
	}

	onButtonSearchClick() {
		const requestSearchMovies = () =>
			axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&query=${this.state.searchField}&page=1&include_adult=false`)
		console.log(`requestSearchMovies in header`, requestSearchMovies)	
		this.props.getLoadSearchMovies( requestSearchMovies, this.state.searchField )
	}

	render () {
		return (
			<AppBar position="static" style={{ height: "70px" }}>
				<Toolbar style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Link to={'/'}>
						<Button><Typography variant="h5">Stars Collection</Typography></Button>
					</Link>
					<Link to={'/favouriteMovies'} style={{ margin: '0 20px' }}>
						<Button> Favorite Movies </Button>
					</Link>
					<Link to={`/autentification`}>
						<Button>{this.props.autentification ? `Sign out` : `Sign in`}</Button>
					</Link>
					<form 
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
						onSubmit={ this.onFormSubmit }>
						<InputBase 
							placeholder="search..."
							style={{ backgroundColor: "white", width: '75%', paddingLeft: '4%', marginLeft: '14%' }}
							onChange={ this.onSearchFieldChange.bind(this) }	/>
						{/* <p> { this.state.searchField } </p> */}	
						<Link to={`/search`}>
							<Button 
								type="submit"
								onClick={ this.onButtonSearchClick.bind(this) }><SearchIcon/>Search</Button>
						</Link>	
					</form>
				</Toolbar>						
			</AppBar>
		)
	}
}

const mapStateToProps = state => ({
	autentification: state.autentification
})

const mapDispatchToProps = dispatch => ({
	getLoadSearchMovies: (requestSearchMovies, searchField) => dispatch( getLoadSearchMovies(requestSearchMovies, searchField) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);