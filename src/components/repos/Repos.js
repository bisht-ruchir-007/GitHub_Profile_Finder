import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

function Repos({ repos }) {
	return (
		<Fragment>
			<h1 className='text-center'>Lastest Top-5 public Repos</h1>
			{repos.map((repo) => <RepoItem repo={repo} key={repo.id} />)}
		</Fragment>
	);
}

Repos.propTypes = {
	repos: PropTypes.array.isRequired
};
export default Repos;
