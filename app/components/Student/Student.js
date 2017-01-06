import React from 'react';
import { connect } from 'react-redux';

const StudentDetail = (props) => {
	
	const { student } = props;
	if (!student) return <div></div>
	return (
		<div>			
				<h1>{student.name}</h1>
				<h2>{student.email}</h2>
		</div>
		)
}


const mapState = ({ students }, ownProps) => {
	const id = Number(ownProps.params.studentId);
	const student = _.find(students, student => student.id === id);
	return { student }
}
const mapDispatch = null

export default connect(mapState, mapDispatch)(StudentDetail);