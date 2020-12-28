import React, { Fragment } from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import notResultImg from './no_result.png';
import welcomeImg from './welcome_img.webp';

const Users = ({ users, loading, searchText }) => {
	if (loading) {
		return <Spinner />;
	} else if (users.length === 0 && searchText !== '') {
		return (
			<Fragment>
				<img src={notResultImg} alt='Loading...' style={imgStyle} />
			</Fragment>
		);
	} else if (searchText === '') {
		return (
			<Fragment>
				<img src={welcomeImg} alt='Welcome...' style={imgStyle} />
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div style={userStyle}>{users.map((user) => <Useritem key={user.id} user={user} />)}</div>
			</Fragment>
		);
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridGap: '1 rem'
};
const imgStyle = {
	width: '40%',
	margin: 'auto',
	paddingTop: '10%',
	display: 'block'
};
export default Users;
