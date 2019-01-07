import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import { Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

class Header extends Component {
	state = {
		searchField: '',
		showModal: false
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	onSearchFieldChange( event ) {
		console.log(`event.target - `, event.target.value)
		this.setState({ searchField: event.target.value })
	}

	onButtonSearchClick() {
		console.log(`this -`, this)
		this.setState({ showModal: true })
		console.log(`nameAsProps`, this.props.nameAsProps)

		// take search 
		const getSearcMovies = () => 
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e842780f24447ce021759d2711fd23ce&language=en-US&query=${this.state.searchField}&page=1&include_adult=false`)
			.then( res => console.log( res ) )
			.catch(err => console.log( err.message ))	
		getSearcMovies()
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
						<Button 
							type="submit"
							onClick={ this.onButtonSearchClick.bind(this) }>Search</Button>
					</form>
					<p> { this.state.searchField } </p>
				</Toolbar>						
			</AppBar>
		)
	}
}

const mapStateToProps = state => ({
	nameAsProps: state.popularMovieList
})  

export default connect(mapStateToProps)(Header);

// later
// const backdrop = () => (
// 	this.state.showModal ? <div style={{
// 		width: '100%',
// 		height: '100%',
// 		position: 'fixed',
// 		zIndex: '100',
// 		left: '0',
// 		top: '0',
// 		backgroundColor: 'rgba(0, 0, 0, 0.5)'
// 	}}></div> : null
// )