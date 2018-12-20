import React, { Component } from 'react';
import './App.css';


class App extends Component {
	componentDidMount() {
		this.props.getPopularMovie()
  }
	// render list movie when request will be success
  render() {

    return (
      <div className="App">
				<header>here header</header>
      </div>
    );
  }
}

export default App;
