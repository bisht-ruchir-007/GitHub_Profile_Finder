import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';

//class based component
class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null
	};

	// lifecycle methods - render() , componentDidMount() etc...
	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	// fetching the data from GITHUB - API
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?
	// 		 client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
	// 		 &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);
	// 	// target / response data ----- res.data
	// 	this.setState({ users: res.data, loading: false });
	// 	//console.log(res.data);
	// }

	// Search Github Users
	searchUsers = async (username) => {
		this.setState({ users: [], loading: true, alert: null });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${username}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// target / response data ---- res.data.items
		// console.log(res.data.items);
		this.setState({ users: res.data.items, loading: false, alert: null });
	};

	// clearUsers function
	clearUsers = () => {
		this.setState({ users: [], loading: false, alert: null });
	};

	//send alert message
	sendAlert = (msg, type) => {
		this.setState({ users: [], loading: false, alert: { msg, type } });
		//setTimeout(() => this.setState({ alert: null }), 5000);
	};

	render() {
		const { loading, users } = this.state;
		return (
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							{/* Home Route */}
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											sendAlert={this.sendAlert}
											showClear={users.length > 0 ? true : false}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							{/* About Project Route */}
							<Route
								exact
								path='/about'
								render={(props) => (
									<Fragment>
										<About />
									</Fragment>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
