import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
	//since state consist of single state variable
	const initialState = null;

	const [ state, dispatch ] = useReducer(AlertReducer, initialState);

	// Set Alert
	//send alert message
	const setAlert = (msg, type) => {
		//setLoading(false);
		//setAlert({ msg, type });
		dispatch({ type: SET_ALERT, payload: { msg, type } });
		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 6000);
	};

	return (
		// new to add all the global state variables and functions to the
		// value object
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
