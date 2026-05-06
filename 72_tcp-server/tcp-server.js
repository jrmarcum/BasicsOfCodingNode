import net from 'node:net';

const server = net.createServer((conn) => {
    let buf = '';
    conn.on('data', (chunk) => {
        buf += chunk.toString();
        if (buf.includes('\n')) {
            const msg = buf.trim();
            conn.write(`ACK: ${msg.toUpperCase()}\n`, () => conn.end());
        }
    });
});

server.listen(7777, () => {
    const client = new net.Socket();
    client.connect(7777, 'localhost', () => {
        client.write("hello\n");
        client.once('data', (data) => {
            process.stdout.write(data.toString());
            client.destroy();
            server.close();
        });
    });
});
