const db = require('../db')

//model is a fuction from moogoose
const db_message = db.model('message', {
	author: {
    type: String,
    require: true;
  },
	date: Date,
	body: {type: String,
    require: [true, 'Message Body is required']

  }
  }
)

module.exports = db_message
//
