var app = require('http').createServer()
var io = require('socket.io').listen(app)

app.listen(4000, "0.0.0.0", function () {
    console.log("Servidor rodando!");
});

io.on('connection', function (socket) {
    socket.on('disconnect', function () {
        // algo
    });

    socket.on('join', function (sala) {
        // socket.join(JSON.parse(sala).nome)
    })

    socket.on('luz', function (localObject) {
        console.log(localObject);
        // let mensagem = {
        //     'mensagem': message
        // }
        socket.broadcast.emit('luz', localObject);
    });
});
