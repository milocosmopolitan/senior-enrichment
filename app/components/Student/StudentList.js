import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { createStudent } from '../../reducers/student'

import { Grid, Row, Col } from 'react-bootstrap';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
	FloatingActionButton: {
		position: 'absolute',
		right: 0,
		marginRight: 20,				
		top: 44,
		zIndex: 1500
	}
}

class StudentList extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		const { students } = this.props

		console.log('props', this.props)
		return (
			<Grid id="student-list">
				<Link to="/students/add">
		    	<FloatingActionButton mini={true} secondary={true} style={style.FloatingActionButton}>
		      	<ContentAdd />
		    	</FloatingActionButton>
	    	</Link>
	    	<Row className="show-grid">
	    	</Row>
				<Row className="show-grid">
					<Col xs={12}>
						<List>
							<Subheader>Students</Subheader>
							{
								students.length ?
									students.map(student=>{
										return ( 
											<ListItem
												key={student.id}		
												primaryText={student.name}
												secondaryText={student.email}
									      leftAvatar={<Avatar>{student.name}</Avatar>}
									    />
									  )
									}) : null
							}
						</List>
					</Col>
				</Row>
			</Grid>			
			)
	}
}


/* -----------------    CONTAINER     ------------------ */
 
const mapState = ({ students }, ownProps ) => {

	console.log('ownProps', ownProps)
	const campusId = Number(ownProps.campusId);

	function filterByCampusId(student) {				
  	return !campusId ? true : student.campusId === campusId
	}

	// const filterStudents = students.filter(student)

	return { students: students.filter(filterByCampusId) }
};

const mapDispatch = { createStudent }

export default connect(mapState, mapDispatch)(StudentList);

