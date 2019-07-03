// Config

const express = require('express')
// const path = require('path')
// require('doteenv').congig()
const app = express()
const bodyParser = require('body-parser') // allow us to

require('./db')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//


app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))
app.get('/api/channels', require('./controllers/get_channels'))

app.post('/api/channels', require('./controllers/post_channel'))


// Static Files

// // serve every file inside 'client' folder as static
// app.use(express.static(path.join(__dirname, 'client')))
//
// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/client/products.html'))
// 	console.log('__dirname', __dirname)
// })

// Run Server

app.listen(4000, () => {
	console.log('Server listening on port 4000');
})
