'use strict'
const api = require('express').Router()
const Student = require('../../db/models').Student;

api.get('/', (req, res, next)=>{

	Student.findAll()
		.then(allStudents=>{
			res.json(allStudents)
		})	
		.catch(next)	
})

api.get('/:studentId', (req, res, next)=>{

	Student.findById(req.params.studentId)
		.then(Student=>{
			res.json(Student)
		})	
		.catch(next)
})

api.post('/', (req, res, next)=>{

	Student.create(req.body)
		.then(createStudent=>{
			res.json(createStudent)
		})
})

api.put('/:studentId', (req, res, next)=>{
	Student.update(req.body,{
		where:{
			id: req.params.studentId
		},
		returning: true
	})
	.then(data=>data[1])
	.then(updatedStudent=>{
		res.json(updatedStudent)
	})
	.catch(next)
})

api.delete('/:studentId', (req, res, next)=>{
	Student.destroy({
		where: {
			id: req.params.studentId
		}
	}).then(deleted=>{
		if(!deleted) res.send('Delete unsuccessful')
		res.send('Delete Successful')
	})
})
module.exports = api