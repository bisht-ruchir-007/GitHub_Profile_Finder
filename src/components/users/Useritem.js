import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
	// state = {
	// 	id: 'id',
	// 	login: 'mojombo',
	// 	avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
	// 	url: 'https://github.com/mojombo'
	// };

	// const { login, avatar_url, url } = props.user; // can be destructured at function paramters
	return (
		<div className='card text-center'>
			<img src={avatar_url} alt={login} className='round-img' style={imgStyle} />
			<h3>{login}</h3>
			<div>
				<Link to={`/user/${login}`} className='btn btn-success btn-sm my-1'>
					profile link
				</Link>
			</div>
		</div>
	);
};

Useritem.propTypes = {
	user: PropTypes.object.isRequired
};

const imgStyle = { width: '40%' };

export default Useritem;
