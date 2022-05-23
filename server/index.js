const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require("socket.io");


app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET','POST'],
    },
});

io.on('connection', (socket) => {
    // when a user joins the chat, we emit a message to the client //
    console.log("user Connected", socket.id);

    socket.on('join_chat', (data) => {
        socket.join(data);
        console.log("user Joined", socket.id, 'Room ', data); 
    });

    //when user send message
    socket.on("send_message", (data) => {
        socket.to(data.room).emit('recieved', data) 
    })
    // when a user leaves the chat, we emit a message to the client //
    socket.on('disconnect', () => {
        console.log("user Disconnected", socket.id);
    });
});


server.listen(3001, () => {
    console.log('The Server is running on port 3001 ...');
});