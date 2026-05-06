import http from 'node:http';

function hello(req, res) {
    res.end("hello\n");
}

function headers(req, res) {
    for (const [name, value] of Object.entries(req.headers)) {
        res.write(`${name}: ${value}\n`);
    }
    res.end();
}

const server = http.createServer((req, res) => {
    if (req.url === '/hello') return hello(req, res);
    if (req.url === '/headers') return headers(req, res);
    res.writeHead(404);
    res.end();
});

server.listen(8090, async () => {
    const base = "http://localhost:8090";

    const r1 = await fetch(`${base}/hello`);
    console.log(await r1.text());

    const r2 = await fetch(`${base}/headers`);
    console.log(await r2.text());

    server.close();
});
