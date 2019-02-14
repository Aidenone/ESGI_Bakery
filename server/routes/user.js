const express = require('express');
const User = require('../models/user');

const router = express.Router();

// research with get params
router.get('/', function(req, res){
	User.find(req.query).then(data => res.send(data))
	.catch(data => rend.sendStatus(400));
});

// subscribe user
router.post('/', function(req, res) {
	const user = new User(req.body);

	user.save(function(error, result){
		if(error) {
			console.log(error);
			res.sendStatus(400);
		}
		res.sendStatus(201);
	});
});

// update user
router.put('/:user_id', function(req, res) {
	User.update({_id: req.params.user_id}, req.body).then(data => data ? res.status(201).send(data) : rend.sendStatus(404))
	.catch(data => rend.sendStatus(400));
});

//delete user
router.delete('/:user_id', function (req, res) {
  User.remove({_id: req.params.user_id}).then(data => data ? res.status(201).send(data) : rend.sendStatus(404))
	.catch(data => rend.sendStatus(400));
});

module.exports = router;