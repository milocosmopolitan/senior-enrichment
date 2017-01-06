import axios from 'axios';
import _ from 'lodash'

/* -----------------    ACTIONS     ------------------ */
const INITIALIZE = 'INITIALIZE_CAMPUSES';
const CREATE     = 'CREATE_CAMPUS';
const REMOVE     = 'REMOVE_CAMPUS';
const UPDATE     = 'UPDATE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */
const init = campuses => ({ type: INITIALIZE, campuses })
const create = campus => ({ type: CREATE, campus })
const remove = id => ({ type: REMOVE, id })
const update = campus => ({ type: UPDATE, campus })

const campusReducer = function(campuses = [], action) {
	
  switch(action.type) {
	
  	case INITIALIZE:
  		return action.campuses

    case CREATE:
      return [action.campus, ...campuses]

    case UPDATE:
      return campuses
        .map(campus => (
          action.campus.id === campus.id ? action.campus : campus
        ));

    case REMOVE:
      return campuses
        .filter(campus => campus.id !== action.id);

    default: 
    	return campuses
  }

};

export default campusReducer;

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res=>res.data)
    .then(campuses=>{
      dispatch(init(campuses))
    })
}

export const removeCampus = id => dispatch => {
  axios.delete(`/api/campuses/${id}`)
      .then(res => dispatch(remove(id)))
      .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
  
}

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
      .then(res => dispatch(update(res.data)))
      .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
}

export const createCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
}