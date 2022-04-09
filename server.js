const express = require("express");
const { userInfo } = require("os");
const app = express();

const cors = require('cors');
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;
let people = {}
let person = {
    name:'',
    socketId: ''
}

app.use(cors())

io.on("connection", socket => {
    console.log("a user connected :D"); 
    
    console.log('socket',socket.id)

    io.to(socket.id).emit('get-id', socket.id)

    socket.on("chat message", user => {
        people[user.socketId] = user
        console.log(user);
        io.emit("chat message", user);
    });
  });

  
//   io.to(socket.id).emit("event", data);

  server.listen(port, () => console.log("server running on port:" + port));