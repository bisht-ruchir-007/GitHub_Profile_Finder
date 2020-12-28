import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

import axios from 'axios';

//class based component
class App extends Component {
	state = {
		users: [],
		user: {},
		repos: [],
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

	// get profile of single/particular user
	getUserProfile = async (username) => {
		this.setState({ loading: true, alert: null });

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ user: res.data, loading: false });
	};

	// get user Repos
	getuserRepos = async (username) => {
		this.setState({ loading: true, alert: null });

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ repos: res.data, loading: false });
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
		const { loading, users, user, repos } = this.state;
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
							{/* User Route */}
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<Fragment>
										<User
											{...props}
											getUserProfile={this.getUserProfile}
											getUserRepos={this.getuserRepos}
											user={user}
											repos={repos}
											loading={loading}
										/>
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
