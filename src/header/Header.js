import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import { Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
	return (
		<AppBar position="static" style={{ height: "50px" }}>
			<Toolbar style={{ }} >
				<Typography variant="h5" style={{  }}>
					Star Collection
				</Typography>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
					<SearchIcon style={{  }} />
					<InputBase 
						placeholder="search..."
						style={{ backgroundColor: "white", width: '75%' }}	/>
				</div>
			</Toolbar>						
		</AppBar>
	)
}
