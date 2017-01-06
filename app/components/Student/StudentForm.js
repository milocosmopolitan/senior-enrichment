import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import _ from 'lodash';

import { Grid, Row, Col } from 'react-bootstrap';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedBUtton';

import { createStudent, updateStudent } from '../../reducers/student';

class StudentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: ''
		};
		this.formType = props.location.pathname.split('/');
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	updateForm(){

	}

	onSubmit(event){
		event.preventDefault();

	}
	onChange(event, value){

	}
	render(){

		// consider implementing react-form for validation of each input box, also check if it works with material-ui
		return (
				<Grid id="student-form-wrapper">
					<Row className="show-grid">
						<Col xs={12} md={8} mdOffset={2}>
							<form onSubmit={this.onSubmit}>
								<TextField
									id="name" name="name"
									value={this.state.name}
									hintText="Type student name"
									floatingLabelText="Student name"
									floatingLabelFixed={true}
									fullWidth={true}
									onChange={this.onChange}
								/>
								<TextField
									id="email" name="email"
									value={this.state.email}
									hintText="Type student name"
									floatingLabelText="Student name"
									floatingLabelFixed={true}
									fullWidth={true}
									onChange={this.onChange}
								/>
								<RaisedButton
									type="submit"
									label="Submit"
									primary={true}
									fullWidth={true}
								/>
							</form>
						</Col>
					</Row>				
				</Grid>
			)
	}
}

const mapState = ({ campuses, students }, ownProps) => {
	const id = Number(ownProps.params.studentId);
	const student = _.find(students, student => student.id === id) || {
		name: '',
		email: ''
	}
	return { student }
}

const mapDispatch = { createStudent, updateStudent }

export default connect(mapState, mapDispatch)(StudentForm)