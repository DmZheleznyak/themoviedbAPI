import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import { Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

class Header extends Component {
	state = {
		searchField: ''
	}

	onFormSubmit(event) {
		event.preventDefault();
		console.log(`event-`, event)
		console.log('search. search')
	}

	onSearchFieldChange( event ) {
		console.log(`event.target - `, event.target.value)
		this.setState({ searchField: event.target.value })
	}

	render () {
		return (
			<AppBar position="static" style={{ height: "50px" }}>
				<Toolbar style={{ }} >
					<Typography variant="h5" style={{  }}>
						Star Collection
					</Typography>
					<form 
						style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
						onSubmit={ this.onFormSubmit }>
						<SearchIcon style={{  }} />
						<InputBase 
							placeholder="search..."
							style={{ backgroundColor: "white", width: '75%' }}
							onChange={ this.onSearchFieldChange.bind(this) }	/>
						<Button 
							type="submit">Search</Button>
					</form>
					<p> { this.state.searchField } </p>
				</Toolbar>						
			</AppBar>
		)
	}
}

export default Header;