import React from 'react';
import notFoundImg from './notfound.jpg';
const NotFound = () => {
	return (
		<div>
			<img src={notFoundImg} alt='Loading...' style={imgStyle} />
		</div>
	);
};

const imgStyle = {
	width: '95%',
	margin: 'auto',
	paddingTop: '10%',
	display: 'block'
};

export default NotFound;
