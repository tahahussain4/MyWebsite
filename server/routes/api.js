const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID =  require('mongodb').ObjectID;


const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017' , (err,client) => {
		if(err) return console.log(err);
		var db = client.db('mean');
		closure(db)
		client.close();
	});
};

const sendError = (err,response) => {
	response.status(501);
	respones.message = typeof err == 'object' ? err.message : err;
	res.status(501).json(response);
}

let response = {
	status : 200,
	data : [],
	message : null
};

router.get('/users',(req,res) => {
	console.log("getting users");

	connection((db) => {
			db
			.collection('users')
			.find()
			.toArray()
			.then((users) =>{
				response.data = users;	
				res.json(response);
			})
			.catch((err) => {
				db.sendError(err,res);
				
			});
	});
});

module.exports = router;