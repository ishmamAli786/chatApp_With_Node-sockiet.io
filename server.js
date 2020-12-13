const express=require('express');
const app=express();
const port=process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'))


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})


const server = app.listen(port, () => {
    console.log(`Server Is Running on Port ${port}....`)
})

//// Socket
const io = require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log('connected....')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
})










