import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { browserHistory } from 'react-router';
import _ from 'lodash';


import { createCampus } from '../../reducers/campus'

class CampusList extends Component {
	constructor(props){
		super(props)
	}

	selectCampus(event, id){		
		event.preventDefault();
		browserHistory.push(`/campus/${id}`)
	}

	render(){		
		const { students, campuses } = this.props;
		if (!campuses.length) return <div></div>
		return (
			<Grid id="campus-list">
		    <Row className="show-grid">		      
      		{							
						campuses.map(campus=>{
							return ( 
								<Col xs={12} md={4}>
									<Card key={campus.id} 
										onClick={(e) => this.selectCampus(e, campus.id)}>									
							    	<CardMedia overlay={<CardTitle title={campus.name} />}>
							      	<img src={campus.image} />
							    	</CardMedia>    						    
								  </Card> 
							  </Col>
						  )
						})
					}
		    </Row>
	    </Grid>			
			)
	}
}

/* -----------------    CONTAINER     ------------------ */
 
const mapState = ({ students, campuses }) => ({ students, campuses });

const mapDispatch = { createCampus }

export default connect(mapState, mapDispatch)(CampusList);



	