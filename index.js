// Config

const express = require('express')
const path = require('path')
const app = express()

// API


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
