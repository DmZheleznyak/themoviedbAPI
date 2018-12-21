import React, { Component } from 'react';
import './App.css';


class App extends Component {
	state = {
		popMoviesList: []
	}

	componentDidMount() {
		const pop = this.props.getPopularMovie()
		// console.log('pop in did mount', pop)
		// this.setState({popMoviesList})
		// console.log(this.props.popularMovieList)
		console.log('props in componentDidMount', this.props)
	}

	componentDidUpdate() {
		// this.setState({popMoviesList: this.props.popularMovieList})
		console.log('props in componentDidupdate', this.props)
	}
	
	// render list movie when request will be success
  render() {
    return (
      <div className="App">
				<header>here header</header>
				{/* 
					{props.popularMoviesList.map( movie => <Showmovie key={movie.id} movie={movie} ... )}
				*/}
      </div>
    );
  }
}

export default App;
