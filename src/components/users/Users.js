import React, { Fragment, useContext } from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import notResultImg from './no_result.png';
import welcomeImg from './welcome_img.webp';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);

	const { loading, users, searchText } = githubContext;

	if (loading) {
		// is fetching the data
		return <Spinner />;
	} else if (users.length === 0 && searchText !== '') {
		// no user data found
		return (
			<Fragment>
				<img src={notResultImg} alt='Loading...' style={imgStyle} />
			</Fragment>
		);
	} else if (users.length > 0) {
		// Users Data found
		return (
			<Fragment>
				<div style={userStyle}>{users.map((user) => <Useritem key={user.id} user={user} />)}</div>
			</Fragment>
		);
	} else {
		// default page
		return (
			<Fragment>
				<img src={welcomeImg} alt='Loading...' style={imgStyle} />
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
