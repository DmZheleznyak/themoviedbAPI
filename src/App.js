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
	
	// render list movie when request will be success
  render() {
		console.log(`PROPS IN RENDER`, this.props )
    return (
      <div className="App">
				<header>here header</header>
				 									
      </div>
    );
  }
}

export default App;
