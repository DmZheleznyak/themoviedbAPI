import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//https://codepen.io/BenSmith/pen/boapwY?editors=0010//
import { Provider } from 'react-redux'
import Store from './store/store'

ReactDOM.render(
	<Provider store={ Store }>
		<App />
	</Provider>,

	document.getElementById('root')
);

serviceWorker.unregister();