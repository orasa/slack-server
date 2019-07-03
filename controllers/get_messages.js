
const db_message = require('../models/message')

module.exports = (reg, res) => {

	db_message.find({}).then((data)=> {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
