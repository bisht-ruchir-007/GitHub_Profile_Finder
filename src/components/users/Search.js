import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [ username, setUserName ] = useState('');
	const { setAlert } = alertContext;

	const onSubmit = (e) => {
		e.preventDefault();
		if (username === '') {
			setAlert('Please enter a username', 'light');
		} else {
			githubContext.searchUsers(username);
		}
	};

	const onChange = (e) => setUserName(e.target.value);

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input type='text' name='username' placeholder='Enter username ' value={username} onChange={onChange} />
				<input type='submit' value='Search' className='btn btn-primary btn-block' />
			</form>
			{githubContext.users.length > 0 && (
				<button className='btn btn-dark btn-block' onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
