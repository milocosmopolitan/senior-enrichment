import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_STUDENTS';
const CREATE = 'CREATE_STUDENT';
const REMOVE = 'REMOVE_STUDENT';
const UPDATE = 'UPDATE_STUDENT';

const init = students => ({ type: INITIALIZE, students })
const create = student => ({ type: CREATE, student });
const remove = id => ({ type: REMOVE, id });
const update = student => ({ type: UPDATE, student });

const studentReducer = function(students = [], action) {

    switch (action.type) {

        case INITIALIZE:
            return action.students;

        case CREATE:
            return [action.student, ...students]

        default:
            return students;
    }
};

export default studentReducer;

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            dispatch(init(students))
        })
}

export const removeStudent = id => dispatch => {

}

export const updateStudent = (id, student) => dispatch => {

}

export const createStudent = student => dispatch => {
    axios.post('/api/students', student)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
}
