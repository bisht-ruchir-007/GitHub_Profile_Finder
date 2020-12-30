import React, { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<h1>About this app</h1>
			<h2>App to search Github Users</h2>
			<br />
			<h3>Version 1.0.0</h3>
			<br />
			<p>
				<strong>Docs for the Github API : </strong>
				<a href='https://developer.github.com/v3/'>Docs</a>
				<br />
				<br />
				<strong>To Register Your Github App & Get Keys : </strong>
				<a href='https://github.com/settings/applications/new'>Register</a>
				<br />
				<br />
				<strong>API Endpoints We Will Be Working With:</strong>
				<br />
				<br />
				<p>
					https://api.github.com/users https://api.github.com/search/users?q=john <br />
					<br />
					https://api.github.com/users/john_doe <br />
					<br />
					https://api.github.com/users/john_deo/repos <br />
					<br />
				</p>
			</p>
		</Fragment>
	);
};

export default About;
