import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
//class based component
class App extends Component {
	state = {
		users: [],
		loading: false
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
		this.setState({ users: [], loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${username}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// target / response data ---- res.data.items
		console.log(res.data.items);
		this.setState({ users: res.data.items, loading: false });
	};

	// clearUsers function
	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	render() {
		const { loading, users } = this.state;
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
