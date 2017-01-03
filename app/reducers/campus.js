import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */
const INITIALIZE = 'INITIALIZE_CAMPUSES';
const CREATE     = 'CREATE_CAMPUS';
const REMOVE     = 'REMOVE_CAMPUS';
const UPDATE     = 'UPDATE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */
const initCampuses = campuses => ({ type: INITIALIZE, campuses })

const campusReducer = function(campuses = [], action) {
	
  switch(action.type) {
	
  	case INITIALIZE:
  		return action.campuses

    default: 
    	return campuses
  }

};

export default campusReducer;

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res=>res.data)
    .then(campuses=>{
      dispatch(initCampuses(campuses))
    })
}

export const removeCampus = id => dispatch => {

}

export const updateCampus = (id, campus) => dispatch => {

}

export const createCampus = campus => dispatch => {

}