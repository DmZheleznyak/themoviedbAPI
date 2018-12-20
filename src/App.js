import React, { Component } from 'react';
import './App.css';

import Popular from './Popular'

class App extends Component {
	constructor(props) {
		super( props )
	}

	componentDidMount() {
		this.props.getPopularMovie()
  }
	
  render() {

    return (
      <div className="App">
				<header>here header</header>
				<Popular />
      </div>
    );
  }
}

export default App;
