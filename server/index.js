var bodyParser = require('body-parser'),
	http = require('http'),
	express = require('express')

	chat = require('./Chat')

var port = port = process.env.PORT || 3000,
	app = express(),
	server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('./chat',chat)
app.use(express.static('public'))

server.listen(port, function(){
	console.log('El servidor esta corriendo en '  + port)
})

// var http = require('http')
// var express = require('express')
// var Routing = require('./requestRouting.js')

// var PORT = 8082
// var app = express()



// // function handleRequest(req, res){
	// // res.end('Funcionando correctamente, recurso pedido en ' + req.url)
// // }

// // var server = http.createServer(handleRequest)
// var server = http.createServer(app)

// app.use('/', Routing)
// server.listen(PORT, function(){
	// console.log('El servidor esta corriendo en '  + PORT)
// })

// // module.exports = handleRequest