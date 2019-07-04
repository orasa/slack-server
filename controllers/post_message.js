
const db_message = require('../models/message')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
	jwt.verify(req.body.token, process.env.SECRET), (err, decoded) => {
		if (decoded) {
			console.log(decoded);
			reg.body.author = decoded._id //

		}
	}

	db_message.create(req.body).then((data)=> {
		res.send(res)
	}).catch((err) => {
		res.send(err)
	})
}
