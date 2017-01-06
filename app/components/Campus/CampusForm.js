import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


import { createCampus, updateCampus } from '../../reducers/campus'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class CampusForm extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			name: '',
			image: ''
		};
		this.formType = props.location.pathname.split('/').pop();
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	updateForm(){
		const { campus } = this.props;
		if(this.formType === 'edit'){
			if(this.state.name === "") this.setState({ name: campus.name })
			if(this.state.image === "") this.setState({ image: campus.image })	
		}
	}


	componentWillUpdate() {		
		// console.log('component will update')
		this.updateForm()		
	}

	componentDidMount() {
		// console.log('component did mount')
		this.updateForm()
	}

	render() {
		const { campus } = this.props;
		return (
			<Grid id="campus-form-wrapper">				
		    <Row className="show-grid">		            	
					<Col xs={12} md={8} mdOffset={2}>
						<h1>{
							this.formType === 'add' ? 'Create new campus' : `Edit`
						}</h1>
						<form  onSubmit={this.onSubmit}>
							<TextField
								id="name" name="name"
								value={this.state.name}
					      hintText="Type campus name"
					      floatingLabelText="Campus name" floatingLabelFixed={true}
					      fullWidth={true}
					      onChange={this.onChange}
					    />
					    <TextField
								id="image" name="image"
								value={this.state.image}
					      hintText="Type image url"
					      floatingLabelText="Image URL" floatingLabelFixed={true}
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

	onChange(event, value){		
		const newState = {}
		newState[event.target.name] = value
		this.setState(newState)
	}

	onSubmit(event) {
		event.preventDefault()

		
		const submitData = {
			name: event.target.name.value,
			image: event.target.image.value
		}
		console.log('submit', submitData)

		switch(this.formType) {
	
	  	case 'add':
	  		const { createCampus } = this.props;
	  		createCampus(submitData);
	  		browserHistory.push('/campus')
	  		break;

	    case 'edit':
	    	const { updateCampus, campus } = this.props;	      
	    	updateCampus(campus.id, submitData);
	      browserHistory.push(`/campus/${campus.id}`)	      
	      break;
	  }
	}

}

const mapState = ({ campuses, students }, ownProps) => {	
	console.log('ownProps', ownProps)
  const id = Number(ownProps.params.campusId);
  const campus = _.find(campuses, campus => campus.id === id) || {
			name: '',
			image: ''
		};

  return { campus }
}


const mapDispatch = { createCampus, updateCampus }

export default connect(mapState, mapDispatch)(CampusForm)