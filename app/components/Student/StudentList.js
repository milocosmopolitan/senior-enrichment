import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { createStudent } from '../../reducers/student'

class StudentList extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		const { students } = this.props

		console.log('props', this.props)
		return (
			<List>
				{
					students.length ?
						students.map(student=>{
							return ( 
								<ListItem
									key={student.id}
						      disabled={true}
						      leftAvatar={<Avatar>{student.name}</Avatar>}
						    >
						      {student.name}
						    </ListItem>
						  )
						}) : null
				}
			</List>
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

