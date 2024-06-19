import {createServer} from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(500, {'Content-Type': 'text/html'});
    res.end('server is running');
});

server.listen(3000, '127.0.0.1', () =>{
console.log('server is listening');
});

//Arrow Fumnctions
function handleRequest() {}
const handleRequest = () => {}