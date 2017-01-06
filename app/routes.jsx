import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

/* Component */
import Root from './components/Root';
import CampusList from './components/Campus/CampusList';
import CampusDetail from './components/Campus/Campus';
import CampusForm from './components/Campus/CampusForm';

import StudentList from './components/Student/StudentList';
import StudentDetail from './components/Student/Student';
import StudentForm from './components/Student/StudentForm';

/* Reducer */
import { fetchCampuses } from './reducers/campus'
import { fetchStudents } from './reducers/student'

const Routes = ({ fetchInitialData }) =>    (	
  <Router history={browserHistory}>
  	<Route path="/" component={Root} onEnter={fetchInitialData}>
  		<IndexRoute component={CampusList}/>
  		<Route path="/campus" component={CampusList} />
      <Route path="/campus/add" component={CampusForm} />
  		<Route path="/campus/:campusId" component={CampusDetail} />
      <Route path="/campus/:campusId/edit" component={CampusForm} />
  		<Route path="/students" component={StudentList} />
      <Route path="/students/add" component={StudentForm} />
      <Route path="/students/:studentId" component={StudentDetail} />      
  	</Route>
  </Router>
)

const mapProps = null;

const mapDispatch = dispatch => ({
 fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
    // what other data might we want to fetch on app load?
  }
});

export default connect(mapProps, mapDispatch)(Routes);
