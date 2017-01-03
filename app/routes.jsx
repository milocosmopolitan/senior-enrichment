import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

/* Component */
import Root from './components/Root'
import CampusList from './components/Campus/CampusList'
import CampusDetail from './components/Campus/Campus'
import StudentList from './components/Student/StudentList'

/* Reducer */
import { fetchCampuses } from './reducers/campus'
import { fetchStudents } from './reducers/student'

const Routes = ({ fetchInitialData }) =>    (	
  <Router history={browserHistory}>
  	<Route path="/" component={Root} onEnter={fetchInitialData}>
  		<IndexRoute component={CampusList}/>
  		<Route path="/campus" component={CampusList} />
  		<Route path="/campus/:campusId" component={CampusDetail} />
  		<Route path="/students" component={StudentList} />
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
