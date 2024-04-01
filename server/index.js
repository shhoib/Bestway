const {Server} = require('socket.io');

const io = new Server(8000, {
    cors : true
});   
  io.on('connection', (socket) => {
    // console.log('a user connected',socket.id);
    socket.on('change:task:toServer',(data)=>{
        io.to(socket.id).emit('change:task',data)
    })
  });
  
