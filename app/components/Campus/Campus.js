import React, { Component } from 'react';
import { connect } from'react-redux';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';
import { updateCampus } from '../../reducers/campus'
import StudentList from '../Student/StudentList'

/* -----------------    COMPONENT     ------------------ */

class CampusDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {students, campus} = this.props;

    console.log(this.props)
    if (!campus) return <div></div> // the story id is invalid or the data isnt loaded yet
    return (
      <Grid id="campus-detail">
		    <Row>
		      <Col xs={12} md={6} 
		      	className="campusInfo">
		      	<h1>{campus.name}</h1>
						<img src={campus.image} />
		      </Col>
		      <Col xs={12} md={6} 
		      	className="campusStudent">
		      	<StudentList students={students} campusId={campus.id}/>
		      </Col>
	      </Row>
	    </Grid>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ campuses, students }, ownProps) => {	
  const id = Number(ownProps.params.campusId);
  const campus = _.find(campuses, campus => campus.id === id);
  // const campusStudents = _.filter(students, student => student.campusId === id);

  return { campus, students }
}

const mapDispatch = { updateCampus }

export default connect(mapState, mapDispatch)(CampusDetail);