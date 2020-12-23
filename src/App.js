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
	async componentDidMount() {
		this.setState({ loading: true });
		// fetching the data from GITHUB - API
		const res = await axios.get(
			`https://api.github.com/users?
			 client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
			 &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data, loading: false });
		//console.log(res.data);
	}

	render() {
		const { loading, users } = this.state;
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Search />
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
