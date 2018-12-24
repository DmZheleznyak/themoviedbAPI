import React from 'react'

export default function cartOfMovie( props ) {

	const popMovies = props.popMovies.map(popMovie => (
		<li style={{ width: `20%` }} >
			<h3>{ popMovie.title }</h3>
			<p>{ popMovie.overview }</p>
		</li>kjhsdfh
	))
	
	return (
		<div style={{ width: `70%` }}>
			<ul style={{ display: `flex`, flexWrap: `wrap` }}>>
				{ popMovies }
			</ul>
		</div>
	)
}
