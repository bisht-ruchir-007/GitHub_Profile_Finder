import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ getUserProfile, getUserRepos, user, loading, repos, match }) => {
	useEffect(() => {
		getUserProfile(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);

	const {
		name,
		login,
		avatar_url,
		location,
		bio,
		blog,
		company,
		followers,
		following,
		html_url,
		public_gists,
		public_repos,
		hireable
	} = user;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				<Link to='/' className='btn btn-dark'>
					Back To Search
				</Link>
				Hireable: {' '}
				{hireable ? (
					<i className='fas fa-check text-success' />
				) : (
					<i className='fas fa-times-circle text-danger' />
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img src={avatar_url} className='round-img' alt='' style={{ width: '50%' }} />
						<h1>{name}</h1>
						<p>Location : {location}</p>
					</div>
					<div className='all-center'>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className='btn btn-success my-1'>
							Github Profile
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username : </strong> {login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company : </strong> {company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website : </strong> {blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-success'>Followers : {followers}</div>
					<div className='badge badge-success'>Following : {following}</div>
					<div className='badge badge-dark'>Public Repos : {public_repos}</div>
					<div className='badge badge-dark'>Public Gists : {public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
	}
};

User.propTypes = {
	loading: PropTypes.bool.isRequired,
	user: PropTypes.object.isRequired,
	repos: PropTypes.array.isRequired,
	getUserProfile: PropTypes.func.isRequired,
	getUserRepos: PropTypes.func.isRequired
};

export default User;
