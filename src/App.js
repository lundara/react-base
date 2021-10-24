import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes />
			</Router>
		);
	}
}

export default App;
