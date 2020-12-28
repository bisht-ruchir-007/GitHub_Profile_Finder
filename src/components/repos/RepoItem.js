import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
	return (
		<div className='card'>
			<h2>
				<a href={repo.html_url}>{repo.name}</a>
				{repo.description && <p>{repo.description}</p>}
			</h2>
			<h4>
				{repo.language ? (
					<p>
						<strong>Language : </strong>
						{repo.language}
					</p>
				) : (
					<strong>Language : ----</strong>
				)}
			</h4>
		</div>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired
};
export default RepoItem;
