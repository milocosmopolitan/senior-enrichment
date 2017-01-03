import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_STUDENTS';
const CREATE     = 'CREATE_STUDENT';
const REMOVE     = 'REMOVE_STUDENT';
const UPDATE     = 'UPDATE_STUDENT';

const initStudents = students => ({ type: INITIALIZE, students })


const studentReducer = function(students = [], action) {	

  switch(action.type) {
	
  	case INITIALIZE:
      return action.students;

  	default:
      return students;
  }
};

export default studentReducer;

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res=>res.data)
    .then(students=>{
      dispatch(initStudents(students))
    })
}

export const removeStudent = id => dispatch => {

}

export const updateStudent = (id, student) => dispatch => {

}

export const createStudent = student => dispatch => {

}