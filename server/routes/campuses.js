'use strict'
const api = require('express').Router()
const Campus = require('../../db/models').Campus;


api.param('campusId', function (req, res, next, id) {
  Campus.findById(id)
  .then(function (campus) {
    if (!campus) throw Error(404);
    req.campus = campus;
    next();
  })
  .catch(next);
});


api.get('/', (req, res, next)=>{
	Campus.findAll()
		.then(allCapuses=>{
			res.json(allCapuses)
		})		
		.catch(next)	
})

api.get('/:campusId', (req, res, next)=>{
	res.json(req.campus)
	// Campus.findById(req.params.campusId)
	// 	.then(campus=>{
	// 		res.json(campus)
	// 	})
	// 	.catch(next)
})

api.post('/', (req, res, next)=>{

	Campus.create(req.body)
		.then(createCampus=>{
			res.json(createCampus)
		})
})




api.put('/:campusId', (req, res, next)=>{
	req.campus.update(req.body)
	  .then(function (campus) {
	    return campus.reload();
	  })
	  .then(function (campus) {
	    res.json(campus);
	  })
	  .catch(next);
})

api.delete('/:campusId', (req, res, next)=>{
	req.campus.destroy()
		.then(function () {
	    res.status(204).end();
	  })
	  .catch(next);
})
module.exports = api