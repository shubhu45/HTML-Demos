const WebSocket = require('ws')

const ws = new WebSocket.Server({port:8083})

ws.on('connection', websocket => {
    console.log("Websocket connection was established successfully 😊", websocket)

    ws.on('close', () => {
        console.log("Client has disconnected 😢")
    })
})