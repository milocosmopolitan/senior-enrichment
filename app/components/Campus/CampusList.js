import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardMedia, CardTitle, CardActions } from 'material-ui/Card';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton 		from 'material-ui/FlatButton';
import IconButton 		from 'material-ui/IconButton';
import ContentAdd 		from 'material-ui/svg-icons/content/add';
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentRemove from 'material-ui/svg-icons/navigation/close';

import { removeCampus } from '../../reducers/campus'

const style = {
	FloatingActionButton: {
		position: 'absolute',
		right: 0,
		marginRight: 20,				
		top: 44,
		zIndex: 1500		
	},
	Card: {
		marginTop: 10,
		marginBottom: 10
	},
	CardActions: {
		position: 'relative',
		top: -82,
    float: 'right',
    height: 50,
		paddingTop: 0
	},
	CardTitle: {
		height: 50,
		fontSize: 18
	}
};

class CampusList extends Component {
	constructor(props){
		super(props)
		this.removeOnClick = this.removeOnClick.bind(this);
		this.editOnClick = this.editOnClick.bind(this);
	}

	removeOnClick(event, id){
		event.preventDefault();		
		console.log('removeOnClick', id)
		this.props.removeCampus(id)
		
	}

	editOnClick(event, id){		
		event.preventDefault();
		console.log(event.target, id)
		browserHistory.push(`/campus/${id}/edit`)
	}

	render(){		
		const { students, campuses } = this.props;
		if (!campuses.length) return <div></div>
		return (
			<Grid id="campus-list">
		    <Link to="/campus/add">
		    	<FloatingActionButton mini={true} secondary={true} style={style.FloatingActionButton}>
		      	<ContentAdd />
		    	</FloatingActionButton>
	    	</Link>
		    <Row className="show-grid">		      
      		{							
						campuses.map(campus=>{
							return ( 
								<Col xs={12} md={4} key={campus.id}>									
									<Card style={style.Card}>
										<Link to={`/campus/${campus.id}`}>
								    	<CardMedia overlay={
								    		<CardTitle title={campus.name} 
								    			style={style.CardTitle}
								    			titleStyle={{fontSize: 18, lineHeight: '18px'}}
							    			/>
						    			}>
								      	<img src={campus.image || 'http://placehold.it/360x224'} />
								    	</CardMedia>
							    	</Link>
							    	<CardActions style={style.CardActions}>
							    		<IconButton onClick={(e)=>{this.editOnClick(e, campus.id)}}>
							    			<ContentEdit />
							    		</IconButton>
							    		<IconButton onClick={(e)=>{this.removeOnClick(e, campus.id)}}>
							    			<ContentRemove />
							    		</IconButton>
								    </CardActions>
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

const mapDispatch = { removeCampus }

export default connect(mapState, mapDispatch)(CampusList);



	