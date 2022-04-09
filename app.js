const io = require("socket.io-client");
//First Connect to the Server on the Specific URL (HOST:PORT)
let socket = io("http://localhost:3000");
//Now Listen for Events (welcome event).
socket.on("chat message", (data) => {
   /*For the listener we specify the event name and we give the callback to which be called one the 
   event is emitted*/
   //Log the Welcome message 
   
   console.log("Message: ", data);
});
socket.on('get-id', (data) => {
    console.log('id received')
    console.log(data)
})
// socket.emit('chat message', {msg:'Hello Porter', user:'Anshul'})
