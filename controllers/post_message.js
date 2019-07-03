
const db_message = require('../models/message')

module.exports = (req, res) => {

	db_message.create(req.body).then((data)=> {
		res.send(res)
	}).catch((err) => {
		res.send(er)
	})
}
