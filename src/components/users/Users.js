import React, { Fragment } from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
// import notResultImg from './no_result.png';

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				<div style={userStyle}>{users.map((user) => <Useritem key={user.id} user={user} />)}</div>
			</Fragment>
		);

		// return (
		// 	<Fragment>
		// 		<img src={notResultImg} alt='Loading...' style={imgStyle} />
		// 	</Fragment>
		// );
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
// const imgStyle = {
// 	width: '40%',
// 	margin: 'auto',
// 	paddingTop: '10%',
// 	display: 'block'
// };
export default Users;
