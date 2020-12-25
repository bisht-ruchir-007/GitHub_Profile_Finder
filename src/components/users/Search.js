import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		username: ''
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		sendAlert: PropTypes.func.isRequired
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.username === '') {
			this.props.sendAlert('Please enter a username', 'light');
		} else {
			this.props.searchUsers(this.state.username);
			this.setState({ username: '' });
		}
		//console.log(this.state.username);
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { showClear, clearUsers } = this.props;
		return (
			<div>
				<form className='form' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='username'
						placeholder='Enter username '
						value={this.state.username}
						onChange={this.onChange}
					/>
					<input type='submit' value='Search' className='btn btn-primary btn-block' />
				</form>
				{showClear && (
					<button className='btn btn-dark btn-block' onClick={clearUsers}>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;
