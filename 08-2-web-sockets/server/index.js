const { Server } = require("ws");
const { createServer } = require("http");

const server = createServer();

const wss = new Server({ server });

wss.on("connection", (ws) => {
    console.log("New client connected");

    ws.on("message", (message) => {
        console.log('Received:', message);
        const data = message.toString();

        wss.clients.forEach((client) => {
            client.send(data);
            console.log(`Sent: ${data}`);
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

server.listen(8082, () => {
    console.log("WebSocket Server connected to port 8082");
});

// Do not remove this export. wss should be the name of you WebSocket Server instance
module.exports = wss;
