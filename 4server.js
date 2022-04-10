const http	= 	require('http');
const server = http.createServer((req,rest)	=> {
	console.log('request event');
	rest.end('Hello World');
});
server.listen(5000, ()=>{
	console.log('Server is listining on port: 5000.....');
});