const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our HP')
    }
    if(req.url === '/about'){
        res.end('ya w ahue realno rabotaet about')
    }
    res.end('<h1>Huy v sraku</h1>');
});

server.listen(5000);
