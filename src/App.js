import React, { Component, Fragment } from 'react';
import './App.css';

// function App() {
// 	return (
// 		<div className='App'>
// 			<h1>RUCHIR BISHT</h1>
// 		</div>
// 	);
// }

//class based component
class App extends Component {
	foo = (username) => {
		return 'Hello ' + username;
	};

	render() {
		const name = 'John Doe';
		const loading = false;
		const showName = false;
		return (
			<Fragment>
				<h1>Github Finder</h1>
				{loading ? <h4>Loading ... </h4> : <h3>{showName && this.foo(name)}</h3>}
			</Fragment>
		);
	}
}

export default App;
