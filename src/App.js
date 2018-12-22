import React, { Component } from 'react';
import './App.css';


class App extends Component {
	state = {
		popMoviesList: []
	}

	componentDidMount() {
	  this.props.getPopularMovie()
	}

	// componentDidUpdate(prevProps) {
	// 	if ( this.props !== prevProps ) {
	// 		this.setState({popMoviesList: this.props.popularMovieList})
	// 	} 
	// }
	
  render() {
		console.log(`PROPS IN RENDER`, this.props )
    return (
      <div className="App">
				<header>search field want to be here</header>
				 									
      </div>
    );
  }
}

export default App;
