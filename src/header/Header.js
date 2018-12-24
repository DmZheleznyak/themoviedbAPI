import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from './../img/baseline-image_search-24px.svg'
import { Toolbar } from '@material-ui/core';

export default function Header() {
	return (
		<AppBar position="static" style={{ height: "50px" }}>
			<Toolbar>
				<Typography style={{  }}>
					Star Collection
				</Typography>
				<InputBase 
					placeholder="search"
					style={{ backgroundColor: "white", width: '40%' }}

						/>
			</Toolbar>						
		</AppBar>
	)
}
