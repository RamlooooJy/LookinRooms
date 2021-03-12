import React, { useEffect } from 'react';
import logo from './assets/logo.svg';
import { ReduxTest } from './components/ReduxText';


function App() {
	useEffect(() => {
		console.log('created app');
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={ logo } className="App-logo" alt="logo"/>
				<p>env { process.env.REACT_APP_NOT_SECRET_CODE }</p>
			</header>
			<main>
				<ReduxTest />
			</main>
		</div>
	);
}

export default App;
