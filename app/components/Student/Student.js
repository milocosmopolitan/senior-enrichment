import React, { Component } from 'react';

const Student = (props) => {
	
	return (
		<div>			
				<h1>{props.selectedStudent.name}</h1>
				<h2>{props.selectedStudent.email}</h2>
		</div>
		)
}

export default Campus;