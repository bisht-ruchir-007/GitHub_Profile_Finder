import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';

import GithubState from './context/github/GithubState';

//functional Component
const App = () => {
	const [ users, setUsers ] = useState([]);
	const [ user, setUser ] = useState({});
	const [ repos, setRepos ] = useState([]);
	const [ loading, setLoading ] = useState(false);
	const [ alert, setAlert ] = useState(null);
	const [ searchText, setSearchText ] = useState('');

	// Search Github Users
	const searchUsers = async (username) => {
		setUsers([]);
		setLoading(true);
		setAlert(null);
		setSearchText(username);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${username}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// target / response data ---- res.data.items
		// console.log(res.data.items);
		setUsers(res.data.items);
		setLoading(false);
	};

	// get profile of single/particular user
	const getUserProfile = async (username) => {
		setLoading(true);
		setAlert(null);

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		setUser(res.data);
		setLoading(false);
	};

	// get user Repos
	const getuserRepos = async (username) => {
		setLoading(true);
		setAlert(null);
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		setRepos(res.data);
		setLoading(false);
	};

	// clearUsers function
	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
		setAlert(null);
		setSearchText('');
	};

	//send alert message
	const sendAlert = (msg, type) => {
		setUsers([]);
		setLoading(false);
		setAlert({ msg, type });
		//setTimeout(() => this.setState({ alert: null }), 5000);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<Navbar />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							{/* Home Route */}
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={searchUsers}
											clearUsers={clearUsers}
											sendAlert={sendAlert}
											showClear={users.length > 0 ? true : false}
										/>
										<Users loading={loading} users={users} searchText={searchText} />
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
											getUserProfile={getUserProfile}
											getUserRepos={getuserRepos}
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
		</GithubState>
	);
};

export default App;
