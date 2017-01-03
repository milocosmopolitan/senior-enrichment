import { combineReducers } from 'redux';
import campuses from './campus';
import students from './student';

const reducers = {
	campuses,
	students
}

export default combineReducers(reducers)
