import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, sendAlert, searchUsers }) => {
	const [ username, setUserName ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (username === '') {
			sendAlert('Please enter a username', 'light');
		} else {
			searchUsers(username);
			setUserName('');
		}
	};

	const onChange = (e) => setUserName(e.target.value);

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input type='text' name='username' placeholder='Enter username ' value={username} onChange={onChange} />
				<input type='submit' value='Search' className='btn btn-primary btn-block' />
			</form>
			{showClear && (
				<button className='btn btn-dark btn-block' onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	sendAlert: PropTypes.func.isRequired
};

export default Search;
