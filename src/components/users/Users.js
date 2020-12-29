import React, { Fragment, useContext } from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
// import notResultImg from './no_result.png';
import welcomeImg from './welcome_img.webp';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);

	const { loading, users } = githubContext;

	if (loading) {
		return <Spinner />;
	} else if (users.length === 0) {
		return (
			<Fragment>
				<img src={welcomeImg} alt='Loading...' style={imgStyle} />
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

// else if (searchText === '') {
// 	return (
// 		<Fragment>
// 			<img src={welcomeImg} alt='Welcome...' style={imgStyle} />
// 		</Fragment>
// 	);
// }
