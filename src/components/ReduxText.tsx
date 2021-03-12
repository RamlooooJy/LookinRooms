import { Button, Chip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import React from 'react';
import { store } from '../store/store';


export const ReduxTest: React.FC = () => {
	const state = store;
	return ( <>
		<div><Chip color="primary" deleteIcon={ <DoneIcon /> } label={ 'va' } /></div>
		<Button color={ 'secondary' } variant={ 'contained' }>Click me</Button>
	</> );
}
