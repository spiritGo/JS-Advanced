const http = require('http');
const urlModule = require('url');
const server = http.createServer();

server.on('request',function(req,res){
//	const url = req.url;
	console.log(req.url)
	const {pathname:url,query} = urlModule.parse(req.url,true);
	if (url === '/getscript'){
//		var scriptstr = 'show()';
		var data = {
			name:'tom',
			age:18,
			gender:'男孩纸'
		}
		var scriptstr = `${query.callback}(${JSON.stringify(data)})`;
		res.end(scriptstr)
	}else{
		res.end('404');
	}

});

server.listen(3000,function(){
	console.log('server listen at http://127.0.0.1:3000');
});