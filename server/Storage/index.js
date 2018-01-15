var fs = require('fs')
	path = require('path')
	
module.exports = {
	
	saveData: function(datatype, newData, data){
		var dataPath = datatype == 'users' ? __dirname + path.join('/data/users.json'):
			__dirname + path.join('/data/messages.json')
		data.current.push(newData)
		return new promise(function (resolver, reject){
			fs.writeFile(dataPath, JSON.stringfy(data),function(err){
				if(err) reject(err)
					resolve('OK')
			})
		})
	},
	
	getData: function(datatype){
		var dataPath = datatype == 'users' ?
			__dirname + path.join('/data/users.json'):
			__dirname + path.join('/data/messages.json')
			
		return new promise(function(resolve, reject){
			fs.readFile(dataPath, 'utf8', function(){
				if(err) reject(err)
				resolve(JSON.parse(readData))
			})
		})
			
	}
}