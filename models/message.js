const db = require('../db')
const mongoose = require('mongoose')

//model is a fuction from moogoose
const db_message = db.model('message', {
	author: {
    type: String,
    require: true;
  },
	date: {
    type: Date,
    default: Date.now()
  },
	body: {type: String,
    require: [true, 'Message Body is required']

  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    equire: [true, 'Channel is required'],
    ref: 'channel' //
  }
  }
)

module.exports = db_message
//
