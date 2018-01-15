var express = require('express')
var path = require('path')
var Router = express.Router()

var viewPath = path.join(__dirname, '../')+ 'public/'

Router.get('/users', function(req, res){
	res.sendFile(viewPath + 'users.html')
	res.end
})

Router.get('/admin', function(req, res){
	res.sendFile(viewPath + 'admin.html')
	res.end
})

Router.get('/dashboard', function(req, res){
	res.sendFile(viewPath + 'dashboard.html')
	res.end
})

Router.all('/*', function(req, res){
	res.send('no se encontró el recurso')
	res.end
})

module.exports = Router

// Router.get('/users', function(req, res){
	// res.send('está en el módulo de users')
	// res.end
// })

// Router.get('/admin', function(req, res){
	// res.send('está en el módulo de admin')
	// res.end
// })

// Router.get('/dashboard', function(req, res){
	// res.send('está en el módulo de dashboard')
	// res.end
// })

// Router.all('/*', function(req, res){
	// res.send('no se encontró el recurso')
	// res.end
// })

// module.exports = Router
// var dispatcher = require('httpdispatcher')

// function handRequest(req, res){
	
	// dispatcher.onGet('/users',function(req, res){
		// res.writeHead(200, {'Content-type':'text/plain'})
		// res.end('está en el módulo de users')
	// })
	
	// dispatcher.onGet('/admin',function(req, res){
		// res.writeHead(200, {'Content-type':'text/plain'})
		// res.end('está en el módulo de admin')
	// })
	
	// dispatcher.onGet('/dashboard',function(req, res){
		// res.writeHead(200, {'Content-type':'text/plain'})
		// res.end('está en el módulo de dashboard')
	// })
	
	// dispatcher.onError('/users',function(req, res){
		// res.writeHead(400, {'Content-type':'text/plain'})
		// res.end('No encontro el recurso solicitado')
	// })
	
	// dispatcher.dispatch(req, res)
	
	// // var url = req.url
	// // switch(url){
		// // case '/users':
			// // res.end('está en el módulo de users')
			// // break;
		// // case '/admin':
			// // res.end('está en el módulo de admin')
			// // break;
		// // case '/dashboard':
			// // res.end('está en el módulo de dashboard')
			// // break;
		// // default:
			// // res.end('está en el módulo de dashboard')
			// // break;
	// // }
	
// }