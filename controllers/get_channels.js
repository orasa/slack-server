
const db_channel = require('../models/channels')

module.exports = (reg, res) => {

	//sort
	db_channel.find({}).sort('date').populate('channel').then((data)=> {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
