import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

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
		this.props.getLoadSearchMovies( requestSearchMovies )
	}

	render () {
		return (
			<AppBar position="static" style={{ height: "50px" }}>
				<Toolbar>
					<Typography variant="h5">
						Star Collection
					</Typography>
					<form 
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
						onSubmit={ this.onFormSubmit }>
						<SearchIcon/>
						<InputBase 
							placeholder="search..."
							style={{ backgroundColor: "white", width: '75%' }}
							onChange={ this.onSearchFieldChange.bind(this) }	/>
						<Link to={`/search`}>
							<Button 
								type="submit"
								onClick={ this.onButtonSearchClick.bind(this) }>Search</Button>
						</Link>	
					</form>
					<p> { this.state.searchField } </p>
				</Toolbar>						
			</AppBar>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	getLoadSearchMovies: requestSearchMovies => dispatch( getLoadSearchMovies(requestSearchMovies) )
})

export default connect(null, mapDispatchToProps)(Header);