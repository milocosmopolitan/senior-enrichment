import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';
import { updateCampus } from '../../reducers/campus'
import StudentList from '../Student/StudentList'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';


const style = {
  FloatingActionButton: {
    position: 'absolute',
    right: 0,
    marginRight: 20,        
    top: 44,
    zIndex: 1500
  } 
};

/* -----------------    COMPONENT     ------------------ */

class CampusDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { students, campus } = this.props;
    // const id = Number(this.props.params.campusId);
    // const campus = _.find(campuses, campus => campus.id === id);

    console.log(this.props)
    if (!campus) return <div></div> // the story id is invalid or the data isnt loaded yet
    return (
      <Grid id="campus-detail">
        <Link to={`/campus/${campus.id}/edit`}>
          <FloatingActionButton mini={true} secondary={true} style={style.FloatingActionButton}>
            <EditorModeEdit />
          </FloatingActionButton>
        </Link>

        <h1>{campus.name}</h1>
		    <Row>
		      <Col xs={12} md={6} 
		      	className="campusInfo">
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

  return { campus, students }
}

const mapDispatch = { updateCampus }

export default connect(mapState, mapDispatch)(CampusDetail);