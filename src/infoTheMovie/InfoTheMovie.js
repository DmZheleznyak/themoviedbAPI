import React, { Component } from "react";

import axios from 'axios'

class InfoTheMovie extends Component {
	state = {
		infoMovie: {}
	}

	componentDidMount() {
		axios.get(`https://api.themoviedb.org/3${this.props.location.pathname}?api_key=e842780f24447ce021759d2711fd23ce&language=en-US`)
			.then(response => {
				this.setState({
					infoMovie: response.data
				})
			})
	}

	render() {
		console.log(`this.state`, this.state )

		return <p>IRON MAIDEN</p>
	}
}
	
export default InfoTheMovie