'use strict'
const api = require('express').Router()
const Campus = require('../../db/models').Campus;

api.get('/', (req, res, next)=>{

	Campus.findAll()
		.then(allCapuses=>{
			res.json(allCapuses)
		})		
		.catch(next)	
})

api.get('/:campusId', (req, res, next)=>{

	Campus.findById(req.params.campusId)
		.then(campus=>{
			res.json(campus)
		})
		.catch(next)
})

api.post('/', (req, res, next)=>{

	Campus.create(req.body)
		.then(createCampus=>{
			res.json(createCampus)
		})
})

api.put('/:campusId', (req, res, next)=>{
	Campus.update(req.body,{
		where:{
			id: req.params.campusId
		},
		returning: true
	})
	.then(data=>data[1])
	.then(updatedCampus=>{
		res.json(updatedCampus)
	})
	.catch(next)
})

api.delete('/:campusId', (req, res, next)=>{
	Campus.destroy({
		where: {
			id: req.params.campusId
		}
	}).then(deleted=>{
		console.log(deleted)
	})
})
module.exports = api