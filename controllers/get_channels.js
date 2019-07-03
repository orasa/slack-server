
const db_channel = require('../models/channels')

module.exports = (reg, res) => {

	db_channel.find({}).then((data)=> {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
