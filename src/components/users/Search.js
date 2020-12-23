import React, { Component } from 'react';

export class Search extends Component {
	state = {
		username: ''
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.username);
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div>
				<form className='form' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='username'
						placeholder='Enter username '
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input type='submit' value='Search' className='btn btn-primary btn-block' />
				</form>
			</div>
		);
	}
}

export default Search;
